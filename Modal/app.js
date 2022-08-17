const btn=document.querySelector("#btn");
const popUp=document.querySelector(".popUp");
const  cancelBtn=document.querySelector(".cancelBtn");

btn.addEventListener("click",function(){
    popUp.classList.add("btn1");
});

cancelBtn.addEventListener("click",function(){
    popUp.classList.remove("btn1");
});
