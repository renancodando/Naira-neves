const telefone='5521980597869';
const mensagem=encodeURIComponent('Olá! Encontrei a Estética Náira Alves pelo site e gostaria de saber mais sobre os atendimentos e agendamento.');
document.querySelectorAll('[data-whats]').forEach(link=>{link.href=`https://wa.me/${telefone}?text=${mensagem}`;link.target='_blank';link.rel='noopener'});
const reduz=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduz){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.animate([{opacity:0,transform:'translateY(28px)'},{opacity:1,transform:'translateY(0)'}],{duration:850,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'});observer.unobserve(entry.target)}}),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
 const hero=document.querySelector('.hero-photo');
 window.addEventListener('scroll',()=>{if(window.innerWidth>900&&window.scrollY<window.innerHeight*1.2)hero.style.transform=`scale(1.04) translateY(${window.scrollY*.055}px)`},{passive:true});
}else document.querySelectorAll('.reveal').forEach(el=>{el.style.opacity=1;el.style.transform='none'});
const menu=document.querySelector('.menu');
const nav=document.querySelector('.topbar nav');
menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const topbar=document.querySelector('.topbar');
let last=0;
window.addEventListener('scroll',()=>{const y=window.scrollY;if(y>100){topbar.style.position='fixed';topbar.style.background='rgba(25,25,20,.88)';topbar.style.backdropFilter='blur(14px)';topbar.style.transition='transform .35s,background .35s';topbar.style.transform=y>last&&y>500?'translateY(-100%)':'translateY(0)'}else{topbar.style.position='absolute';topbar.style.background='transparent';topbar.style.backdropFilter='none'}last=y},{passive:true});