

export const projectParallax = () => {
    window.scroll(0,1);
    window.onscroll = () => {
        if (document.querySelector(".projectHeaderImage")!=null){
            document.querySelector(".projectHeaderTitle").style.top= -window.scrollY/3+"px";
            document.querySelector(".parallax1").style.top= -window.scrollY/20+"px";
            document.querySelector(".parallax2").style.top= -window.scrollY/5+"px";
            //document.querySelector(".parallax3").style.top= -window.scrollY/3+"px";
            document.querySelector("h2").style.left = -window.scrollY*1.5+"px";
            document.querySelector("h2").style.top = window.scrollY/5+"px";
        };
    };
};


