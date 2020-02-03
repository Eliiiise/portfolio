
const nbProject=6;
export const indexPreparation = (i) => {
    document.documentElement.style.overflow = 'hidden';
    document.querySelector("html").style.scrollBehavior="auto";
    const place=(i-1) * 285;//defini quand on est enface du project
    removeTransition();
    textCenter(i);
    document.querySelector(".text"+i).classList.add("textChoose");
    document.querySelector(".img"+i).classList.add("imgChoose");
    delateOther(i);
    document.querySelector(".name").style.pointerEvents="none";
    document.querySelector(".images").style.pointerEvents="none";

};

function delateOther(kept) {
    for (let n = 1; n < nbProject+1; n++) {
        if (n!=kept){
            document.querySelector(".img"+n).classList.add("imgDontChoose");
            document.querySelector(".text"+n).classList.add("textDontChoose");
            document.querySelector(".detector").classList.add("delateDetector");
        }
        if (n<kept){
            document.querySelector(".text"+n).style.transform= "translateY(-50px)";
            document.querySelector(".img"+n).style.transform= "translateY(-50px)";
        }
        if (n>kept){

            document.querySelector(".img"+n).style.transform= "translateY(+50px)";
        }
    }
};

function textCenter(kept) {
    const Wimg=(document.querySelector(".img"+kept).offsetWidth)*0.8;
    const Wtext=document.querySelector(".text"+kept).offsetWidth*1.78;
    const Limg=document.querySelector(".images").offsetLeft+(((Wimg/0.8)-Wimg)/2);
    const Ltext=document.querySelector(".name").offsetLeft;
    const x=Limg-Ltext-((Wtext-Wimg)/2)+2;
    const y= -(kept-1)*6.2-40;
    document.querySelector(".text"+kept).style.transform= "translate("+x+"px,"+y+"px)";
};

function removeTransition() {
    for (let n = 1; n < nbProject+1; n++) {
        document.querySelector(".text"+n).style.transition="all 0s";
        document.querySelector(".img"+n).style.transition="all 0s";
    }
}
