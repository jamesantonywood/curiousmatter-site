

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { HighlightEffect } from './HighlightEffect';




export const titleAnimation = () => {

    const highlightedElements = document.querySelectorAll('.hx');
    highlightedElements.forEach(el => {
        // Exclude the 11th example (Flip example) by checking if the element has the class 'hx-11'
        if ( !el.classList.contains('hx-11') ) {
            el.dataset.splitting = '';
        }
    });
    Splitting()
    
    const effects = [
        { selector: '.hx', effect: HighlightEffect },
    ];

    effects.forEach(({ selector, effect }) => {
        document.querySelectorAll(selector).forEach(el => {
            new effect(el);
        });
    });

    const fx16Titles = [...document.querySelectorAll('[data-splitting][data-effect16]')];
    fx16Titles.forEach(title => {
        
        gsap.fromTo(title, {
            transformOrigin: '0% 50%',
            rotate: 10
        }, {
            ease: 'none',
            rotate: 0,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'top 50%',
                scrub: true,
            }
        });

        gsap.fromTo(title.querySelectorAll('.word'), {
            'will-change': 'opacity',
            opacity: 0
        }, 
        {
            ease: 'none',
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom-=20%',
                end: 'center top+=60%',
                scrub: true,
            }
        });

    });
}
