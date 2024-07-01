export const handleFixedBody = () => {
	let scrollY = document.documentElement.style.getPropertyValue('--scroll-y')
    console.log(scrollY)
	const bodyTag = document.querySelector('body')
	if (bodyTag.classList.contains('menu-open')) {
        console.log('fixing')
		bodyTag.style.position = 'fixed'
		bodyTag.style.top = `-${scrollY}`
	} else {
        console.log('unfixing')
		scrollY = bodyTag.style.top
		bodyTag.style.position = 'relative'
		bodyTag.style.top = 0
		window.scrollTo(0, parseInt(scrollY || '0') * -1)
	}
}