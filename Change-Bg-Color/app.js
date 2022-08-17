// const colors = ["green", "red","yellow", "blue", "purple"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click",()=>{
//   const randomNumber = getRandomNumber();
//   // console.log(randomNumber);

//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber(){
//   return Math.floor(Math.random() * colors.length);
// }
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
  let hexColor='#';
  for(let i=0; i<6; i++){
    hexColor=hexColor+hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
  return Math.floor(Math.random()*hex.length)
}