let elem = document.querySelector(".elem")
let elemimg = document.querySelector(".elem img")

// let tl = gsap.timeline()

elem.addEventListener("mousemove",function (dets) {
    gsap.to(elemimg,{
    x : dets.x,
    y : dets.y,
    duration : 0.5,
    transform : "translate(-50% , -50%)"
    })
    
})



elem.addEventListener("mouseenter",function () {
    gsap.to(elemimg,{
    opacity : 1,
    duration : 0.5
    })
})
elem.addEventListener("mouseleave",function () {
    gsap.to(elemimg,{
    opacity : 0,
    duration : 0.5,
    scale : 0,
    rotate : "-20"
    })

})














