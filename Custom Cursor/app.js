let cursor = document.querySelector("#cursor")
let main = document.querySelector("#main")
let img = document.querySelector("#image")


main.addEventListener("mousemove",function (dets) {
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        ease:"back.out",
        duration:0.8,
    })
})








