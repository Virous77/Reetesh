if (!self.define) {
  let e,
    a = {};
  const s = (s, i) => (
    (s = new URL(s + '.js', i).href),
    a[s] ||
      new Promise((a) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = s), (e.onload = a), document.head.appendChild(e);
        } else (e = s), importScripts(s), a();
      }).then(() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, c) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (a[n]) return;
    let t = {};
    const d = (e) => s(e, n),
      f = { module: { uri: n }, exports: t, require: d };
    a[n] = Promise.all(i.map((e) => f[e] || d(e))).then((e) => (c(...e), t));
  };
}
define(['./workbox-f1770938'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/404_image.png', revision: 'f69db660aee4c6d130646c020f8010c5' },
        {
          url: '/_next/static/PWBjAoa3gz3Wa7U4FGdA6/_buildManifest.js',
          revision: '997be6cc6eff98764c9b68504f0cc8b4',
        },
        {
          url: '/_next/static/PWBjAoa3gz3Wa7U4FGdA6/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/135-74efd01dde6f6d3b.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/173-b809a7574c46e49e.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/182-8c6418fd0a119b5d.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/231-07cffd1a2e3c873e.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/303.b609dfcf21459502.js',
          revision: 'b609dfcf21459502',
        },
        {
          url: '/_next/static/chunks/421-21cb43592182643c.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/523-2e354ca43d6a2c3a.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/693.6d6244eada63ff20.js',
          revision: '6d6244eada63ff20',
        },
        {
          url: '/_next/static/chunks/720-b8cc407c6fc48dcb.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/770-5326bfebb9e333e7.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/789-e0ef445be6670963.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/833.eafcb83102f86938.js',
          revision: 'eafcb83102f86938',
        },
        {
          url: '/_next/static/chunks/925-8702745d181d3ee1.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/@modal/(.)skill/%5Bid%5D/page-ebd008cec92d70a0.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/@modal/default-7338069e2b7e9ef2.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-e4ba5f79e11a8692.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/blog/%5Bid%5D/page-437d9963a83d24e4.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/blogs/layout-064f31e1148ce072.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/blogs/page-a2b9e2beb9ef7feb.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/global-error-0120e61a5807c5cf.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/layout-1e670782df01f00e.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/not-found-69d74d6ef73c3a2e.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/page-ef4794491856fa06.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/projects/layout-e8fee31d66eedce1.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/projects/page-d1ec9691dbfdb798.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/skill/%5Bid%5D/page-b4ceeebb2bbedcca.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/skills/layout-22105669371618ca.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/app/skills/page-1b9465964d822884.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/fd9d1056-6de9d2fc713eef63.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/framework-f66176bb897dc684.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/main-app-c78e40e27118dcc0.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/main-dc83fcbcd3498ee0.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/pages/_app-6a626577ffa902a4.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/pages/_error-1be831200e60c5c0.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-723a6b66852b2ca2.js',
          revision: 'PWBjAoa3gz3Wa7U4FGdA6',
        },
        {
          url: '/_next/static/css/a743513d2cecbda4.css',
          revision: 'a743513d2cecbda4',
        },
        {
          url: '/_next/static/css/fbe791f8488ca543.css',
          revision: 'fbe791f8488ca543',
        },
        {
          url: '/_next/static/media/07103e16d41c9190-s.woff2',
          revision: '865bfc77817e078122fba2ff0a8e259c',
        },
        {
          url: '/_next/static/media/0fb93cc812fb4b50-s.woff2',
          revision: 'a18ad80bf268ef612116d884c2af418f',
        },
        {
          url: '/_next/static/media/13017c58cf72aedd-s.woff2',
          revision: '6007c746e2785673234104b918d8e3ec',
        },
        {
          url: '/_next/static/media/32702a3715dbd7c1-s.woff2',
          revision: '8c6c9a0ed2815ab4659cf6f10388aea2',
        },
        {
          url: '/_next/static/media/38ebcf0298551099-s.woff2',
          revision: '033d8b2a4bd7fddccb3e0b891f65ebbe',
        },
        {
          url: '/_next/static/media/404_image.38dbcedb.png',
          revision: 'f69db660aee4c6d130646c020f8010c5',
        },
        {
          url: '/_next/static/media/634216363f5c73c1-s.woff2',
          revision: '4a1bf14c88bdef173c2a39c5c60e65ce',
        },
        {
          url: '/_next/static/media/6dc02f179ba8da8f-s.woff2',
          revision: 'ec321a873a0a3dbb51083da484c6182c',
        },
        {
          url: '/_next/static/media/7b9ca6a1d31c5662-s.p.woff2',
          revision: '817c5aeb992050a67c54c8bf028a28a8',
        },
        {
          url: '/_next/static/media/84a39d905077a976-s.woff2',
          revision: 'cd3fed32b75d04b79cf48a95ef63b9a5',
        },
        {
          url: '/_next/static/media/88325a2c1fede2f4-s.woff2',
          revision: '93131c3ec4fe9782c2c40a708db9b0b6',
        },
        {
          url: '/_next/static/media/931105f8d96e7f26-s.p.woff2',
          revision: '6d1f2c44bd135848c7321937f7371e37',
        },
        {
          url: '/_next/static/media/9450a5aa688b86af-s.woff2',
          revision: 'ad7ab63936b2f4518d04ebbdf704c8ca',
        },
        {
          url: '/_next/static/media/aec774cbe1963439-s.woff2',
          revision: '37f8885214448afc8f3b3678db525598',
        },
        {
          url: '/_next/static/media/b0059268cc419911-s.woff2',
          revision: 'a7f4b74ef28825cce3f205bff67c9323',
        },
        {
          url: '/_next/static/media/b53e832d745212bc-s.woff2',
          revision: '330dec86fdfff71ea576b1456aa8b1d3',
        },
        {
          url: '/_next/static/media/bd2489da38fb1d0b-s.woff2',
          revision: 'ca4dd28ee25e096804bbb0dab6fc7dfe',
        },
        {
          url: '/_next/static/media/c7a495162773a63f-s.p.woff2',
          revision: '7db919af8577843004c4b5f564d9aa23',
        },
        {
          url: '/_next/static/media/d83fe381bb17eb77-s.woff2',
          revision: '215b11e73137fdb7d9a773e0211c29d6',
        },
        {
          url: '/_next/static/media/e1c529c04de64b40-s.p.woff2',
          revision: 'e88b1871ed8eef59b7df05a91a6f2157',
        },
        {
          url: '/_next/static/media/e80e9c14bdf82dd6-s.woff2',
          revision: '5b9e8288b8eac8b9b5c9239e1e7c8eeb',
        },
        {
          url: '/_next/static/media/ef3f4e253ce73be8-s.woff2',
          revision: '87b8cf1c8e2380fe1e3c000bd48ed5c6',
        },
        {
          url: '/_next/static/media/error.6d96ec2f.svg',
          revision: '14f40df862ee6fd4751a43d43c3a88ff',
        },
        {
          url: '/_next/static/media/f0b16be9a95e8820-s.woff2',
          revision: '48487e645e8bd5ac883f1175b4efdfe0',
        },
        {
          url: '/_next/static/media/f1d4c48219b1bd72-s.woff2',
          revision: 'e46df47bb1e1cf796f08f67211174cef',
        },
        {
          url: '/_next/static/media/f2988470e2e746be-s.woff2',
          revision: '89143b5f41037c26ec098f61cff925dc',
        },
        {
          url: '/_next/static/media/fbdbe464b9e5cc95-s.p.woff2',
          revision: '10d972b68f617d88f222c728a169e5f2',
        },
        {
          url: '/android-chrome-192x192.png',
          revision: 'aec5b643c4d61287535e3bcd7f04728b',
        },
        {
          url: '/android-chrome-512x512.png',
          revision: 'db4982993fd7b82a8d67dde3c477a60f',
        },
        {
          url: '/apple-touch-icon.png',
          revision: 'ec1e589fc8b2c374f84108a39d853c0c',
        },
        { url: '/error.svg', revision: '14f40df862ee6fd4751a43d43c3a88ff' },
        {
          url: '/favicon-16x16.png',
          revision: '52466217d4ab8fd7d1d3481479f673b7',
        },
        {
          url: '/favicon-32x32.png',
          revision: '4719c92e313406218904fdf6262fa9e2',
        },
        {
          url: '/google4123098aa3a1e8ce.html',
          revision: '0822a2a39839f65993ee4b344e0e749e',
        },
        { url: '/message.svg', revision: '40ad66d658138e294be2deea0fda07c6' },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: a } }) =>
        !(!e || a.startsWith('/api/auth/callback') || !a.startsWith('/api/')),
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: a }, sameOrigin: s }) =>
        '1' === e.headers.get('RSC') &&
        '1' === e.headers.get('Next-Router-Prefetch') &&
        s &&
        !a.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: a }, sameOrigin: s }) =>
        '1' === e.headers.get('RSC') && s && !a.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: a }) => a && !e.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
