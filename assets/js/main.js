(function(){"use strict";const select=(el,all=!1)=>{el=el.trim()
if(all){return[...document.querySelectorAll(el)]}else{return document.querySelector(el)}}
const on=(type,el,listener,all=!1)=>{let selectEl=select(el,all)
if(selectEl){if(all){selectEl.forEach(e=>e.addEventListener(type,listener))}else{selectEl.addEventListener(type,listener)}}}
const onscroll=(el,listener)=>{el.addEventListener('scroll',listener)}
let navbarlinks=select('#navbar .scrollto',!0)
const navbarlinksActive=()=>{let position=window.scrollY+200
navbarlinks.forEach(navbarlink=>{if(!navbarlink.hash)return
let section=select(navbarlink.hash)
if(!section)return
if(position>=section.offsetTop&&position<=(section.offsetTop+section.offsetHeight)){navbarlink.classList.add('active')}else{navbarlink.classList.remove('active')}})}
window.addEventListener('load',navbarlinksActive)
onscroll(document,navbarlinksActive)
const scrollto=(el)=>{let elementPos=select(el).offsetTop
window.scrollTo({top:elementPos,behavior:'smooth'})}
let backtotop=select('.back-to-top')
if(backtotop){const toggleBacktotop=()=>{if(window.scrollY>100){backtotop.classList.add('active')}else{backtotop.classList.remove('active')}}
window.addEventListener('load',toggleBacktotop)
onscroll(document,toggleBacktotop)}
on('click','.mobile-nav-toggle',function(e){select('body').classList.toggle('mobile-nav-active')
this.classList.toggle('bi-list')
this.classList.toggle('bi-x')})
on('click','.scrollto',function(e){if(select(this.hash)){e.preventDefault()
let body=select('body')
if(body.classList.contains('mobile-nav-active')){body.classList.remove('mobile-nav-active')
let navbarToggle=select('.mobile-nav-toggle')
navbarToggle.classList.toggle('bi-list')
navbarToggle.classList.toggle('bi-x')}
scrollto(this.hash)}},!0)
window.addEventListener('load',()=>{if(window.location.hash){if(select(window.location.hash)){scrollto(window.location.hash)}}});const typed=select('.typed')
if(typed){let typed_strings=typed.getAttribute('data-typed-items')
typed_strings=typed_strings.split(',')
new Typed('.typed',{strings:typed_strings,loop:!0,typeSpeed:90,backSpeed:60,backDelay:100})}
let skilsContent=select('.skills-content');if(skilsContent){new Waypoint({element:skilsContent,offset:'82%',handler:function(direction){let progress=select('.progress .progress-bar',!0);progress.forEach((el)=>{el.style.width=el.getAttribute('aria-valuenow')+'%'})}})}
window.addEventListener('load',()=>{let portfolioContainer=select('.portfolio-container');if(portfolioContainer){let portfolioIsotope=new Isotope(portfolioContainer,{itemSelector:'.portfolio-item'});let portfolioFilters=select('#portfolio-flters li',!0);on('click','#portfolio-flters li',function(e){e.preventDefault();portfolioFilters.forEach(function(el){el.classList.remove('filter-active')});this.classList.add('filter-active');portfolioIsotope.arrange({filter:this.getAttribute('data-filter')});portfolioIsotope.on('arrangeComplete',function(){AOS.refresh()})},!0)}});const portfolioLightbox=GLightbox({selector:'.portfolio-lightbox'});new Swiper('.portfolio-details-slider',{speed:600,loop:!0,autoplay:{delay:5000,disableOnInteraction:!1},pagination:{el:'.swiper-pagination',type:'bullets',clickable:!0}});new Swiper('.testimonials-slider',{speed:600,loop:!0,autoplay:{delay:5000,disableOnInteraction:!1},slidesPerView:'auto',pagination:{el:'.swiper-pagination',type:'bullets',clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:20},1200:{slidesPerView:3,spaceBetween:20}}});window.addEventListener('load',()=>{AOS.init({duration:1500,easing:'easy-in',once:!0,mirror:!1})})})()
