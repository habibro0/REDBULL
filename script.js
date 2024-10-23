var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 98%",
    end: "60% 60%",
    scrub: true,
    // markers:true,

}})


// tl.to(".one  #we",{
//     top:"120%",
//     left:"2%"
// })
tl.to(".one  #red",{
    top:"120%",
    left:"2%",
    // delay: 0.5
})
tl.to(".one  #logo",{
    top:"110%",
    left:"8%",
    // delay: 0.5
})

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 85%",
    end: "60% 60%",
    scrub: true,
    // markers:true,

}})


tl2.from("#pak",{
    rotate:"160deg",
    left:"-20%",
    top:"99%",
    delay:2
    
   
    
})
tl2.from("#up",{
    rotate:"160deg",
    left:"90%",
    top:"99%",
   
    

 })
tl2.to(".one  #red",{
    rotate:"360deg",
    left:"31%",
    top:"210%",
    width:"500px",
    height:"65vh"
   
    

 })

//  tl2.to("#lemo",{
//     rotate:"360deg",
//     left:"31%",
//     top:"210%",
//     width:"500px",
//     height:"65vh"
//  })

 