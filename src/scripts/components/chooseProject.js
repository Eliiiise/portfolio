export const chooseProject = () => {
    const nbProject=5;
    for (let i = 1; i < nbProject+1; i++) {
        const place=(i-1) * 280;
        document.querySelector(".text"+i).addEventListener("click",  () => {
            window.scroll(0,place);
            setTimeout(function(){
                document.querySelector(".text"+i).classList.add("textChoose");
                document.querySelector(".img"+i).classList.add("imgChoose");
                textCenter(i);
                console.log(".text"+i);
                delateOther(i);
            }, Math.abs(window.scrollY-place)+100);
        });
        document.querySelector(".img"+i).addEventListener("click",  () => {

            window.scroll(0,place);
            setTimeout(function(){
                document.querySelector(".img"+i).classList.add("imgChoose");
                document.querySelector(".text"+i).classList.add("textChoose");
                textCenter(i);
                console.log(".img"+i);
                delateOther(i);
            }, Math.abs(window.scrollY-place));
        });
    };

    function delateOther(kept) {
        for (let n = 1; n < nbProject+1; n++) {
         if (n!=kept){
             document.querySelector(".img"+n).classList.add("imgDontChoose");
             document.querySelector(".text"+n).classList.add("textDontChoose");
             document.querySelector(".detector").classList.add("delateDetector");
         }
         if (n<kept){
             document.querySelector(".text"+n).style.transform= "translateY(-50px)"
             document.querySelector(".img"+n).style.transform= "translateY(-50px)"
         }
        if (n>kept){

            document.querySelector(".img"+n).style.transform= "translateY(+50px)"
        }
        }
    }

    function textCenter(kept) {
        const Wimg=(document.querySelector(".img"+kept).offsetWidth)*0.8;
        const Wtext=document.querySelector(".text"+kept).offsetWidth*1.78;
        const Limg=document.querySelector(".images").offsetLeft+(((Wimg/0.8)-Wimg)/2);
        const Ltext=document.querySelector(".name").offsetLeft;
        const x=Limg-Ltext-((Wtext-Wimg)/2);
        document.querySelector(".text"+kept).style.transform= "translate("+x+"px,-40px)";
        console.log(Wimg);
        console.log(Wtext);
        console.log(Limg);
        console.log(Ltext);
    }

}
