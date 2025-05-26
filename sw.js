// 定義快取名稱與版本號
const CACHE_NAME = 'websiteclock-cache-v1';

// 要快取的資源清單，全部放入離線可用的檔案路徑
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/clockwebsite_twtime_icon.png',
  // 若有CSS或JS分離檔案，也要放進來
];

// 安裝階段：將指定資源快取
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 啟動階段，清理舊版快取（選擇性，根據需求調整）
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// 攔截所有請求，優先從快取回應，無則從網路取得並加入快取
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(networkResponse => {
        // 可選擇是否將新資源加入快取
        return networkResponse;
      });
    })
  );
});
