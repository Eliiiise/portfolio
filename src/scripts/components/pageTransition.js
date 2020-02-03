import SwupJsPlugin from '@swup/js-plugin';
import Swup from 'swup';
import { TweenLite, TimelineMax, Linear, Back, Sine } from 'gsap';

import { closeProject } from "./closeProject";
import { projectParallax } from "./projectParallax";
import { nextProject } from "./nextProject";

import { textEffect } from "./textEffect";
import { chooseProject } from "./chooseProject";
import { indexPreparation } from "./indexPreparation";

import { removePreparation } from "./removePreparation";


export const pageTransition = () =>{
   var timeTransition=1.8;
   var nbProject=1;
   const options = [
      {
         from: '(.*)', // meaning any
         to: '(.*)', // meaning any
         out: (next) => {
            document.querySelector('#swup').style.opacity = 1;
            TweenLite.to(document.querySelector('#swup'), timeTransition, {
               onComplete: next
            });
         },
         in: (next) => {
            if (timeTransition==1.7 ) {
               window.scroll(0,(nbProject-1)*285);
               console.log((nbProject-1)*285);
            }
            else{
               window.scroll(0,0);
            }
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

   function init() {
      if (document.querySelector('.projectHeaderTitle')) {
         projectParallax();
         nextProject();
         closeProject();
         timeTransition=0;
         document.querySelector("h3").addEventListener("click",  () => {
            timeTransition=1;
         });
         nbProject=document.querySelector("header").className.substr(-1,1);
         console.log(nbProject);
      }
      if (document.querySelector('.name')) {
         if (timeTransition==0) {
            timeTransition=1.7;
            console.log("okidoki");
            document.querySelector("html").style.scrollBehavior="auto";
            indexPreparation(nbProject);
            setTimeout(function(){
               removePreparation(nbProject);
            }, 10);
         }
         else{
            timeTransition=1.8;
         }
         textEffect();
         chooseProject();

      }
   };

   // run once
   init();

// this event runs for every page view after initial load
   swup.on('contentReplaced', init);


};

