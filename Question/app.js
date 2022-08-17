const containter = document.querySelector(".container");
for(let i = 0; i < containter.length; i++){
    containter[i].addEventListener("click", ()=>{
        this.classList.toggle("active");
    }
    );
}