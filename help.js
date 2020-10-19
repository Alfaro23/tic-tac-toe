let helpBlock = document.querySelector(".help__block");
let help = document.querySelector(".help");

help.addEventListener("click", () => {
    if(helpBlock.style.display == "none"){
        helpBlock.style.display = "block";
        helpBlock.style.animation = "newanim 3.5s";
    } else{
        helpBlock.style.display = "none";
    }
   
});