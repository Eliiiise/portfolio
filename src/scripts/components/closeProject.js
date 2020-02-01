export const closeProject = () => {
    if(document.querySelector(".close")!=null){
    document.querySelector(".close").addEventListener("click",  () => {
        document.documentElement.style.overflow = 'hidden';
        window.scroll(0,0);
        console.log('closeeeeee');
        document.querySelector(".text"+i).classList.remove("textChoose");
        document.querySelector(".img"+i).classList.remove("imgChoose");
        document.querySelector("html").style.scrollBehavior="auto";

    });
};
};
