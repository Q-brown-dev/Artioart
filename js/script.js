'use strict';
// Toggle navbar
const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");

navToggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

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


    