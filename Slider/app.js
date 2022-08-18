const slide = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slide.forEach(function (slides, index) {
  slides.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  slider();
});

prevBtn.addEventListener("click", function () {
  counter--;
  slider();
});

function slider() {
  // working with slides
//   if (counter === slides.length) {
//     counter = 0;
//   }
//   if (counter < 0) {
//     counter = slides.length - 1;
//   }
//   working with buttons

  if (counter < slide.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slide.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.display = "none";