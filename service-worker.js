if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"0f9f83fdfe96b8791635638eb926594f","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"0f9f83fdfe96b8791635638eb926594f","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"e1b4bb7171f893224fd40d3fb983c9a2","url":"static/css/22.80df4701.chunk.css"},{"revision":"0ff5cf098070438329a1271ddf981ca0","url":"static/js/0.a0c39cc9.chunk.js"},{"revision":"01d3c04078e6206025e239ca20f75984","url":"static/js/1.57fa4b2e.chunk.js"},{"revision":"e1de982326b770ca9b2839be89ef23e6","url":"static/js/11.a82a919f.chunk.js"},{"revision":"43a9e93478b2848e2e420b3f341c22bb","url":"static/js/12.b8307bbe.chunk.js"},{"revision":"a6465782c050401fb6920f2862cd501b","url":"static/js/13.183178e5.chunk.js"},{"revision":"aa5aa48360adc6638f9e311b04b37c89","url":"static/js/14.49476357.chunk.js"},{"revision":"4f87ced6bbd0eba95d8c08cdc388fabe","url":"static/js/15.d5336327.chunk.js"},{"revision":"a1136730624a1bc2f17dd8cfeef99394","url":"static/js/16.22b63590.chunk.js"},{"revision":"268c363ddc79074e85acd72c681c122c","url":"static/js/17.5ae569b5.chunk.js"},{"revision":"db7f175330bda4077382ae4ee59669d5","url":"static/js/18.d9af0af2.chunk.js"},{"revision":"953fa37e7ed572a304d340b82a868df8","url":"static/js/19.3ce442d6.chunk.js"},{"revision":"f0fbd43ae3c7cb2bce87ae3f37d9b816","url":"static/js/2.b9040596.chunk.js"},{"revision":"3bf4ee253bbd1bed30ed0f31b39ffa90","url":"static/js/20.11795b76.chunk.js"},{"revision":"90d55a56def83414b3bfd756a4f61c2a","url":"static/js/21.ef6560b6.chunk.js"},{"revision":"b72cc88da25f13ceea3d62e72131926d","url":"static/js/22.f3da62f2.chunk.js"},{"revision":"67f3073a7a06fc87e22cf8d7b72b05d2","url":"static/js/23.18371aa3.chunk.js"},{"revision":"5837ba9d191b29eb300dbc3e79826a3f","url":"static/js/24.8fc8774e.chunk.js"},{"revision":"cc2657c1b8c498b6222614bce36204da","url":"static/js/25.7ad96938.chunk.js"},{"revision":"23deca0c1af81b70fc4d458fbc84ca03","url":"static/js/26.4d1c5a86.chunk.js"},{"revision":"d7874a8db1032ad4953acb097865653b","url":"static/js/27.112ae372.chunk.js"},{"revision":"bff2affa1b2045c3f1e4819ad740f756","url":"static/js/28.56a02ff7.chunk.js"},{"revision":"b0a0037fdce0e7a78449151263fc5ba9","url":"static/js/29.40f59c61.chunk.js"},{"revision":"0abbca5434593cfc5cd35143f23610ab","url":"static/js/3.38cc0f4e.chunk.js"},{"revision":"8096b7e84ef20127c2a6dd0e994211b0","url":"static/js/30.64c791a4.chunk.js"},{"revision":"5f07bd9cb2dab5aafcf20b833068b77c","url":"static/js/31.676f9b5f.chunk.js"},{"revision":"74e9680b365c7186b3643f1f9cce9db0","url":"static/js/32.177efa5e.chunk.js"},{"revision":"97470936ee2c13625645b010b4ee7355","url":"static/js/33.169a5f31.chunk.js"},{"revision":"c4f5f06f052ef0d5af21047fd9b9cdbe","url":"static/js/34.b45dfc00.chunk.js"},{"revision":"7d617cdd4e814616a5c5e891a0a6dec3","url":"static/js/35.d2cdce80.chunk.js"},{"revision":"9b975df81d673237abf2efabae295ccd","url":"static/js/36.1d115ea8.chunk.js"},{"revision":"eb446d647142bff0a96b050f04ad2abb","url":"static/js/37.2f697952.chunk.js"},{"revision":"f884f4aab28ac9c82dc976f060d719cd","url":"static/js/38.beb5155c.chunk.js"},{"revision":"1b4ec1e90fb5ab762d2f7703caaeefed","url":"static/js/39.d1182d34.chunk.js"},{"revision":"6f2d773a71432e513a78fcdf2626b9a0","url":"static/js/4.2c0898e3.chunk.js"},{"revision":"4850ae193b6f6cbe9f46bae1687ebc45","url":"static/js/40.13fdbe8a.chunk.js"},{"revision":"b80546d021f63173d7810b0ad4659307","url":"static/js/41.69c8c0c0.chunk.js"},{"revision":"3e3d7294ffa8bb4f9c64dba44e3273ea","url":"static/js/42.40bf1f67.chunk.js"},{"revision":"ee23d9f078965201f9ad27eb71306936","url":"static/js/43.67d85a2c.chunk.js"},{"revision":"84740fe27bd31c6e6ae53bac6034747a","url":"static/js/44.4c1f7aa7.chunk.js"},{"revision":"13cefcd0461769506093a21639276e12","url":"static/js/45.bd4ac566.chunk.js"},{"revision":"a5483a5bb0b0a98302cf07d2452f7244","url":"static/js/46.8c39b76b.chunk.js"},{"revision":"1469a1635a24f58b0b6668123bd254aa","url":"static/js/5.d00deb67.chunk.js"},{"revision":"2586bf0c80b72ae133c72b656d3f23b3","url":"static/js/6.59de0973.chunk.js"},{"revision":"685a5ab8c030d3b9b38ab827d8d37336","url":"static/js/7.25f0e432.chunk.js"},{"revision":"3032c38ea1b966bc64fad73dcd30e394","url":"static/js/8.a1fd7803.chunk.js"},{"revision":"41458d2e61a21037631bc3a866f61073","url":"static/js/main.ff97b2b1.chunk.js"},{"revision":"b8bdf6738c2495596223d9ec0d2c5d99","url":"static/js/runtime-main.8f4101f2.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
