var typed = new Typed(".typing",{
    strings:["","Undergraduate Student.","Problem Solver.","Web Designer."],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})



const nav =document.querySelector(".nav");
 const navList = nav.querySelectorAll("li");
 const totalNav = navList.length;
 const allSec = document.querySelectorAll(".sec");
 totalSec = allSec.length;
for(let i=0;i<totalNav; i++){
    const a =navList[i].querySelector("a");
    a.addEventListener("click", function(){

        for(let  i=0;i<totalSec;i++){
            allSec[i].classList.remove("backSec");
        }
        for(let j =0;j<totalNav;j++){

            if(navList[j].querySelector("a").classList.contains("active")){
                allSec[j].classList.add("backSec");
             }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSec(this);
        if(window.innerWidth <1200){
            asidesecTog();  
        }
    })

}

function showSec(element){

    for(let  i=0;i<totalSec;i++){
        allSec[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
    
   
}

const natoggle = document.querySelector(".nav-toggle"),
        aside= document.querySelector(".aside");
        natoggle.addEventListener("click" ,()=>{
            asidesecTog();
        })
        function asidesecTog(){
            aside.classList.toggle("open");
            natoggle.classList.toggle("open");
            for(let i=0;i<totalSec;i++){
                allSec[i].classList.toggle("open");
            }
        }