let count=0;

const value=document.querySelector('#value');
const btn=document.querySelectorAll('.btn');
// console.log(btn)

btn.forEach((btns)=>{
    btns.addEventListener('click',(event)=>{
        const style=event.currentTarget.classList;
        if(style.contains('decrease')){
            count--;
        }else if(style.contains('increase')){
            count++;
        }else{
            count=0;
        }
        value.textContent=count;
    })
})