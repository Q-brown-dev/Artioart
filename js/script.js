'use strict';

const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  currentSlidePos = (currentSlidePos + 1) % heroSliderItems.length;
  updateSliderPos();
}

const slidePrev = function () {
  currentSlidePos = (currentSlidePos - 1 + heroSliderItems.length) % heroSliderItems.length;
  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);
heroSliderPrevBtn.addEventListener("click", slidePrev);

// Auto slide
let autoSlideInterval;
const autoSlide = function () {
  autoSlideInterval = setInterval(slideNext, 7000);
}
heroSliderNextBtn.addEventListener("mouseover", () => clearInterval(autoSlideInterval));
heroSliderNextBtn.addEventListener("mouseout", autoSlide);
heroSliderPrevBtn.addEventListener("mouseover", () => clearInterval(autoSlideInterval));
heroSliderPrevBtn.addEventListener("mouseout", autoSlide);

window.addEventListener("load", autoSlide);

// Back to top button
const backTopBtn = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
});


window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  document.body.classList.add("loaded");
  preloader.classList.add("loaded");
});



// if (send) {
//   send.addEventListener("click", () => {
//    console.log();
//    result = "THank's For your info we'ill gwt in touch soon";
//     result.textContent = toString();
//   });
// }


// const send = document.getElementById("send");
// function SendMessage() {
//   result.textContent = message.toString();
//   result.style.color = "green"
// };

// send.addEventListener("click", SendMessage);

let message = "";
function sendMessage() {
  const result = document.getElementById("result");

  message = "Thank's for your info we'ill get in touch soon!";
  result.textContent = message.toString();
  return;
};



const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicToggle.innerText = "🔊 Music On";
  } else {
    music.pause();
    music.pause();
    musicToggle.innerText = "🔇 Music Off";
  }
}

// Optional : start with lower volume
music.volume = 0.2;


