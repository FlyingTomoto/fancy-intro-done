"use strict";

var tl = gsap.timeline({
  defaults: {
    ease: "power1.out"
  }
}); // creating a time line in JS using gsap

tl.to(".text", {
  y: "0%",
  duration: 1,
  stagger: 0.1
}); // translation - move text to 0% on the y axis from where it is, take 1 second, stagger lines by .1s
// also, by using tl. opposed to gsap. means that the script will run one after another, like a time line = tl.

tl.to(".text", {
  y: "-150%",
  duration: 1,
  stagger: .01,
  delay: 1.5
});
tl.to(".slider", {
  y: "-100%",
  duration: 1.5,
  delay: 0.5
});
tl.to(".intro", {
  y: "-100%",
  duration: 1
}, "-=1.1"); // -=1.1 means to start 1 second earlier

tl.fromTo("nav", {
  opacity: 0
}, {
  opacity: 1,
  duration: 1.5
});
tl.fromTo(".big-text", {
  opacity: 0
}, {
  opacity: 1,
  duration: 1.5
}, "-=1.5");