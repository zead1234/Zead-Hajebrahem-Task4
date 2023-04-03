const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const images = carousel.querySelector('.carousel-images');
  const buttons = carousel.querySelectorAll('.button');
  const imageCount = images.children.length;
  let currentIndex = 0;
  let imageWidth = images.children[0].clientWidth + 15; // set the width of each image to 80px
  
  images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  
  // handle prev button click
  buttons[0].addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = imageCount - 1;
    }
    images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  });

  // handle next button click
  buttons[1].addEventListener('click', () => {
    if (currentIndex < imageCount - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  });

  // handle window resize
  window.addEventListener('resize', () => {
    imageWidth = images.children[0].clientWidth + 15;
    images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  });

});


















const list =document.getElementById('list');
const bars =document.getElementById('bar');
function f1(){

    list.classList.toggle("show");
    list.classList.toggle("list");

}






// document.addEventListener('DOMContentLoaded', function() {
//   const slidesContainer = document.querySelector('.slides-container');
//   const slide = document.querySelectorAll('.slide');
//   const prevButton = document.querySelector('.prev-button');
//   const nextButton = document.querySelector('.next-button');

//   let counter = 0;
//   const slideWidth = slide[0].clientWidth;

//   nextButton.addEventListener('click', () => {
//     if (counter === slide.length - 1) {
//       counter = 0;
//       slidesContainer.style.transform = `translateX(-${counter * slideWidth}px)`;
//       return;
//     }

//     counter++;
//     slidesContainer.style.transform = `translateX(-${counter * slideWidth}px)`;
//   });

//   prevButton.addEventListener('click', () => {
//     if (counter === 0) {
//       counter = slide.length - 1;
//       slidesContainer.style.transform = `translateX(-${counter * slideWidth}px)`;
//       return;
//     }

//     counter--;
//     slidesContainer.style.transform = `translateX(-${counter * slideWidth}px)`;
//   });
// });



// // third one

// const track = document.querySelector('.carousel-track');
// const slides = Array.from(track.children);

// const slideWidth = slides[0].getBoundingClientRect().width;

// // arrange slides next to one another
// const setSlidePosition = (slide, index) => {
//   slide.style.left = `${slideWidth * index}px`;
// };

// slides.forEach(setSlidePosition);

// let counter = 1;

// // shift the carousel to the left and move the first slide to the end of the array
// const moveToNextSlide = () => {
//   counter++;
//   track.style.transform = `translateX(${-slideWidth * counter}px)`;
//   if (counter >= slides.length - 1) {
//     counter = -1;
//     track.style.transform = `translateX(0)`;
//   }
// };

// // shift the carousel to the right and move the last slide to the front of the array
// const moveToPrevSlide = () => {
//   counter--;
//   track.style.transform = `translateX(${-slideWidth * counter}px)`;
//   if (counter <= 0) {
//     counter = slides.length - 2;
//     track.style.transform = `translateX(${-slideWidth * (slides.length - 1)}px)`;
//   }
// };

// const prevButton = document.querySelector('.carousel-prev');
// const nextButton = document.querySelector('.carousel-next');

// prevButton.addEventListener('click', moveToPrevSlide);
// nextButton.addEventListener('click', moveToNextSlide);
