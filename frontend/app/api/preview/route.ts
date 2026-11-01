import ogs from 'open-graph-scraper';
import { createClient } from '@vercel/kv';
import { NextRequest } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { fetchPublicHtml, parsePublicUrl } from '@/lib/safe-url';

type TData = {
  title: string | null;
  description: string | null;
  image: string | null;
  key: string;
};

const MAX_URL_LENGTH = 2048;
const CACHE_SECONDS = 345600;

const json = (body: unknown, status = 200) =>
  Response.json(body, {
    status,
    headers: { 'X-Content-Type-Options': 'nosniff' },
  });

const toHttpUrl = (value: string | undefined, base: URL) => {
  if (!value) return null;
  try {
    const url = new URL(value, base);
    return url.protocol === 'http:' || url.protocol === 'https:'
      ? url.href
      : null;
  } catch {
    return null;
  }
};

export const GET = async (req: NextRequest) => {
  // Only this site's own pages call this. The header can be forged outside a
  // browser, so the rate limit below is what bounds direct abuse.
  if (req.headers.get('sec-fetch-site') !== 'same-origin') {
    return json({ error: 'Forbidden' }, 403);
  }

  const value = req.nextUrl.searchParams.get('url');
  if (!value || value.length > MAX_URL_LENGTH) {
    return json({ error: 'A valid url is required' }, 400);
  }

  const url = await parsePublicUrl(value);
  if (!url) return json({ error: 'A valid url is required' }, 400);

  const kv = createClient({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  });

  const cacheKey = `preview:${url.href}`;
  const cached: TData | null = await kv.get(cacheKey);
  if (cached) return json(cached);

  const { allowed } = await rateLimit('preview', 20, 60, req.headers);
  if (!allowed) return json({ error: 'Too many requests' }, 429);

  try {
    const page = await fetchPublicHtml(url);
    if (!page) return json({ error: 'No preview available' }, 404);

    const { result } = await ogs({ html: page.html });

    const data: TData = {
      title:
        result.ogTitle ||
        result.ogSiteName ||
        result.twitterTitle ||
        result.dcTitle ||
        null,
      description:
        result.ogDescription ||
        result.twitterDescription ||
        result.dcDescription ||
        null,
      image: toHttpUrl(result.ogImage?.[0]?.url ?? result.favicon, page.url),
      key: value,
    };

    await kv.set(cacheKey, JSON.stringify(data), { ex: CACHE_SECONDS });
    return json(data);
  } catch (error) {
    console.error('Link preview failed', error);
    return json({ error: 'No preview available' }, 404);
  }
};
