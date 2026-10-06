(function(){
  var root=document.documentElement;
  function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
  function set(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  var lang=get('lang')||((navigator.language||'es').slice(0,2)==='en'?'en':'es');
  function setLang(l){lang=l;root.setAttribute('data-lang',l);root.lang=l;set('lang',l);
    var b=document.getElementById('langbtn');if(b)b.textContent=l==='es'?'EN':'ES';
    var t=document.documentElement.getAttribute('data-t-'+l);if(t)document.title=t;}
  setLang(lang);
  var lb=document.getElementById('langbtn');if(lb)lb.onclick=function(){setLang(lang==='es'?'en':'es')};

  var th=get('theme');if(th)root.setAttribute('data-theme',th);
  var tb=document.getElementById('themebtn');
  if(tb)tb.onclick=function(){
    var dark=root.getAttribute('data-theme')==='dark'||(!root.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme:dark)').matches);
    var n=dark?'light':'dark';root.setAttribute('data-theme',n);set('theme',n);};

  var bg=document.getElementById('burger'),nav=document.getElementById('nav');
  if(bg)bg.onclick=function(){var o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)};

  var cp=document.getElementById('copymail');
  if(cp)cp.onclick=function(){
    var m=cp.getAttribute('data-mail');
    var ok=function(){var s=cp.querySelector('.es'),e=cp.querySelector('.en');
      var a=[s.textContent,e.textContent];s.textContent='¡Copiado!';e.textContent='Copied!';
      setTimeout(function(){s.textContent=a[0];e.textContent=a[1]},1600)};
    if(navigator.clipboard)navigator.clipboard.writeText(m).then(ok,ok);else ok();};

  // hero: viento del Istmo
  var c=document.getElementById('wind');if(!c)return;
  var x=c.getContext('2d'),W,H,L=[],reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  function size(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;L=[];
    var n=Math.max(18,Math.floor(H/16));
    for(var i=0;i<n;i++)L.push({y:Math.random()*H,x:Math.random()*W,l:60+Math.random()*180,s:.5+Math.random()*1.6,a:.08+Math.random()*.25,p:Math.random()*6})}
  function draw(t){x.clearRect(0,0,W,H);
    L.forEach(function(o){
      if(!reduce){o.x+=o.s;if(o.x-o.l>W){o.x=-20;o.y=Math.random()*H}}
      x.beginPath();x.strokeStyle='rgba(255,107,157,'+o.a+')';x.lineWidth=1.2;
      x.moveTo(o.x-o.l,o.y);
      x.bezierCurveTo(o.x-o.l*.6,o.y+Math.sin(o.p+t/1500)*10,o.x-o.l*.3,o.y-Math.sin(o.p+t/1500)*10,o.x,o.y);x.stroke();});
    if(!reduce)requestAnimationFrame(draw)}
  size();addEventListener('resize',size);requestAnimationFrame(draw);
  if(reduce)draw(0);
})();
