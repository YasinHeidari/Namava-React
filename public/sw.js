self.addEventListener('install', (event) => { 
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event, clients) => {

    event.waitUntil(clients.claim());
  });
  
  self.addEventListener('fetch', (event) => {
    
  });
  