import SwupJsPlugin from '@swup/js-plugin';
import Swup from 'swup';
import { TweenLite, TimelineMax, Linear, Back, Sine } from 'gsap';

export const pageTransition = () =>{

   const options = [
      {
         from: '(.*)', // meaning any
         to: '(.*)', // meaning any
         out: (next) => {
            document.querySelector('#swup').style.opacity = 1;
            TweenLite.to(document.querySelector('#swup'), 1.8, {
               onComplete: next
            });
         },
         in: (next) => {

            window.scroll(0,0);
            document.documentElement.style.overflowY = 'scroll';
            next();
         },
      }
   ];

   const swup = new Swup({
      plugins: [new SwupJsPlugin(options)]
   });

   console.log(swup);
   console.log('swup OKL');
};
