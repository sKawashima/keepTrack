importScripts('/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "keepTrack",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.d40b6ff4d3dceb319f99.js",
    "revision": "2d4ba19777975335cf9fe4f48a4f5bea"
  },
  {
    "url": "/_nuxt/layouts/default.4ed2cd773cd362ad9146.js",
    "revision": "2aed0262ba31fcc18a13366e7aa3a0cc"
  },
  {
    "url": "/_nuxt/manifest.baf64aba11ac4bae17f1.js",
    "revision": "da43d15a311272e18e30a0e9a2173c6a"
  },
  {
    "url": "/_nuxt/pages/index.fad80f5c9dc15de569a0.js",
    "revision": "016e86ae9cbd72c6fcc2bc4ae7bbea04"
  },
  {
    "url": "/_nuxt/vendor.07a987938fbe3ed5c8bf.js",
    "revision": "a381eb154e91b1e3e1fa03d6d0f7d1f7"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

