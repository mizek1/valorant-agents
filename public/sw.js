if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>n(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/AqKEuFPhqPegzTeBXfosO/_buildManifest.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/_next/static/AqKEuFPhqPegzTeBXfosO/_middlewareManifest.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/_next/static/AqKEuFPhqPegzTeBXfosO/_ssgManifest.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/_next/static/chunks/0b7b90cd.26a3995d0dc7cc17.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/_next/static/chunks/163.b644919fc68dc468.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/_next/static/chunks/framework-8957c350a55da097.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/_next/static/chunks/main-8b3a18d5f6d56ed4.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/_next/static/chunks/pages/%5Bslug%5D-fc9a7e0a834264a9.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/_next/static/chunks/pages/_app-484063f907a1d0fd.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/_next/static/chunks/pages/_error-8022dacb1937fc7a.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/_next/static/chunks/pages/agent/%5Bslug%5D-adf6ce59d3ea45c4.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/_next/static/chunks/pages/index-a3f20e2459f87bb0.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/_next/static/chunks/webpack-9ee2e6b98cef01ac.js",revision:"AqKEuFPhqPegzTeBXfosO"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"f9bd13d418ce754e06046ce63d470e93"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
