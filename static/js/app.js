gsap.registerPlugin(ScrollTrigger);
var vpWidth, vpHeight, initWidth, interheight, mathHeight;
gsap.config({ nullTargetWarn: false });

const smoothscroll = ".smooth-scroll";
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(smoothscroll),
  smooth: true,
  getDirection: true,
  smartphone: { smooth: true }
});
locoScroll.on('scroll', (instance) => {
    document.documentElement.setAttribute('data-direction', instance.direction)
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(smoothscroll, {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(smoothscroll).style.transform ? "transform" : "fixed"
});

function appInit() {
  gsap.to($('.slideup-h'),1,{y:0, opacity:1, stagger: 0.6, ease: Power3.inOut, duration:1}); 
  gsap.to($('.slideup-h'),1,{opacity:0, y:40, stagger: 0.6, ease: Expo.easeInOut, delay:4});
  gsap.to($('.preloader'),1,{scaleY:0, delay:6, ease:Expo.easeInOut, onComplete:function(){
    $('.slideup-h').hide();
    $('.preloader').hide();
  }});
  gsap.fromTo(".full-bg", {opacity: 0, scaleX:1.4, scaleY:1.4, transformOrigin:"center", ease: Power3.inOut,}, {opacity:1, duration: 1, scaleX:1, scaleY:1, ease: Power3.inOut, delay:6.2});
  gsap.fromTo(".hero-logo", {opacity: 0, y:-30}, {opacity:1, duration: 2, y:0, ease: Power3.inOut, delay:6.8});
  gsap.fromTo(".slideup-h-text", {opacity: 0, y:30}, {opacity:1, duration: 1, y:0, stagger: 0.6, ease: Power3.inOut, delay:7.0});
}

selectAll = e => document.querySelectorAll(e);
const inamination = selectAll("#about");
function imgins() {
    inamination.forEach((inamination, i) => { 
            let tl = gsap.timeline({
            scrollTrigger: {
                trigger: inamination,
                scroller: smoothscroll,
                start: "top top",
                end: "+=200",
              }
        });
        tl.from(inamination.querySelectorAll('.slideup-a'), {
          opacity:0, duration: 1, y:30, stagger: 0.6,
        }) 
        .to(inamination.querySelectorAll('.slideup-a'), {
          opacity:1, duration: 1, y:1, stagger: 0.6, ease: "Power2.easeInOut",
        }) 
  });
}

selectAll = e => document.querySelectorAll(e);
const allin = selectAll("section");
function allani() {
    allin.forEach((allin, i) => { 
            let tl = gsap.timeline({
            scrollTrigger: {
                trigger: allin,
                scroller: smoothscroll,
                start: "center bottom",
              }
        });
        tl.from(allin.querySelectorAll('.slideup'), {
          opacity:0, duration: 1, y:30, stagger: 0.6,
        }) 
        .to(allin.querySelectorAll('.slideup'), {
          opacity:1, duration: 1, y:1, stagger: 0.6, ease: "Power2.easeInOut"
        }) 
  });
}

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

$(document).ready(function(){
  $( window ).load(function() {  
      appInit(); 
      imgins(); 
      allani();
  });
  //alert('jquery');
}); 