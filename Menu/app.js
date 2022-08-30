let all=document.querySelector(".all");
let breakfastBtn=document.querySelector(".breakfastbtn");
let lunchBtn=document.querySelector(".lunchbtn");
let shakesBtn=document.querySelector(".shakesbtn");

all.addEventListener("click",()=>{
    breakfastDiv.style.display="display";
    lunchDiv.style.display="display";
    shakesDiv.style.display="display";
});

let breakfastDiv=document.querySelector(".breakfastDiv");
breakfastBtn.addEventListener("click",()=>{
    breakfastDiv.style.display="display";
    lunchDiv.style.display="none";
    shakesDiv.style.display="none";
});

let lunchDiv=document.querySelector(".lunchDiv");
lunchBtn.addEventListener("click",()=>{
    lunchDiv.style.display="display";
    breakfastDiv.style.display="none"
    shakesDiv.style.display="none";
});

let shakesDiv=document.querySelector(".shakesDiv");
shakesBtn.addEventListener("click",()=>{
    shakesDiv.style.display="display";
    breakfastDiv.style.display="none";
    lunchDiv.style.display="none";
});