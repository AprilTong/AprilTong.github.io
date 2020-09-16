/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8182b72b6b07a7b2f0af8101a79314af"
  },
  {
    "url": "accumulate/css/1.html",
    "revision": "7a3caf73357438987c6e74f1afc7f1e9"
  },
  {
    "url": "accumulate/index.html",
    "revision": "17dae4144d8535a03151ead74fdc832d"
  },
  {
    "url": "accumulate/js/index.html",
    "revision": "43c4d312b20ddd1c5853092195b622b4"
  },
  {
    "url": "accumulate/vue/1.html",
    "revision": "9a6641756900da35d96ac6052c582111"
  },
  {
    "url": "accumulate/vue/2.html",
    "revision": "1c346aabfab4b8ac2da34e752f815bdb"
  },
  {
    "url": "accumulate/vue/index.html",
    "revision": "4fc6ef38fa1e6399966f9bab3be2231c"
  },
  {
    "url": "algorithm/index.html",
    "revision": "c2f317bdacb3ed061610487884ae4db1"
  },
  {
    "url": "assets/css/0.styles.09715d05.css",
    "revision": "4323bac446eb6bba0eae56e8fc5a8a35"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.284b250c.js",
    "revision": "51caae6cf0286a26315f9db25facb402"
  },
  {
    "url": "assets/js/11.3de96ca6.js",
    "revision": "fee77777678e418820c1061d2bfbcb4c"
  },
  {
    "url": "assets/js/12.02b25f84.js",
    "revision": "1ac0ac7c25bf6f2bc5ec8e6377bf41dc"
  },
  {
    "url": "assets/js/2.318c0754.js",
    "revision": "4f3dfbc6dd07e548bcad92f27530dcaf"
  },
  {
    "url": "assets/js/3.a66f7247.js",
    "revision": "01732c5395b22ffb42b948533164877b"
  },
  {
    "url": "assets/js/4.e072158f.js",
    "revision": "7629476a8a425304722a2d7e21f04a9a"
  },
  {
    "url": "assets/js/5.a3677277.js",
    "revision": "2551ac49577fe81714b2571921f2e6f4"
  },
  {
    "url": "assets/js/6.6f6a737f.js",
    "revision": "cc0d737bac7f34f29d1de47837c8e4e7"
  },
  {
    "url": "assets/js/7.349989ec.js",
    "revision": "7d2759183d8607afd84353429569c157"
  },
  {
    "url": "assets/js/8.aba49238.js",
    "revision": "6fa71627659abefc4e75bf0cf03d8de4"
  },
  {
    "url": "assets/js/9.6de6c7dc.js",
    "revision": "271e145c64d477216fef2134fe68ed04"
  },
  {
    "url": "assets/js/app.247b2462.js",
    "revision": "355c87c294257da93cc94226e82d6628"
  },
  {
    "url": "images/photo.jpeg",
    "revision": "fae3ef8b6d055f24aeb77564c944c6ad"
  },
  {
    "url": "index.html",
    "revision": "e5459ee5bf3e4a31ef4222122eb65c94"
  },
  {
    "url": "others/index.html",
    "revision": "2e493210f55e7ae84ab7ef37a4f41fa3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
