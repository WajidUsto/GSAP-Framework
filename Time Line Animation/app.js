let menu = document.querySelector("#head-i")
let close = document.querySelector("#sidebar-i")
let sidebar = document.querySelector("#sidebar")

let tl = gsap.timeline()

// menu.addEventListener("click",function () {
//     gsap.to(sidebar,{
//         right : 0,
//         opacity : 1
//     })
//     tl.to(sidebar,{
//         stagger : 0.3,
//     })

// })



tl.to(sidebar,{
    right : 0,
    duration : 0.6,
    
})

tl.from("#sidebar h3",{
    x:60,
    duration : 0.6,
    stagger : 0.3,
    opacity : 0
})
tl.from(close,{
    opacity : 0,
    duration : 0.8,
})

tl.pause()

menu.addEventListener("click",function () {
        tl.play()
    })
close.addEventListener("click",function () {
        tl.reverse()
    })