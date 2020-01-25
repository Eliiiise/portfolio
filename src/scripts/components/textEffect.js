export const textEffect = () => {

window.onscroll = () => {
    document.querySelector(".name").style.top= window.scrollY/1.95+"px";
    document.querySelector(".nameBack").style.top= -window.scrollY/2.052+"px";
    document.querySelector(".images").style.top= -window.scrollY+"px";
};

for (let i = 1; i < 6; i++) {
    document.querySelector(".text"+i).addEventListener("click",  () => {
        document.querySelector(this).classList.add("textChoose");
        document.querySelector(".img"+i).classList.add("imgChoose");
        console.log(".text"+i);
    });
    document.querySelector(".img"+i).addEventListener("click",  () => {
        document.querySelector(this).classList.add("imgChoose");
        document.querySelector(".text"+i).classList.add("textChoose");
        console.log(".text"+i);
    });
}
};


