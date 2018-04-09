importScripts('/keepTrack/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "keepTrack",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/keepTrack/_nuxt/app.f2bcfbd29f80c3f6ed4f.js",
    "revision": "a31a541d2d3fecd72782d000e2587646"
  },
  {
    "url": "/keepTrack/_nuxt/layouts/default.3babb8b9616dc5c4d8cd.js",
    "revision": "0497acb2394d6d6decf0be67e701cec2"
  },
  {
    "url": "/keepTrack/_nuxt/manifest.c9c80024f3110ef98ea6.js",
    "revision": "20dce770ca66aa91dc1b971d9e276d57"
  },
  {
    "url": "/keepTrack/_nuxt/pages/index.8169da054d5b5f4c1478.js",
    "revision": "7b4897436a4f8ebf1a4b4a1c66d33253"
  },
  {
    "url": "/keepTrack/_nuxt/pages/input.36c0b6982e73ce288f49.js",
    "revision": "2380f9f97e273b392565803d1ca32ce0"
  },
  {
    "url": "/keepTrack/_nuxt/vendor.3f5f0b622c5245ea2488.js",
    "revision": "650d19d6f11db3e357d6da600e147a11"
  }
])


workboxSW.router.registerRoute(new RegExp('/keepTrack/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/keepTrack/.*'), workboxSW.strategies.networkFirst({}), 'GET')

