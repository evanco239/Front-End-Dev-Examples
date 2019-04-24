const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const interval = 5000;
let slideInterval;

const nextSlide = () => {
  //get current class
  const current = document.querySelector(".current");
  //removes current class
  current.classList.remove("current");
  //check for nextSiblig
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    //get first element
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"), 500);
};

const prevSlide = () => {
  //get current class
  const current = document.querySelector(".current");
  //removes current class
  current.classList.remove("current");
  //check for nextSiblig
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    //get first element
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"), 500);
};

next.addEventListener("click", () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});
prev.addEventListener("click", () => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});

if (auto) {
  slideInterval = setInterval(nextSlide, interval);
}
