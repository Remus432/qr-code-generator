import { gsap } from "gsap"

export const pageLoadAnim = () => {
  const tl = gsap.timeline()

  tl.from(".url-form > *", {
    opacity: 0,
    duration: .8,
    y: 60,
    stagger: .4,
    ease: "power2.easeIn"
  })
  .from(".qr-card", {
    opacity: 0,
    duration: .8,
    y: 100,
    ease: "power3.easeInOut"
  })
  .to(".qr-card > .overlay", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    duration: .8,
    ease: "power3.easeInOut"
  })
  .from(".qr-card > *:not(:first-of-type)", {
    opacity: 0,
    duration: 1,
    y: 50,
    z: 50,
    stagger: .5,
    ease: "power3.easeInOut"
  }, "-=.7")
}
