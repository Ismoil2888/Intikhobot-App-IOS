if(!self.define){let i,e={};const t=(t,a)=>(t=new URL(t+".js",a).href,e[t]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=t,i.onload=e,document.head.appendChild(i)}else i=t,importScripts(t),e()})).then((()=>{let i=e[t];if(!i)throw new Error(`Module ${t} didn’t register its module`);return i})));self.define=(a,o)=>{const n=i||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let c={};const p=i=>t(i,n),l={module:{uri:n},exports:c,require:p};e[n]=Promise.all(a.map((i=>l[i]||p(i)))).then((i=>(o(...i),c)))}}define(["./workbox-3175ccc6"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/Intikhobot-App-IOS/favicon-16.png",revision:"d324ddc823eca6c86688f62576c81e76"},{url:"/Intikhobot-App-IOS/favicon-32.png",revision:"e72daee58e37c99d3553059eda418aa8"},{url:"/Intikhobot-App-IOS/favicon.ico",revision:"50b1bd72d8b0c569ffcad83d622ec176"},{url:"/Intikhobot-App-IOS/index.html",revision:"6b9979c6ceb996b81b53094b56a7ff3f"},{url:"/Intikhobot-App-IOS/manifest.json",revision:"a9cfd3cce28294bcd29d4c9d0b39acf7"},{url:"/Intikhobot-App-IOS/pwa/apple-touch-icon/apple-touch-icon-180.png",revision:"35bdc94464667135ea3f7c96c6bbd0a2"},{url:"/Intikhobot-App-IOS/pwa/apple-touch-startup-image/apple-touch-startup-image-640x1136.png",revision:"0acf5afeaccaf725435215784f1e4e40"},{url:"/Intikhobot-App-IOS/pwa/apple-touch-startup-image/apple-touch-startup-image-750x1334.png",revision:"f413842f4b8c7ee377ba2b7f050a1a06"},{url:"/Intikhobot-App-IOS/pwa/apple-touch-startup-image/apple-touch-startup-image-828x1792.png",revision:"da64d57b8922c0459558c7f2a09791aa"},{url:"/Intikhobot-App-IOS/serve.json",revision:"ec543248d7b23864564429fc03837190"},{url:"/Intikhobot-App-IOS/static/css/main.87cf1fc1.css",revision:null},{url:"/Intikhobot-App-IOS/static/js/360.cdab8b79.js",revision:null},{url:"/Intikhobot-App-IOS/static/js/360.cdab8b79.js.LICENSE.txt",revision:"b8e7f7d77a913f8cb964a9b9fd3e882c"},{url:"/Intikhobot-App-IOS/static/media/ajax-loader.fb6f3c230cb846e25247.gif",revision:null},{url:"/Intikhobot-App-IOS/static/media/appbasiclogo.fd67b1ec18b2e269f1d4.png",revision:null},{url:"/Intikhobot-App-IOS/static/media/basiclogomainpage.fd67b1ec18b2e269f1d4.png",revision:null},{url:"/Intikhobot-App-IOS/static/media/emblema.e24f6dc3312737232d86.png",revision:null},{url:"/Intikhobot-App-IOS/static/media/goldenornament.8a272e4ea6a0965dfe13.png",revision:null},{url:"/Intikhobot-App-IOS/static/media/image1.1ed0d3ffd55993288c2b.jpg",revision:null},{url:"/Intikhobot-App-IOS/static/media/image2.c3fcafa26aa1f03f7e7e.jpg",revision:null},{url:"/Intikhobot-App-IOS/static/media/image3.5cc6eaacb8930aeef111.jpg",revision:null},{url:"/Intikhobot-App-IOS/static/media/image4.89d7b7b615c1840957ac.jpg",revision:null},{url:"/Intikhobot-App-IOS/static/media/image5.934bbab07f9a310422cb.jpg",revision:null},{url:"/Intikhobot-App-IOS/static/media/image6.17d2293a02645186179a.jpg",revision:null},{url:"/Intikhobot-App-IOS/static/media/image7.901faeecce8eeb541d22.jpg",revision:null},{url:"/Intikhobot-App-IOS/static/media/image8.69d902a472158bef94e6.jpg",revision:null},{url:"/Intikhobot-App-IOS/static/media/lineornament2.70ffd8f382ee768351c8.png",revision:null},{url:"/Intikhobot-App-IOS/static/media/parcham.73719269cd4f4198c950.png",revision:null},{url:"/Intikhobot-App-IOS/static/media/parlament.3e99919c3b7010693f4e.png",revision:null},{url:"/Intikhobot-App-IOS/static/media/slick.2630a3e3eab21c607e21.svg",revision:null},{url:"/Intikhobot-App-IOS/static/media/slick.295183786cd8a1389865.woff",revision:null},{url:"/Intikhobot-App-IOS/static/media/slick.a4e97f5a2a64f0ab1323.eot",revision:null},{url:"/Intikhobot-App-IOS/static/media/slick.c94f7671dcc99dce43e2.ttf",revision:null}],{}),i.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|webp)$/,new i.CacheFirst({cacheName:"images-cache",plugins:[new i.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),i.registerRoute(/\.(?:html|js|css)$/,new i.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
