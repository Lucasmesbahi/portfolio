(function(){
var d=document,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var b=d.querySelector('.burger'),m=d.getElementById('menu');
if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
d.addEventListener('keydown',function(e){if(e.key==='Escape'){m.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
var so=d.querySelectorAll('.sky.once');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.2});so.forEach(function(s){io.observe(s)})}
else so.forEach(function(s){s.classList.add('on')});
var st=d.querySelector('.stage'),hm=d.querySelector('.home');
if(st&&hm&&!rm&&matchMedia('(pointer:fine)').matches){var t=0,ev;
hm.addEventListener('pointermove',function(e){ev=e;if(t)return;t=requestAnimationFrame(function(){t=0;var r=st.getBoundingClientRect();
var x=(ev.clientX-r.left)/r.width,y=(ev.clientY-r.top)/r.height;
st.style.setProperty('--px',Math.max(-1,Math.min(1,(ev.clientX-innerWidth/2)/(innerWidth/2))).toFixed(3));
st.style.setProperty('--py',Math.max(-1,Math.min(1,(ev.clientY-innerHeight/2)/(innerHeight/2))).toFixed(3));
if(x>0&&x<1&&y>0&&y<1){st.classList.remove('auto');st.style.setProperty('--sx',(x*r.width)+'px');st.style.setProperty('--sy',(y*r.height)+'px')}else st.classList.add('auto')})},{passive:true})}
var tr=d.querySelector('.tr');
if(tr&&!rm){d.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');
if(!a||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.target||a.hasAttribute('download'))return;
var u=new URL(a.href,location.href);
if(u.origin!==location.origin||u.pathname===location.pathname||!/\.html$|\/$/.test(u.pathname))return;
e.preventDefault();tr.classList.add('go');setTimeout(function(){location.href=u.href},400)});
addEventListener('pageshow',function(){tr.classList.remove('go')})}
})();
