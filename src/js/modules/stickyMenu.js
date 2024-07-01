
export const stickyMenu = () => {

    // keep track of previous scroll position
    let prevScrollPos = window.scrollY;

    window.addEventListener('scroll', function() {
    // current scroll position
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        // user has scrolled up
        // console.log('user has scrolled up')
        if (currentScrollPos > 80) {
            document.body.classList.add('menu-shown');
        } else {
            document.body.classList.remove('menu-shown')
        }
    } else {
        // user has scrolled down
        document.body.classList.remove('menu-shown');
        // console.log('user has scrolled down')
    }

    // update previous scroll position
    prevScrollPos = currentScrollPos;
    });

}

