const toggleBtn = document.querySelector(".toggleBtn");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function () {
    links.classList.toggle("active");
});