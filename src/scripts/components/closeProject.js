export const closeProject = () => {
        if(document.querySelector(".close")!=null){
                document.querySelector(".close").addEventListener("click",  () => {
                        document.documentElement.style.overflow = 'hidden';
                        window.scroll(0,0);
                        document.querySelector("html").style.scrollBehavior="auto";
                });
        };
};
