import { createClient } from '@vercel/kv';
import { headers } from 'next/headers';

// Vercel overwrites these headers, so unlike anything in a request body the
// client cannot choose its own value. Self-hosting needs a proxy that does too.
const getClientIp = (requestHeaders: Headers) =>
  requestHeaders.get('x-real-ip') ||
  requestHeaders.get('x-forwarded-for')?.split(',')[0]?.trim() ||
  'unknown';

type TRateLimit = {
  allowed: boolean;
  count: number;
};

export const rateLimit = async (
  scope: string,
  limit: number,
  windowSeconds: number,
  requestHeaders?: Headers
): Promise<TRateLimit> => {
  if (process.env.NODE_ENV === 'development') {
    return { allowed: true, count: 1 };
  }

  const ip = getClientIp(requestHeaders ?? (await headers()));
  const key = `rate:${scope}:${ip}`;

  try {
    const kv = createClient({
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    });

    // incr is atomic, so parallel requests cannot all read the same count.
    const count = await kv.incr(key);
    if (count === 1) await kv.expire(key, windowSeconds);

    return { allowed: count <= limit, count };
  } catch (error) {
    // A KV outage should not take comments and likes down with it.
    console.error('Rate limit check failed', error);
    return { allowed: true, count: 1 };
  }
};
