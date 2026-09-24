const CACHE='financas-clinica-v8';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch', event => {
  if(event.request.method!=='GET') return;
  event.respondWith(
    fetch(event.request).then(resp=>{
      if(resp && resp.ok) caches.open(CACHE).then(cache=>cache.put(event.request, resp.clone()));
      return resp;
    }).catch(()=>caches.match(event.request))
  );
});
