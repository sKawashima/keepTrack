importScripts('/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "keepTrack",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.30f762037494ced720a4.js",
    "revision": "33ff766360064d815ef9186879931256"
  },
  {
    "url": "/_nuxt/layouts/default.e50e9d13f3c71f9e1fb8.js",
    "revision": "327bd4a833a0f23ca232e534782b8ff6"
  },
  {
    "url": "/_nuxt/manifest.ac5630a8fb7aed99b85d.js",
    "revision": "874f965daebf5723e4dc2db32ceb030f"
  },
  {
    "url": "/_nuxt/pages/index.7f8e584c817f49f9d608.js",
    "revision": "179f267590c3bff335253d1f399d0429"
  },
  {
    "url": "/_nuxt/pages/input.295ad52dc3d73e5ce2bc.js",
    "revision": "4c973262ce512303957db379c46c764a"
  },
  {
    "url": "/_nuxt/vendor.f853928c7a9283fcf0f3.js",
    "revision": "5f12eee8632a2e08149edd8973225a6a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

