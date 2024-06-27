import { titleAnimation } from "./modules/titleAnimation"

titleAnimation()



let target = document.querySelector('.white-container')
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0.01) {
            document.body.classList.add('white-bg')
        } else {
            document.body.classList.remove('white-bg')
        }
    })
}, {
    threshold: [0.01, 0.1, 0.5, 1],
})

observer.observe(target)
