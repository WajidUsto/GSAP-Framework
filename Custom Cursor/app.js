let cursor = document.querySelector("#cursor")
let main = document.querySelector("#main")


main.addEventListener("mousemove",function (dets) {
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        ease:"back.out",
        duration:0.8,
    })
})





