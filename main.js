gsap.registerPlugin(GSDevTools) 

const tl = gsap.timeline({defaults:{ease:"none"}})
gsap.set("#ufo", {scale:.5, x:-200})
let letters = gsap.utils.toArray(".letter")



let ufoFlight = gsap.to("#ufo", {y:-20, yoyo:true, repeat:-1, ease:"power4.inOut", duration:1})

tl.fromTo("#ufo", {x:-400, scale:.5, duration:3}, {x:800, duration:3})
    .to("#ufo", {x:-130, duration:2, scale:1})
    .to("#beam", {opacity:1, duration:1})
    .to(letters[0], {x:150, y:-150, scale:0, rotate: -56})
    .to(letters[6], {x:170, y:-350, scale:0, rotate: -56},"<25%")
    .to(letters[1], {x:200, y:-150, scale:0, rotate: -76},"<25%")
    .to(letters[7], {x:200, y:-350, scale:0, rotate: -76},"<25%")
    .to(letters[2], {x:150, y:-150, scale:0, rotate: -60},"<25%")
    .to(letters[8], {x:150, y:-350, scale:0, rotate: -60},"<25%")
    .to(letters[3], {x:100, y:-150, scale:0, rotate: -30},"<25%")
    .to(letters[9], {x:50, y:-350, scale:0, rotate: -30},"<25%")
    .to(letters[4], {x:100, y:-150, scale:0, rotate: -90},"<25%")
    .to(letters[10], {x:50, y:-350, scale:0, rotate: -90},"<25%")
    .to(letters[5], {x:10, y:-150, scale:0, rotate: -110},"<25%")
    .to(letters[11], {x:10, y:-350, scale:0, rotate: -110},"<25%")
    .to("#ufo", {x: 400, duration:2}, 6)
    .to("#beam", {opacity:0})
    .to("#ufo", {x: 150, yPercent:30})


GSDevTools.create({animation:tl})