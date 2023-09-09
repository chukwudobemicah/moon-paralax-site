gsap.registerPlugin(ScrollTrigger);

const mountainFrontG = document.querySelector('.mountain-front');
const mountainBackG = document.querySelector('.mountain-back');
const moonG = document.querySelector('.moon');

// let splitH2 = new SplitType('h2');

let allHr = gsap.utils.toArray('hr');

let paragraphs = gsap.utils.toArray('.paragraph-container p');


allHr.forEach((hr) => {
    ScrollTrigger.create({
        trigger: hr,
        onEnter: ()=> hr.classList.add('hr-active'),
        duration: 1,
        start:'top 70%',
    })})

    let h2Arr = gsap.utils.toArray('h2');
    h2Arr.forEach((h2, i) => {
        ScrollTrigger.create({
            toggleAction: 'repeat none none repeat',
            trigger: h2,
            stagger: 0.025,
            onEnter: ()=> h2.classList.add('h2-active'),
            duration: 1,
            start: '-60 bottom',
        })})

   
    paragraphs.forEach((p, i) => {
        ScrollTrigger.create({
            trigger: p,
            onEnter: ()=> p.classList.add('p-active'),
            duration: 1,
            start: '-60 bottom',
        })})

const tl = gsap.timeline({
    // duration: 5,
})

tl.from(moonG,{
    yPercent: 100,
}).from(mountainFrontG,{
    yPercent: 100,
}).from(mountainBackG,{
    yPercent: 100,
})