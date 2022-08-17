const btn = document.querySelector('.btn');
const video = document.querySelector('.video');

btn.addEventListener('click', ()=>{
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    }else{
        btn.classList.remove('slide');
        video.play();
    }
})