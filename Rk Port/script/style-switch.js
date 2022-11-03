const styleSwitch =document.querySelector(".style-switcher-toggler");
styleSwitch.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll",() =>{
    if( document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
   
})

const altStyle =document.querySelectorAll(".alt-style");
function setActiveStyle(color){
    altStyle.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

const dayLight =document.querySelector(".day-night");
dayLight.addEventListener("click", ()=>{
    dayLight.querySelector("i").classList.toggle("fa-moon");
    dayLight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        dayLight.querySelector("i").classList.add("fa-moon");
    }
    else{
        dayLight.querySelector("i").classList.add("fa-sun");

    }
})

// window.onclick(alert("Are you sure to visit my portfolio!!.."));



