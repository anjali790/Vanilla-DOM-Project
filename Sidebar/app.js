const toggleBtn = document.querySelector(".sidebarToggle");
const closeBtn = document.querySelector(".closeBtn");
const sidebar = document.querySelector(".sidebar")

toggleBtn.addEventListener("click",function(){
    sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click",function(){
    sidebar.classList.toggle("active");
});