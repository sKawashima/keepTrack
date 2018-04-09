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
    "url": "/keepTrack/_nuxt/manifest.b195521bf4328148d069.js",
    "revision": "02e2f7bd4113744fb1bc61fa60ef2d49"
  },
  {
    "url": "/keepTrack/_nuxt/pages/index.8169da054d5b5f4c1478.js",
    "revision": "7b4897436a4f8ebf1a4b4a1c66d33253"
  },
  {
    "url": "/keepTrack/_nuxt/pages/input.b7bd72c826717ebd53ae.js",
    "revision": "349578d41e9ae889c7c991b4913483f0"
  },
  {
    "url": "/keepTrack/_nuxt/vendor.3f5f0b622c5245ea2488.js",
    "revision": "650d19d6f11db3e357d6da600e147a11"
  }
])


workboxSW.router.registerRoute(new RegExp('/keepTrack/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/keepTrack/.*'), workboxSW.strategies.networkFirst({}), 'GET')

