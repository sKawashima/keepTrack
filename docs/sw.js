importScripts('/keepTrack/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "keepTrack",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/keepTrack/_nuxt/app.e6b18355edf956b56c31.js",
    "revision": "7f15ad779fee7702e759831bc0a1883f"
  },
  {
    "url": "/keepTrack/_nuxt/layouts/default.0a804a3f7866142d8cc2.js",
    "revision": "8a654febc3205d7c71d44016f17b3c66"
  },
  {
    "url": "/keepTrack/_nuxt/manifest.a27a7f4e702981fb6d31.js",
    "revision": "445b15d93d9bc5b77b30cc9b68f5f4d2"
  },
  {
    "url": "/keepTrack/_nuxt/pages/index.d336bd53b29433aa3339.js",
    "revision": "a41496c6d79f0ea6edaaa1a5af7b3df6"
  },
  {
    "url": "/keepTrack/_nuxt/pages/input.9d0e25641a23ca738ba5.js",
    "revision": "e7f579e8bd8d3a1dd8251ff94da26879"
  },
  {
    "url": "/keepTrack/_nuxt/vendor.f853928c7a9283fcf0f3.js",
    "revision": "5f12eee8632a2e08149edd8973225a6a"
  }
])


workboxSW.router.registerRoute(new RegExp('/keepTrack/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/keepTrack/.*'), workboxSW.strategies.networkFirst({}), 'GET')

