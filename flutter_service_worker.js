'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "55ecfbe5b385c8ce9625c29d2e7b8960",
"version.json": "ca3a02d02e063577bade630eea4ba96f",
"index.html": "3094f6d29465c5c2ff0215f7fedda52a",
"/": "3094f6d29465c5c2ff0215f7fedda52a",
"main.dart.js": "1dfd2ebb833c94d9e0a70a46f0fd978d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5c42bcc08448af20a6db4389560d5382",
".git/ORIG_HEAD": "0dd9578007963e9c6c9016bd61633003",
".git/config": "73900060604e2c36d936f038d6cd723a",
".git/objects/59/057062426f6f6f174818fb34bbb1606a9290ad": "cfe281ecd51fcfb11f730974911cf82f",
".git/objects/68/49374f60c30a5d3492b69808daf378169f8c59": "5f4c84d84072d0afb5a10df7dcfc28e2",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/9e/c8ca61bceba17fd749aa6e825ea7dc43629570": "17c4c1acb11be652a1db5a4940ab364e",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/35/727a7c84313711c953255d6f2d2a6958a37c8f": "41801cf012760f3d760928aefa5e7e3c",
".git/objects/58/efca3268a26d2f58def4ca326c1bd4cfdf2ac7": "a5867f82162f5dc56d4765f2dc0fd3f4",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/59f8c44a2aa1b77af19b882d3c5f0694abbc2a": "5fbd77ea985925181753622fe0b2a0bf",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/0b5046ff7cdab41b6d148721502c78b922df1d": "aaedf62e71946e117a25424caf2eeaa9",
".git/objects/34/107b35dcfe4256138db3d466bef707a08923d5": "fffb0359a0512d06eef943662b679f75",
".git/objects/5f/751b98ce69b387fd1b7bc94b54f42ec195caa8": "0c67545f5e55bb6cb49585d4f27c870c",
".git/objects/02/819c72bf826e08a6fffa37f09fdff051aa6935": "fb71c26803cbf9b8cefc26881294915b",
".git/objects/a4/ac8d3143208c1713bab314be791b2223ce6bcb": "5f959ab194d1de6ebd835c1a4c57a0fb",
".git/objects/b5/b3fb9059378071f57b7e42effbb04742125f5c": "3718661a3d7b75490158035bebf96e63",
".git/objects/d9/707324afa13e4cdafd49439578c76aeeb27cf1": "105bfcc4a55854087cd9ff2a563fc3e3",
".git/objects/d9/e9bbeacef0eaee1e767b069babf7b90aa65f80": "af6c0497ffc128463b34665a064560d4",
".git/objects/ad/7ba0f0a8f824cb17f6222c12a064468dc04efb": "79e75232a0a8d06ee2f91ee53f9981fa",
".git/objects/d7/f3cc7e4280c8c83947be40580376f792a1b779": "5d6f39742d2465055d21ebe817bf63dc",
".git/objects/d0/7cccb458592c55a8cdb5805aab2276f3091837": "c23335302f52519fcfa8bbd54760bdde",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/fd5ac60f2bbf55181ac75d7477ac2b006aeeec": "6d73d70d158958df34483a1dbdff2d5e",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/bd/6578624cf5fbb07eb70473c1e5f09a6276b9a6": "6243e6114a7776a1e4c7c9e4a72fbbdd",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/1f9742cec4958968447a835f5a457f881eb01b": "9f03a39dd260523895738c4648bbab89",
".git/objects/ae/d0c45c91b3ab34dfaa8d838e9183eb9da347f5": "0af911437d954b709cf87dd230de95e9",
".git/objects/e5/a674c5d571e375d769f4e312b933c26f88bfd0": "9769a87e740918e6ba8b23f1eb165a36",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/4b4bd40b01661de4cd08c953e863c7e83b960c": "f45204f14c6a26a8975891ecb47f5ac1",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/4e/8e789d214d48a5640bed788e568897b839cf56": "981d736e44f1e708faeeadb61717f654",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/42/895fb3d717788abecd2c2e2c7918882d1cff7e": "fe15d25210f4d1ee185b0e5b6356a406",
".git/objects/89/96e71034db67c9d8d2507bf206e55a940ea0a7": "96d83996550fac509df134c0c1fd1f6b",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8f/0dad064180ac697881afe9a8bee445e5380614": "3400f3660537141d43dff118f760e3a5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/09fcd35b0d00bb46921c8cf47486af9d812d8c": "9a1399d625e9cdf2bf87c1895a718dc0",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/65f6fe631e61219a456b1b3883463704584cd8": "bb3dca825f424dd6eda1b76a0c65ac0e",
".git/objects/9a/b0316f05dd7fda3724605244dbf028d62482d2": "984a897ebad6b64290e49f1645dfb785",
".git/objects/9a/d303a30ae97d0d5ef1b4956c7ef9cef175385f": "187d421eef1b0a6279a9445abf7ba092",
".git/objects/9a/c28c8a9bd6c718d601317b834e1ec2ee22d8a1": "cceb9b2a0d024f8afea1b58db50e07d3",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/91/20a843e62aa289da586e0d701293c01bc36e56": "359113f3e59f328f977efb03bfdc25a3",
".git/objects/65/9210c61e61d1e92d50d99dd291eb8abcfbf7a3": "b446553e95c6ff7aa3c372c73b823f83",
".git/objects/62/0fc64b5f69ae076ef1079e4dbbca0e33830735": "e50054d8f4aec0c99a959252fd3c6611",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/53/ea7c2b2f67fc5f0faf09f17821267dd024d1b5": "8afcf36e749dbbf18603b86c09e436e1",
".git/objects/39/006295a0e644d6f03c5e4c0a715c1f6ec0055c": "2ef4b3ce0d8191b32ef38d607feff566",
".git/objects/63/5c6f158c09920bfa8d6e8d39104258fa405f9d": "84c542baeefc1b1121706e6a365fe04b",
".git/objects/0a/12ab5e170ca3a35bcb783e64d9b0746405cd90": "b3b3428ce47f8d6fb627f4364bd25c60",
".git/objects/64/6b7f9f4dfbf5a514adbe5b06d1c8537e706a2a": "44f59d93ccda0eb6c286f1dd4a972b2b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/daa934d893f79145900f172d0f013daee5e3da": "89adfe4c2c8a0ffc0a3465f093b07a62",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f74ea2f1dea91015dc0c9839e774b67892e15e": "542686b9875395838cb2c44280909214",
".git/objects/ef/6aa2cf6edbe2f5b7532340c86d891738e4a0ef": "bdb4f87f0d2e1bc371ecd209e118ac1b",
".git/objects/c3/a65a5d74c80b422d0b5d80186621258d183590": "6211302096a1f08ed1ef967c03492b2b",
".git/objects/c2/9066a6ea61a6d542211def83b0520d017c087c": "deee9a2e8fc7eaf29c55271166a12ef5",
".git/objects/f1/1be5249e386df26c0e31522b6518501699a1df": "eea83989d3e88c7c3e335008a49ce792",
".git/objects/f1/e89ef1569baaf84437e7f35bad56d485c464bc": "486ee40e2fb3c9109f6ea5165c1ae8a8",
".git/objects/f1/0eeb8dd5b3f8651de822be1124af3f847671d1": "f9eb7ff33dd3ae5eec12aa03eed68614",
".git/objects/ce/94d1da13d6313d3f46e86b0ace0e544348f56c": "cabe604646b5210f7a4c35ce9bec7364",
".git/objects/2c/de8cc45d1d57a7269850d825f29fe08fda3977": "372511ac929cf39c008f0ee8b45a52c9",
".git/objects/2c/d29fb499094e48a9c88351a6f91876f134b4f9": "31289f723c0b4b7891ca88e188d45c3f",
".git/objects/24/2b18021a4ca477ee7b7d539fc1603468e38efa": "9ade655086295c7649f77e6399567080",
".git/objects/23/1ed9f4097ac0c786f9837a73d6429a7eb0cb2d": "4ab6b92895346f727478c6ca798083b2",
".git/objects/85/fe01ff44862189292bf0970ebbed5880f44164": "4e4e08611b3619cfaf443eda75876ddb",
".git/objects/85/e3f9a60b3ca922a8d49699559f7f85f218c906": "588cad0818256e478c5278e763d97de3",
".git/objects/71/179fe395b995fe6481d749e3bac03ff961dc9e": "c43e33360453e14c911981c16f2bc840",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/1c/cd4595d2508dc982ae952d4b46f15480692cdd": "a41a345083363dfa6f68f377b5db26c9",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/48f8c3b5fbd8d3b9cdcdf8626e09903054f238": "0617cf89f3ba21d39d4ac6a01a4be3b6",
".git/objects/40/baaa2b3b82129f52e73bc154e76da6e30019f8": "28b3115fa382c19d80dca1c78676947f",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/40/87985a3bcf984fab7a2722737dec59a946441c": "298f947ecb090c400deaf827d2f6c5b0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "e18cd1d6c4c7adbd11b63556d53e5ba2",
".git/logs/refs/heads/master": "176625853666b79f1da0a922d798a029",
".git/logs/refs/heads/main": "0a82cf97e67d488e916569af8febea62",
".git/logs/refs/remotes/origin/main": "41c6edd36ac5ca64e8b6865eff249c90",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "0276c185638cd63ea9a07c1fdbf94608",
".git/refs/heads/main": "7286eeb6847ad74929994c45f5194329",
".git/refs/remotes/origin/main": "7286eeb6847ad74929994c45f5194329",
".git/index": "51b07cd1693142229f294c0f5b77b96c",
".git/COMMIT_EDITMSG": "6f4f98a9299b01ecb203e8e2fc8a4bcd",
".git/FETCH_HEAD": "8662bc71ff587145bb41983c48e6dc6f",
"assets/AssetManifest.json": "62d4fb8c9c02bff73883b29063b3e8df",
"assets/NOTICES": "a35a86e9ae86549b2ec0678cb5f6fa8d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "45662c999f3aa6ce3cd9fd505f00a5cd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b7358e4b5868102f9465309d2d0c1066",
"assets/fonts/MaterialIcons-Regular.otf": "e13d2545c22dae513900c86df2c882af",
"assets/assets/images/github.png": "2dc32ed64c29cc81810431e55f9df5b5",
"assets/assets/images/profile.png": "74780087172f78cc2f6a838c1fab5008",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
