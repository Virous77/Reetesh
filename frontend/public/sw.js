let DYNAMIC_CACHE_NAME = "reetesh-v1.2";

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== DYNAMIC_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return (
          response ||
          fetch(event.request).then((fetchResponse) => {
            if (fetchResponse.status === 200) {
              return caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
                cache.put(event.request.url, fetchResponse.clone());
                return fetchResponse;
              });
            } else {
              return fetchResponse;
            }
          })
        );
      })
      .catch((error) => {
        console.error("Error fetching:", error);
      })
  );
});
