$(".owl-carousel").owlCarousel({
  items: true,
  loop: true,
  nav: false,
  autoHeight: true,
  autoplay: true,
  autoplayTimeout: 3000,
});

// PAGE 1
const scrollTriggerConfig1 = {
  trigger: "#page1 .textCont ",
  scroller: "body",
  // markers: true,
  start: "center center",
  end: "center center",
  scrub: 2,
  // toggleActions: "none none restart none",
};
gsap.to(".img1Pg1R", {
  y: 200,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig1,
});
gsap.to(".img2Pg1R", {
  y: 300,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig1,
});

gsap.to("#page1 .textContMain", {
  y: -70,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig1,
});
gsap.to("#page1 .textCont", {
  y: 200,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig1,
});

// PAGE 2
const scrollTriggerConfig2 = {
  trigger: "#page2 .textContMain ",
  scroller: "body",
  // markers: true,
  start: "center center",
  end: "center center",
  scrub: 2,
};
gsap.from(".img1Pg2R", {
  y: 300,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig2,
});
gsap.from(".img2Pg2R", {
  y: -300,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig2,
});

gsap.from("#page2 .textContMain", {
  y: -70,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig2,
});
gsap.from("#page2 .textCont", {
  y: 200,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig2,
});

// PAGE 3
const scrollTriggerConfig3 = {
  trigger: "#page3 .textContMain ",
  scroller: "body",
  // markers: true,
  start: "center center",
  end: "center center",
  scrub: 2,
};
gsap.from(".img1Pg3R", {
  y: 300,
  opacity: 0,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig3,
});
gsap.from(".img2Pg3R", {
  y: -300,
  opacity: 0,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig3,
});
gsap.from("#page3 .textContMain", {
  y: -70,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig3,
});
gsap.from("#page3 .textCont", {
  y: 200,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig3,
});
// PAGE 4
const scrollTriggerConfig4 = {
  trigger: "#page4 .textContMain ",
  scroller: "body",
  // markers: true,
  start: "center center",
  end: "center center",
  scrub: 2,
};
gsap.from(".img1Pg4R", {
  y: -200,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig4,
});
gsap.from(".img2Pg4R", {
  y: 300,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig4,
});
gsap.from(".img3Pg4R", {
  y: -300,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig4,
});
gsap.from(".img4Pg4R, .img5Pg4R", {
  x: 300,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig4,
});
gsap.from("#page4 .textContMain", {
  y: -70,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig4,
});
gsap.from("#page4 .textCont", {
  y: 200,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig4,
});

// PAGE 5
const scrollTriggerConfig5 = {
  trigger: "#page5 .textContMain ",
  scroller: "body",
  // markers: true,
  start: "center center",
  end: "center center",
  scrub: 2,
};

gsap.from(".img1Pg5R,.img3Pg5R ", {
  y: -300,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig5,
});
gsap.from(".img2Pg5R,.img4Pg5R", {
  y: 300,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig5,
});
gsap.from(".img5Pg5R", {
  x: 300,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig5,
});

gsap.from("#page5 .textContMain", {
  y: -70,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig5,
});
gsap.from("#page5 .textCont", {
  y: 200,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig5,
});

// PAGE 6
const scrollTriggerConfig6 = {
  trigger: "#page6 .textContMain ",
  scroller: "body",
  // markers: true,
  start: "center center",
  end: "center center",
  scrub: 2,
};
gsap.from(".img1Pg6R", {
  y: 300,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig6,
});
gsap.from(".img2Pg6R", {
  y: -300,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig6,
});

gsap.from("#page6 .textContMain", {
  y: -70,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig6,
});
gsap.from("#page6 .textCont", {
  y: 200,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig6,
});

// PAGE 7
const scrollTriggerConfig7 = {
  trigger: "#page7 .textContMain ",
  scroller: "body",
  // markers: true,
  start: "center center",
  end: "center center",
  scrub: 2,
};
gsap.from(".img1Pg7R", {
  y: 300,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig7,
});
gsap.from(".img2Pg7R", {
  y: 300,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig7,
});
gsap.from("#page7 .textContMain", {
  y: -70,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig7,
});
gsap.from("#page7 .textCont", {
  y: 200,
  opacity: 0,
  scrollTrigger: scrollTriggerConfig7,
});
