import { textEffect } from "./textEffect";
import { chooseProject } from "./chooseProject";

export const removePreparation = (i) => {
    document.documentElement.style.overflow = 'hidden';
    addTransition();
    document.querySelector(".text"+i).classList.remove("textChoose");
    document.querySelector(".text"+i).style.color=("white");
    document.querySelector(".img"+i).classList.remove("imgChoose");
    removeTextCenter(i);
    removeDelateOther(i);
    document.querySelector(".name").style.pointerEvents="auto";
    document.querySelector(".images").style.pointerEvents="auto";
    setTimeout(function(){
        document.documentElement.style.overflow = 'scroll';
        document.querySelector("html").style.scrollBehavior="smooth";
        document.querySelector(".detector").classList.remove("delateDetector");
        document.querySelector(".text"+i).style.color=("rgba(0,0,0,0)");
        textEffect();
        chooseProject();
    }, 1010);
};

const nbProject=6;

function removeDelateOther(kept) {
    for (let n = 1; n < nbProject+1; n++) {
        if (n!=kept){
            document.querySelector(".img"+n).classList.remove("imgDontChoose");
            document.querySelector(".text"+n).classList.remove("textDontChoose");
            //document.querySelector(".detector").classList.remove("delateDetector");
        }
        if (n<kept){
            document.querySelector(".text"+n).style.transform= "translateY(0)";
            document.querySelector(".img"+n).style.transform= "translateY(0)";
        }
        if (n>kept){

            document.querySelector(".img"+n).style.transform= "translateY(0)";
        }
    }
}

function removeTextCenter(kept) {
    document.querySelector(".text"+kept).style.transform= "translate(0,0)";
}

function addTransition() {
    for (let n = 1; n < nbProject+1; n++) {
        document.querySelector(".text"+n).style.transition="all 1s";
        document.querySelector(".img"+n).style.transition="all 1s";
    }
}
