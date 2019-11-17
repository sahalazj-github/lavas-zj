importScripts("/lavas-zj/precache-manifest.042be6ccbb3291f89ed3f6328fef3e2d.js");


        importScripts('/lavas-zj/static/workbox-v3.6.3/workbox-sw.js');
        workbox.setConfig({
            modulePathPrefix: '/lavas-zj/static/workbox-v3.6.3/'
        });
    /**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author zhangjing74(sahala_zj@baiddu.com)
 */

/* globals workbox */
workbox.core.setCacheNameDetails({
    prefix: 'lavas-cache',
    suffix: 'v1',
    precache: 'install-time',
    runtime: 'run-time',
    googleAnalytics: 'ga'
});
// workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
self.addEventListener('message', event => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
});

/**
 * example runningCache with api
 */
//workbox.routing.registerRoute(/https:\/\/js\.arcgis\.com\/4\.13|https:\/\/map\.geoq\.cn|https:\/\/www\.arcgis\.com|https:\/\/geocode\.arcgis\.com/,
workbox.routing.registerRoute(/https:\/\/(\w+\.)+geoq\.cn|https:\/\/(\w+\.)+arcgis\.com/,
    workbox.strategies.networkFirst());

/**
 * example runningCache with resources from CDN
 * including maxAge, maxEntries
 * cacheableResponse is important for CDN
 */
 workbox.routing.registerRoute(/^https:\/\/cdn\.baidu\.com/i,
     workbox.strategies.cacheFirst({
         cacheName: 'lavas-cache-images',
         plugins: [
             new workbox.expiration.Plugin({
                maxEntries: 100,
                maxAgeSeconds: 7 * 24 * 60 * 60
            }),
            new workbox.cacheableResponse.Plugin({
                 statuses: [0, 200]
          })
         ]
     })
 );




