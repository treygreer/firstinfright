// Retire the former viewer's root-scoped worker and cached index page.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  const oldCaches=keys.filter(key=>key.startsWith('treb-viewer-'));
  await Promise.all(oldCaches.map(key=>caches.delete(key)));
  await self.clients.claim();
  await self.registration.unregister();
  for(const client of await self.clients.matchAll({type:'window'})) {
    const url=new URL(client.url);
    if(oldCaches.length && url.origin===self.location.origin && (url.pathname==='/' || url.pathname==='/index.html'))await client.navigate(client.url);
  }
})()));
