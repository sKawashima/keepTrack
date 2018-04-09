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
    "url": "/keepTrack/_nuxt/manifest.3c01108471f92b00e438.js",
    "revision": "8e1ce821ff175cad7e3bc0781bf18cef"
  },
  {
    "url": "/keepTrack/_nuxt/pages/index.d336bd53b29433aa3339.js",
    "revision": "a41496c6d79f0ea6edaaa1a5af7b3df6"
  },
  {
    "url": "/keepTrack/_nuxt/pages/input.052fef6d71c5835f70e0.js",
    "revision": "0ba7ca9d9c8258fb34eeb944d0f38d16"
  },
  {
    "url": "/keepTrack/_nuxt/vendor.f853928c7a9283fcf0f3.js",
    "revision": "5f12eee8632a2e08149edd8973225a6a"
  }
])


workboxSW.router.registerRoute(new RegExp('/keepTrack/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/keepTrack/.*'), workboxSW.strategies.networkFirst({}), 'GET')

