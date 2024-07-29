const tl = gsap.timeline({defaults:{ease:"none"}})
gsap.set("#ufo", {scale:.5, x:-200})
let ufoFlight = gsap.to("#ufo", {y:-20, yoyo:true, repeat:-1, ease:"power4.inOut", duration:1})

tl.fromTo("#ufo", {x:-400, scale:.5, duration:3}, {x:800, duration:3})
    .to("#ufo", {x:-130, duration:2, scale:1})
    .to("#beam", {opacity:1, duration:1})