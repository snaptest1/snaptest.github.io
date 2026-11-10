/* v285: naya visitor browser me root kholta hai -> download.html (landing). App/APK/purane user/?inst= wale seedha app par. */
(function(){try{
var L=location,S=L.search||"",P=L.pathname;
if(/[?&](app=1|inst=)/.test(S)){try{localStorage.setItem("stp_web","1")}catch(e){}
 if(/[?&]app=1(&|$)/.test(S)&&history.replaceState){try{history.replaceState(null,"",P+S.replace(/([?&])app=1&?/,"$1").replace(/[?&]$/,"")+L.hash)}catch(e){}}return}
if(S||L.hash||(P!=="/"&&P!=="/index.html")||!/^https?:$/.test(L.protocol)||L.hostname==="localhost"||L.hostname==="127.0.0.1")return;
if(window.Capacitor||/; wv\)|\bwv\b/.test(navigator.userAgent))return;
if(navigator.standalone||(window.matchMedia&&(matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||matchMedia("(display-mode: minimal-ui)").matches)))return;
if(document.referrer&&document.referrer.indexOf(L.origin)===0)return;
if(localStorage.getItem("stp_web"))return;
for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i)||"";if(/^(savya|snap|stp)/i.test(k))return}
L.replace("/download.html")}catch(e){}})();
if(/[?&]owner=1(&|$)/.test(location.search))location.replace("owner-app.html");