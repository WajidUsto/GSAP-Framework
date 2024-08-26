// gsap.to("#box1",{
//     x:1000,
//     duration:5,
//     delay:2,
//     // rotate:90,
//     backgroundColor :"white",
//     borderRadius:"35%",
// })
// gsap.to("#box2",{
//     x:1000,
//     duration:1,
//     delay:1,
//     rotate:360,
//     yoyo: true,
//     repeat:-1,
//     backgroundColor:"black",
// })


// gsap.from("h1",{
//     opacity:0,
//     duration:1,
//     delay:0,
//     y:30,
//     stagger:0.3,
// })
var tl = gsap.timeline()
tl.from("h3",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.7,
})

tl.from("#h4 h4",{
    y:-20,
    duration:1,
    opacity:0,
    stagger:0.3,
})
tl.from("h1",{
    y:-20,
    duration:0.5,
    opacity:0,
})
tl.from("h2",{
    y:-20,
    duration:0.5,
    opacity:0,
})


