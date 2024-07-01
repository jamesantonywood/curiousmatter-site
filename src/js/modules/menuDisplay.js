
import { handleFixedBody } from "./utils"

export default  () => {
    const menuBtns = document.querySelectorAll('.menu-btn')



    menuBtns.forEach(menuBtn => {
        menuBtn.addEventListener('click', () => {
            menuBtns.forEach(mb => {
                const hamburger = mb.querySelector('.hamburger')
                // console.log(hamburger)
                hamburger.classList.toggle('is-active')   
            })
            if (document.body.classList.contains('menu-open')) {
                document.body.classList.remove('menu-open')
                document.body.classList.add('menu-closed')
                
                // hamburger.classList.remove('is-active')
            } else {
                document.body.classList.add('menu-open')
                document.body.classList.remove('menu-closed')
                // hamburger.classList.add('is-active')
            }
            
            if(document.body.classList.contains('menu-shown')) {
                // console.log('i need to be here')
                document.body.classList.add('menu-force-shown')
            } else {
                document.body.classList.remove('menu-force-shown')
            }


            handleFixedBody()
        })

        const mq = window.matchMedia("(min-width: 768px)")
        const handleMenuClasses = () => {
            if (mq.matches) {
                document.body.classList.remove('menu-open', 'menu-closed')
                // hamburger.classList.remove('is-active')
                menuBtns.forEach(mb => {
                    const hamburger = mb.querySelector('.hamburger')
                    // console.log(hamburger)
                    hamburger.classList.remove('is-active')   
                })
            }
        }
        handleMenuClasses()
        mq.addEventListener('change', handleMenuClasses)
    })
}