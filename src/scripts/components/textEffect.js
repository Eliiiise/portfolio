export const textEffect = () => {

window.onscroll = () => {
    document.querySelector(".name").style.top= window.scrollY/2.17+"px";
    document.querySelector(".nameBack").style.top= -window.scrollY/1.856+"px";
    document.querySelector(".images").style.top= -window.scrollY+"px";
};
};

