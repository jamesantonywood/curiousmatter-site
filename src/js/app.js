import { titleAnimation } from "./modules/titleAnimation"
import menuDisplay from "./modules/menuDisplay"
import { stickyMenu } from "./modules/stickyMenu"
import { handleFixedBody } from "./modules/utils"

menuDisplay()
stickyMenu()
titleAnimation()



let target = document.querySelector('.white-container')
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0.05) {
            document.body.classList.add('white-bg')
        } else {
            document.body.classList.remove('white-bg')
        }
    })
}, {
    threshold: [0.01, 0.05, 0.1, 0.5, 1],
})

observer.observe(target)

window.addEventListener('scroll', () => { 
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
});


const mobileMenu = document.querySelector('.mobile-menu')
// console.log(mobileMenu)
const mobileLinks = mobileMenu.querySelectorAll('a')

mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const href = link.getAttribute('href')
        document.body.classList.remove('menu-open')
        document.body.classList.remove('menu-force-shown')
        document.querySelectorAll('.hamburger').forEach(hb => hb.classList.remove('is-active'))
        handleFixedBody()
        window.location = href
    })
})