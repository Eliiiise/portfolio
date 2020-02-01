
export const nextProject = () => {
    console.log(document.querySelector(".nextProject"));
    document.querySelector("h3").addEventListener("click",  () => {
        //document.documentElement.style.overflow = 'hidden';
        document.querySelector("#swup>a").style.transition=("all .8s");
        document.querySelector("h3").style.transition=("all .8s");
        document.querySelector(".imgNext").style.display=("block");
        document.querySelector("#swup>a").classList.add("nextTitle");
        document.querySelector("h3").classList.add("next");
        document.querySelector("html").style.scrollBehavior="auto";
        removeProject();
        setTimeout(function(){
            document.querySelector(".imgNext").style.transition=("all .8s");
            document.querySelector(".imgNext").classList.add("imgNextActive");
        }, 10);

    });
};

function removeProject() {
    document.querySelector("section:nth-of-type(1)").style.transition=("all .8s");
    document.querySelector("section:nth-of-type(1)").style.transform=("translateY(-80vh)");
    document.querySelector("section:nth-of-type(2)").style.transition=("all .8s");
    document.querySelector("section:nth-of-type(2)").style.transform=("translateY(-80vh)");

};
