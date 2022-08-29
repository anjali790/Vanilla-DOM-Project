let container = document.querySelectorAll(".innerDiv");
console.log(container);

for (let i = 0; i < container.length; i++) {
    container[i].addEventListener("click", function(){
        this.classList.toggle("active");
    }
    );
}