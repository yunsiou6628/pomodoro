if(!self.define){let i,e={};const c=(c,n)=>(c=new URL(c+".js",n).href,e[c]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=c,i.onload=e,document.head.appendChild(i)}else i=c,importScripts(c),e()})).then((()=>{let i=e[c];if(!i)throw new Error(`Module ${c} didn’t register its module`);return i})));self.define=(n,s)=>{const a=i||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let o={};const r=i=>c(i,a),l={module:{uri:a},exports:o,require:r};e[a]=Promise.all(n.map((i=>l[i]||r(i)))).then((i=>(s(...i),o)))}}define(["./workbox-c1760cce"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"assets/alarm.47fbbbce.mp3",revision:null},{url:"assets/index.3f15de97.js",revision:null},{url:"assets/index.f827bbfa.css",revision:null},{url:"assets/ListView.2602931f.css",revision:null},{url:"assets/ListView.da37f1d6.js",revision:null},{url:"assets/materialdesignicons-webfont.8bded8f4.woff",revision:null},{url:"assets/materialdesignicons-webfont.9bdfaf27.eot",revision:null},{url:"assets/materialdesignicons-webfont.c14484cf.ttf",revision:null},{url:"assets/materialdesignicons-webfont.da7fba3c.woff2",revision:null},{url:"assets/SettingsView.a0da204a.css",revision:null},{url:"assets/SettingsView.c9ae58c5.js",revision:null},{url:"assets/VTable.019e83c8.js",revision:null},{url:"assets/VTable.9e76ea37.css",revision:null},{url:"assets/webfontloader.cd097671.js",revision:null},{url:"assets/yay.ca7f6c55.mp3",revision:null},{url:"favicon-16x16.png",revision:"eb05c5608027f0c3ea93b2adb2a9df0f"},{url:"favicon-32x32.png",revision:"7a2995de001dead4ac96c5aa8b766c84"},{url:"favicon.ico",revision:"23a9d795b5377492c953d261e2aef989"},{url:"img/icons/android-chrome-192x192.png",revision:"dcce95d973468f0f24a82274fc55f6af"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"dcce95d973468f0f24a82274fc55f6af"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"900bb72aa7b161c6adec1cec66af65a3"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"2e2d0ac8b511f85dccf6a30a96ff2274"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"c7d72fcd7377c5ff05d27176404f5d07"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"7c299d2200ead78116b1e95dc4238c70"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"3b46d6ccce71a2feb476e940b48f6c67"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"6fdc6034a20b983f4e597b16fba00dec"},{url:"img/icons/apple-touch-icon.png",revision:"7c299d2200ead78116b1e95dc4238c70"},{url:"img/icons/favicon-16x16.png",revision:"eb05c5608027f0c3ea93b2adb2a9df0f"},{url:"img/icons/favicon-32x32.png",revision:"7a2995de001dead4ac96c5aa8b766c84"},{url:"img/icons/favicon.ico",revision:"23a9d795b5377492c953d261e2aef989"},{url:"img/icons/manifest.json",revision:"ca9b72d123a80d2915c1292b975dfec1"},{url:"img/icons/msapplication-icon-144x144.png",revision:"f8af539254010466acf4d39200f9583c"},{url:"img/icons/mstile-150x150.png",revision:"1246c9e98337109219a857ea767b90a6"},{url:"img/icons/safari-pinned-tab.svg",revision:"9fc51e5a32b530c0a3f86bd04de5d796"},{url:"index.html",revision:"a92cc626477f36ac3455dd6715ff65c9"},{url:"./img/icons/android-chrome-192x192.png",revision:"dcce95d973468f0f24a82274fc55f6af"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"dcce95d973468f0f24a82274fc55f6af"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"900bb72aa7b161c6adec1cec66af65a3"},{url:"./img/icons/apple-touch-icon-60x60.png",revision:"3b46d6ccce71a2feb476e940b48f6c67"},{url:"./img/icons/apple-touch-icon-76x76.png",revision:"6fdc6034a20b983f4e597b16fba00dec"},{url:"./img/icons/apple-touch-icon-120x120.png",revision:"2e2d0ac8b511f85dccf6a30a96ff2274"},{url:"./img/icons/apple-touch-icon-152x152.png",revision:"c7d72fcd7377c5ff05d27176404f5d07"},{url:"./img/icons/apple-touch-icon-180x180.png",revision:"7c299d2200ead78116b1e95dc4238c70"},{url:"./img/icons/apple-touch-icon.png",revision:"7c299d2200ead78116b1e95dc4238c70"},{url:"./img/icons/favicon-16x16.png",revision:"eb05c5608027f0c3ea93b2adb2a9df0f"},{url:"./img/icons/favicon-32x32.png",revision:"7a2995de001dead4ac96c5aa8b766c84"},{url:"./img/icons/msapplication-icon-144x144.png",revision:"f8af539254010466acf4d39200f9583c"},{url:"./img/icons/mstile-150x150.png",revision:"1246c9e98337109219a857ea767b90a6"},{url:"manifest.webmanifest",revision:"c04607e05e1738cf8480c4eeb2107999"}],{ignoreURLParametersMatching:[/^[0-9a-zA-Z]*$/]}),i.cleanupOutdatedCaches(),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html")))}));
