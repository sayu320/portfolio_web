'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ae713f1ac2860d7786e5641e4728e6d7",
"assets/AssetManifest.json": "4869e429fcd748fe2658f502f16e053d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d18b7f32a6b24bb5caee07715fdab099",
"assets/lib/assets/android%2520(2).png": "a8bdb699f85c026b1778e77bf0f48249",
"assets/lib/assets/blood_donation.png": "290c6ca08186bba3d6a00fd239313872",
"assets/lib/assets/Blood_donation1.png": "290c6ca08186bba3d6a00fd239313872",
"assets/lib/assets/Blood_donation2.png": "dfa9f1796086127bf184459071db3b14",
"assets/lib/assets/Blood_donation3.png": "29720b5ef5dd7443f04d62db1d2e4d4d",
"assets/lib/assets/Blood_donation4.png": "ff056a4e25b87bfe6ad94f2ee3f27b01",
"assets/lib/assets/Cart_provider1.png": "a0347e4578b462faf7b9a45e263ba86e",
"assets/lib/assets/Cart_provider2.png": "74570ea447ba8ae2fe5e6af8e23688e7",
"assets/lib/assets/coffee_shop.png": "a94e9b82a18c0a7cb55a1b5954664bd7",
"assets/lib/assets/Coffee_shop1.png": "a94e9b82a18c0a7cb55a1b5954664bd7",
"assets/lib/assets/Coffee_shop2.png": "8bd8d3a836d5ab8ee563463e908382b3",
"assets/lib/assets/Coffee_shop3.png": "6bd120079bc0eac312adda2208a24b5f",
"assets/lib/assets/Dart-logo.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/lib/assets/Firebase_icon.svg.png": "59e5d3877d3c0a771a6897194bb25da1",
"assets/lib/assets/flutter-icon-1651x2048-ojswpayr.png": "3c2c6c115979778e16d1c02b6ffb9176",
"assets/lib/assets/fruits_app.png": "e85e1a30479bafd343d2a10a874f3863",
"assets/lib/assets/Fruits_app1.png": "e85e1a30479bafd343d2a10a874f3863",
"assets/lib/assets/Fruits_app2.png": "02562ac5bae70e5545c5d4c53fe3d734",
"assets/lib/assets/Fruits_app3.png": "93e94313763c911e9a43ffbc44241d46",
"assets/lib/assets/gadgets_cart.png": "a0347e4578b462faf7b9a45e263ba86e",
"assets/lib/assets/gallery_icon.png": "a9c18c447884d5edcc9b6e5643741c5f",
"assets/lib/assets/Git-Icon-1788C.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/lib/assets/github_new.png": "1b4d70c4f53e457c9d86348ce032b881",
"assets/lib/assets/gmail_new.png": "718d409cf2e2575c271b146b9baafcc6",
"assets/lib/assets/linkedin_new.png": "d112bcc365a601f65aed660ce17aa50c",
"assets/lib/assets/money_manager.png": "c607ba952a79d33fa66a29034c4d1238",
"assets/lib/assets/Money_manager1.png": "fb30e6a4c031a06a0ead34d77be94a7e",
"assets/lib/assets/Money_manager2.png": "c607ba952a79d33fa66a29034c4d1238",
"assets/lib/assets/Money_manager3.png": "ed2c105eabc1f521a3fb968825d0e71a",
"assets/lib/assets/Money_manager4.png": "3a74d068ca5bb93c5a47eaf5f0b5c548",
"assets/lib/assets/Netflix1.png": "132608b5a59dc13837d56c4690423ebe",
"assets/lib/assets/Netflix2.png": "e900896caa9dcfaec5ab68b61dd3a506",
"assets/lib/assets/Netflix3.png": "b667351dc0ffa5069ae05d4e3fa36482",
"assets/lib/assets/Netflix4.png": "4c4e3270f02c7927921592031553a75e",
"assets/lib/assets/Netflix5.png": "6229c254cc1b56a8981aed4b5465ecfe",
"assets/lib/assets/Netflix6.png": "eba6acc861c528e459ef841d75ea161a",
"assets/lib/assets/netflix_clone.png": "132608b5a59dc13837d56c4690423ebe",
"assets/lib/assets/News1.png": "f52248e8e077c12bc34dedade0578474",
"assets/lib/assets/news_app.png": "f52248e8e077c12bc34dedade0578474",
"assets/lib/assets/port_dp.png": "a51bb044a9a342c81252d3241d92b36b",
"assets/lib/assets/Todo2.png": "39e2347d9519da5bf14c44768251adf8",
"assets/lib/assets/Todo3.png": "c036a4f48f2f766890e2916f120bfbd0",
"assets/lib/assets/Todo_1.png": "a691c01c94703d53b175b8c1940d6d49",
"assets/lib/assets/todo_app.png": "c036a4f48f2f766890e2916f120bfbd0",
"assets/lib/assets/Travelui.png": "b5ef84d22d48e0666a89d88195179b97",
"assets/lib/assets/travel_ui.png": "b5ef84d22d48e0666a89d88195179b97",
"assets/lib/assets/unnamed.png": "9fc1698524ac45ed79b24815850f34e2",
"assets/lib/assets/Visual_Studio_Code_1.35_icon.svg.png": "c0ef231c130eb5318bf5aa2df9268b04",
"assets/lib/assets/Weather1.png": "f6890238f7077f2d19c6a6d0371815b1",
"assets/lib/assets/weather_app.png": "f6890238f7077f2d19c6a6d0371815b1",
"assets/lib/assets/wide.png": "56f8273e266297e3b285c52275f7b84d",
"assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "36bb2c288e12fc38af64dfbde1be27ce",
"/": "36bb2c288e12fc38af64dfbde1be27ce",
"main.dart.js": "2a0960e9b249c31d19edb684a45107de",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"version.json": "cc132570d6d238130e38adc59e1f998d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
