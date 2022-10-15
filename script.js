let icon = document.querySelector('#icon');
let ul = document.querySelector('ul');
let body = document.body;
document.addEventListener("DOMContentLoaded" , change)
function change(){
    icon.addEventListener("click" , dam)
    function dam (){
        ul.classList.toggle('show');
    }
}



let btn_one= document.getElementById("btn-one")
let btn_tow= document.getElementById("btn-tow")
let btn_three= document.getElementById("btn-three")
let btn4= document.getElementById("btn-four")
let btn5= document.getElementById("btn-five")
let btn6= document.getElementById("btn-six")


console.log(btn_one,btn_tow,btn_three,btn4,
btn5,
btn6)




let accord1 = document.querySelector(".accord1")
let accord2 = document.querySelector(".accord2")
let accord3 = document.querySelector(".accord3")
let accord4 = document.querySelector(".accord4")
let accord5 = document.querySelector(".accord5")
let accord6 = document.querySelector(".accord6")
accord2.classList.add("hidden")
accord3.classList.add("hidden")
accord4.classList.add("hidden")
accord5.classList.add("hidden")
accord6.classList.add("hidden")
btn_one.onclick = function change(){

accord2.classList.add("hidden")
accord3.classList.add("hidden");
accord1.classList.remove("hidden");
accord4.classList.add("hidden")
accord5.classList.add("hidden");
accord6.classList.add("hidden");



}
btn_tow.onclick = function hide(){

accord2.classList.remove("hidden")
accord1.classList.add("hidden")
accord3.classList.add("hidden");
accord4.classList.add("hidden")
accord5.classList.add("hidden");
accord6.classList.add("hidden");





}
btn_three.onclick = function hide2(){

accord3.classList.remove("hidden")
accord2.classList.add("hidden")
accord1.classList.add("hidden");
accord4.classList.add("hidden")
accord5.classList.add("hidden");
accord6.classList.add("hidden");


}
btn4.onclick = function hide3(){

accord4.classList.remove("hidden")
accord2.classList.add("hidden")
accord1.classList.add("hidden");
accord3.classList.add("hidden");
accord5.classList.add("hidden");
accord6.classList.add("hidden");

}
btn5.onclick = function hide4(){
accord5.classList.remove("hidden")

accord4.classList.add("hidden")
accord2.classList.add("hidden")
accord1.classList.add("hidden");
accord3.classList.add("hidden");
accord6.classList.add("hidden");
}
btn6.onclick = function hide5(){
accord6.classList.remove("hidden")
accord4.classList.add("hidden")
accord2.classList.add("hidden")
accord1.classList.add("hidden");
accord3.classList.add("hidden");
accord5.classList.add("hidden");
}


let btn = document.getElementById("btn");

btn.onclick = function (){
  scroll({
    left:0,
    top:0,
    behavior:"smooth"
  })
}



let homeAnchor=document.getElementById("homeAnchor")
let aboutCoronaAnchor =document.getElementById("aboutCoronaAnchor");
let SymptomsAnchor=document.getElementById("SymptomsAnchor");
let PreventionAnchor=document.getElementById("PreventionAnchor");
let TreatmentAnchor=document.getElementById("TreatmentAnchor");
let FAQAnchor=document.getElementById("FAQAnchor");
let NewsAnchor=document.getElementById("NewsAnchor");
let doAndDonotAnchor=document.getElementById("doAndDonotAnchor");


//sections
let homeSection=document.getElementById("homeSection");
let aboutTheDisease=document.getElementById("aboutTheDisease");
let transmission=document.getElementById("transmission");
let steps=document.getElementById("steps");
let symptomsOfCorona=document.getElementById("symptomsOfCorona");
let prevention=document.getElementById("prevention");
let treatment=document.getElementById("treatment");
let doAnddonot=document.getElementById("doAnddonot");
let faqSection=document.getElementById("faq");
let latestUpdate=document.getElementById("latestUpdate");
let footer=document.getElementById("footer");


window.onscroll=function(){
    




    if(window.scrollY>=homeSection.offsetTop){
        homeAnchor.classList.add("navAnchorColor")
    }else{
        homeAnchor.classList.remove("navAnchorColor")
    }

if(window.scrollY>=aboutTheDisease.offsetTop){
    aboutCoronaAnchor.classList.add("navAnchorColor")
    homeAnchor.classList.remove("navAnchorColor")


}else{
    aboutCoronaAnchor.classList.remove("navAnchorColor")
}

if(window.scrollY>=symptomsOfCorona.offsetTop){
    SymptomsAnchor.classList.add("navAnchorColor")
     aboutCoronaAnchor.classList.remove("navAnchorColor")
    homeAnchor.classList.remove("navAnchorColor")
 
}else{
    SymptomsAnchor.classList.remove("navAnchorColor")
}

if(window.scrollY>=prevention.offsetTop){
    PreventionAnchor.classList.add("navAnchorColor")
     aboutCoronaAnchor.classList.remove("navAnchorColor")
    homeAnchor.classList.remove("navAnchorColor")
    SymptomsAnchor.classList.remove("navAnchorColor")
}else{
    PreventionAnchor.classList.remove("navAnchorColor")
}

if(window.scrollY>=treatment.offsetTop){
    TreatmentAnchor.classList.add("navAnchorColor")
    PreventionAnchor.classList.remove("navAnchorColor")
    aboutCoronaAnchor.classList.remove("navAnchorColor")
    homeAnchor.classList.remove("navAnchorColor")
    SymptomsAnchor.classList.remove("navAnchorColor")
}else{
    
    TreatmentAnchor.classList.remove("navAnchorColor")
}

if(window.scrollY>=faqSection.offsetTop){
    FAQAnchor.classList.add("navAnchorColor")
    PreventionAnchor.classList.remove("navAnchorColor")
    aboutCoronaAnchor.classList.remove("navAnchorColor")
    homeAnchor.classList.remove("navAnchorColor")
    SymptomsAnchor.classList.remove("navAnchorColor")
    TreatmentAnchor.classList.remove("navAnchorColor")
}else{
    FAQAnchor.classList.remove("navAnchorColor")
    

}

if(window.scrollY>=latestUpdate.offsetTop){
    
    NewsAnchor.classList.add("navAnchorColor")
    FAQAnchor.classList.remove("navAnchorColor")
    PreventionAnchor.classList.remove("navAnchorColor")
    aboutCoronaAnchor.classList.remove("navAnchorColor")
    homeAnchor.classList.remove("navAnchorColor")
    SymptomsAnchor.classList.remove("navAnchorColor")
    TreatmentAnchor.classList.remove("navAnchorColor")
}else{
    NewsAnchor.classList.remove("navAnchorColor")
 
}













};