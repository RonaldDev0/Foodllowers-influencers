if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),u={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>u[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-3c9d0171"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/c2JsNLBjV9c0u0kk9r5OZ/_buildManifest.js",revision:"c8964677bf69f6731cef3db5b4b92dc9"},{url:"/_next/static/c2JsNLBjV9c0u0kk9r5OZ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0b1345d3-fc1437255ad64bc3.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/191-4aa4b20d49f3824f.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/323-5f4e773a73c8a7f2.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/332-ce4a1df1eb3c5f31.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/334-a0483bfa5d4e732c.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/395-8068141a4d48d865.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/424-6caaca52321754c6.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/429-c733d60eeeec7590.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/438-4e8574487c6a9669.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/459-e2c52648c22f5372.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/49b0b5a3-89c3a8a5dec8aceb.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/57-2c75fcdfe64a40e4.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/609-9b71735ef069a535.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/645-5fd42d17c1537f52.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/69c24081-9b4e0bbc094fe0c9.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/709-2949c5171311bfc2.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/762-9bb82bb84761d662.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/788.594a346c03ecc563.js",revision:"594a346c03ecc563"},{url:"/_next/static/chunks/854-053d862686cc9fc9.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/904-709af5b6efc47d22.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/961-037abee7ae75d5d6.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/995-7324ffc22e43ae64.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/app/_not-found-2e3eb3d1e7881f65.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/app/charts/page-d868da3317454dee.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/app/dashboard/page-cd42af4c650f054c.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/app/layout-5cfa17e888368817.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/app/login/page-5e2ba21872099206.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/app/page-99d56572bc079dfa.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/app/products/page-e71a1f74078817c3.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/app/profile/page-7595a0b9a7a4220f.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/app/register/page-675f2ddcf2ff2a34.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/app/settings/bank-account/page-c9842a7a00ea6ba7.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/app/settings/layout-fd9d174bdbea34ad.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/app/settings/page-6c36d7fbdb63174f.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/app/validation/page-35b91f3d3aa83d77.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/framework-c99e0eef6309e1fa.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/main-app-163c525beb2000e0.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/main-e16b55b4004093be.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/pages/_app-b98ac6041671889e.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/pages/_error-c54f0e0ba88d1414.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1d2b70c3c8781275.js",revision:"c2JsNLBjV9c0u0kk9r5OZ"},{url:"/_next/static/css/33eddb5df96642d4.css",revision:"33eddb5df96642d4"},{url:"/icon-192x192.png",revision:"12fd3cc70f6145b29d17cb4d91188ed2"},{url:"/icon-256x256.png",revision:"15589f5acaf4d18ed0f432b909ff12e1"},{url:"/icon-384x384.png",revision:"537d2e4475766608ee553d02aac95129"},{url:"/icon-512x512.png",revision:"6742319cd1bab509ac83498fd08fe365"},{url:"/icons/google.svg",revision:"686f8efa6e3e28e96d1c08399e8d353d"},{url:"/img.avif",revision:"b9c68e8d4fdf1d6507aa3bd1fc02c9cb"},{url:"/img/LogName.png",revision:"f15d7d02b0ab0a31e9ed33da7bc28528"},{url:"/manifest.json",revision:"a780ef8b786f0a1678e435128fbc6f56"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
