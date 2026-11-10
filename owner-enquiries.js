/* Enquiries tab for the Owner app. Reads the "enquiries" collection written by download.html. */
(function(){
"use strict";
var NAV=document.querySelector('.oa-tab'),HOST=document.getElementById('oa-v-set');
if(!NAV||!HOST)return;
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
var btn=document.createElement('button');btn.type='button';btn.setAttribute('data-t','enq');
btn.innerHTML='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5h13L22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6z"/></svg>Enquiries';
NAV.insertBefore(btn,NAV.lastElementChild);
var sec=el('section','oa-view hidden');sec.id='oa-v-enq';
sec.innerHTML='<div class="oa-h2">Institute Enquiries <small>from the website</small></div><div class="oa-card"><div class="oa-row2"><button type="button" class="oa-pill" id="enq-refresh">Refresh</button></div><div id="enq-list" style="margin-top:10px;display:grid;gap:10px">Tap Refresh.</div></div>';
HOST.parentNode.insertBefore(sec,HOST.nextSibling);
function show(){
 [].forEach.call(document.querySelectorAll('.oa-view'),function(v){v.classList.add('hidden')});
 [].forEach.call(NAV.querySelectorAll('button'),function(b){b.classList.remove('on')});
 sec.classList.remove('hidden');btn.classList.add('on');load()}
btn.addEventListener('click',show);
var orig=window.ouiTab;
window.ouiTab=function(){sec.classList.add('hidden');btn.classList.remove('on');return orig&&orig.apply(this,arguments)};
document.getElementById('enq-refresh').addEventListener('click',load);
function db(){return ownerGetDb()}
function line(k,v){if(!v)return null;var d=el('div');d.style.cssText='font-size:.8rem;color:#334155';var b=el('b','',k+': ');d.appendChild(b);d.appendChild(document.createTextNode(v));return d}
function when(ts){try{var d=ts&&ts.toDate?ts.toDate():new Date(ts);return d.toLocaleString()}catch(e){return ''}}
function card(doc){
 var r=doc.data(),c=el('div');c.style.cssText='border:1px solid '+(r.status==='new'?'#4f46e5':'#e5e7eb')+';border-radius:14px;padding:12px;background:#fff';
 var h=el('div');h.style.cssText='display:flex;justify-content:space-between;gap:8px;align-items:center';
 var t=el('b','',r.institute||'(no name)');t.style.fontSize='.95rem';h.appendChild(t);
 var st=el('span','',r.status==='new'?'NEW':'Contacted');st.style.cssText='font-size:.62rem;font-weight:800;padding:2px 8px;border-radius:99px;background:'+(r.status==='new'?'#4f46e5':'#e2e8f0')+';color:'+(r.status==='new'?'#fff':'#475569');h.appendChild(st);c.appendChild(h);
 var rows=[['Owner',r.ownerName],['Mobile',r.mobile],['WhatsApp',r.whatsapp],['Email',r.email],['City',[r.city,r.district,r.state,r.pin].filter(Boolean).join(', ')],['Teaches',r.classes],['Medium',r.medium],['Students',r.students],['Teachers',r.teachers],['Tagline',r.tagline],['Brand color',r.color],['Link',r.link],['Contact time',r.contactTime],['Message',r.message],['Received',when(r.createdAt)]];
 var g=el('div');g.style.cssText='display:grid;gap:3px;margin-top:8px';rows.forEach(function(x){var l=line(x[0],x[1]);if(l)g.appendChild(l)});c.appendChild(g);
 var a=el('div');a.style.cssText='display:flex;gap:8px;flex-wrap:wrap;margin-top:10px';
 function pill(txt,fn,href){var p=el(href?'a':'button','oa-pill',txt);if(href){p.href=href;p.target='_blank';p.rel='noopener'}else{p.type='button';p.onclick=fn}p.style.textDecoration='none';a.appendChild(p)}
 var m=String(r.mobile||'').replace(/\D/g,''),w=String(r.whatsapp||r.mobile||'').replace(/\D/g,'');
 if(m)pill('Call','',  'tel:+91'+m);
 if(w)pill('WhatsApp','', 'https://wa.me/91'+w);
 if(r.status==='new')pill('Mark contacted',function(){db().collection('enquiries').doc(doc.id).update({status:'contacted'}).then(load).catch(function(e){alert('Could not update: '+(e.message||e))})});
 pill('Delete',function(){if(confirm('Delete this enquiry?'))db().collection('enquiries').doc(doc.id).delete().then(load).catch(function(e){alert('Could not delete: '+(e.message||e))})});
 c.appendChild(a);return c}
function load(){
 var L=document.getElementById('enq-list');L.textContent='Loading...';
 db().collection('enquiries').orderBy('createdAt','desc').limit(50).get().then(function(s){
  L.textContent='';if(s.empty){L.textContent='No enquiries yet.';return}
  s.forEach(function(d){L.appendChild(card(d))})
 }).catch(function(e){L.textContent='Could not load enquiries: '+(e.message||e)+' (check the Firestore rules in FIRESTORE_RULES_enquiries.txt)'})}
})();
