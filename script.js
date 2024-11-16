const lenis = new Lenis();

function raf(time){
    lenis.raf(time);
requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

document.querySelectorAll(".elem").forEach(elem=>{

    let image= elem.querySelector("img");
    let tl = gsap.timeline();
    let xTransform = gsap.utils.random(-100, 100)

    tl.set(image,{
        transformOrigin:`${xTransform <0?0:'100%'} `,
    },"start")
    tl.to(image,{
        scale:0,
        duration:0.5,
        ease:"none",
        scrollTrigger:{
            trigger:elem,
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    },"start")

    tl.to(elem,{
        xPercent:xTransform,
        ease:"Power4.easeInOut",
        scrollTrigger:{
            trigger:image,
            start: "top bottom",
            end: "bottom top",
            scrub:true,
        }

    },"start")

})