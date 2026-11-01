import { lookup } from 'node:dns/promises';
import { BlockList, isIP } from 'node:net';

const privateAddresses = new BlockList();

(
  [
    ['0.0.0.0', 8],
    ['10.0.0.0', 8],
    ['100.64.0.0', 10],
    ['127.0.0.0', 8],
    ['169.254.0.0', 16],
    ['172.16.0.0', 12],
    ['192.0.0.0', 24],
    ['192.168.0.0', 16],
    ['198.18.0.0', 15],
    ['224.0.0.0', 4],
    ['240.0.0.0', 4],
  ] as const
).forEach(([net, prefix]) => privateAddresses.addSubnet(net, prefix, 'ipv4'));

(
  [
    ['::', 128],
    ['::1', 128],
    ['fc00::', 7],
    ['fe80::', 10],
    ['ff00::', 8],
  ] as const
).forEach(([net, prefix]) => privateAddresses.addSubnet(net, prefix, 'ipv6'));

const isPrivateAddress = (address: string) =>
  privateAddresses.check(address, isIP(address) === 6 ? 'ipv6' : 'ipv4');

export const parsePublicUrl = async (value: string): Promise<URL | null> => {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
  if (url.username || url.password) return null;
  if (url.port && url.port !== '80' && url.port !== '443') return null;

  const hostname = url.hostname.replace(/^\[|\]$/g, '');

  try {
    const addresses = isIP(hostname)
      ? [{ address: hostname }]
      : await lookup(hostname, { all: true });

    if (addresses.length === 0) return null;
    if (addresses.some(({ address }) => isPrivateAddress(address))) return null;
  } catch {
    return null;
  }

  return url;
};

const MAX_REDIRECTS = 3;
const MAX_HTML_BYTES = 1_000_000;
const TIMEOUT_MS = 5_000;

const readLimitedText = async (response: Response) => {
  const reader = response.body?.getReader();
  if (!reader) return '';

  const decoder = new TextDecoder();
  let html = '';
  let bytes = 0;

  while (bytes < MAX_HTML_BYTES) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.length;
    html += decoder.decode(value, { stream: true });
  }

  await reader.cancel();
  return html;
};

// Follows redirects by hand so every hop is checked, not just the first URL.
export const fetchPublicHtml = async (startUrl: URL) => {
  let url = startUrl;
  const signal = AbortSignal.timeout(TIMEOUT_MS);

  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const response = await fetch(url, {
      redirect: 'manual',
      signal,
      headers: { accept: 'text/html' },
    });

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location');
      const next = location && (await parsePublicUrl(new URL(location, url).href));
      if (!next) return null;
      url = next;
      continue;
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (!response.ok || !contentType.includes('text/html')) return null;

    return { html: await readLimitedText(response), url };
  }

  return null;
};
