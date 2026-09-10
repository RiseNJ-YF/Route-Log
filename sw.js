/* Route Log offline shell.
   Bump CACHE when you change index.html, or the old copy keeps being served. */
var CACHE = "route-log-v4";
var SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE)
      .then(function(c){ return c.addAll(SHELL); })
      .then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys()
      .then(function(keys){
        return Promise.all(keys.map(function(k){
          return k === CACHE ? null : caches.delete(k);
        }));
      })
      .then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;

  // Page loads: cache first, so it opens instantly and works with no signal.
  if(req.mode === "navigate"){
    e.respondWith(
      caches.match("./index.html").then(function(hit){
        return hit || fetch(req);
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function(hit){
      if(hit) return hit;
      return fetch(req).then(function(res){
        // Stash same-origin extras (and the web font) for next time.
        if(res && res.status === 200){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
        }
        return res;
      }).catch(function(){ return hit; });
    })
  );
});
