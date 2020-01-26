import SwupJsPlugin from '@swup/js-plugin';
import Swup from 'swup';
import { TweenLite, TimelineMax, Linear, Back, Sine } from 'gsap';
import { chooseProject } from "./chooseProject";

export const pageTransition = () =>{

   const options = [
      {
         from: '(.*)', // meaning any
         to: '(.*)', // meaning any
         out: (next) => {

            TweenLite.to(document.querySelector('#swup'), 2, {
               onComplete: next
            });
         },
         in: (next) => next()
      }
   ];

   const swup = new Swup({
      plugins: [new SwupJsPlugin(options)]
   });

   console.log(swup);
   console.log('swup OKL');
};
