import ogs from 'open-graph-scraper';
import { createClient } from '@vercel/kv';
import { NextRequest } from 'next/server';

type TData = {
  title: string | null;
  description: string | null;
  image: string | null;
  key: string;
};

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response('url is required', {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const kv = createClient({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  });

  const isCached: TData | null = await kv.get(`preview:${url}`);
  if (isCached)
    return new Response(JSON.stringify(isCached), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  const options = { url };
  const data = await ogs(options);
  const { result } = data;

  const href = new URL(url);
  const image = result.ogImage
    ? result.ogImage[0].url
    : `${href.origin}${result.favicon}` || null;
  const dataObj = {
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
    image: !image?.includes('http') ? `${href.origin}${image}` : image,
    key: url,
  };

  await kv.set(`preview:${url}`, JSON.stringify(dataObj), {
    ex: 345600,
  });
  return new Response(JSON.stringify(dataObj), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
