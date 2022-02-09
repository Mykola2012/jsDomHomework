"use strict";

const [textBtn, colorBtn] = document.querySelectorAll("button");

textBtn.onclick = () => {
  textBtn.style.color = "blue";
};

colorBtn.addEventListener("click", changeColorBg);

function changeColorBg() {
  let valueOne = Math.round(Math.random() * 255);
  let valueTwo = Math.round(Math.random() * 255);
  let valueThree = Math.round(Math.random() * 255);
  this.style.backgroundColor = `rgb(${valueOne}, ${valueTwo}, ${valueThree})`;
}

const elem = document.querySelector("p");
const selector = ["red-color-text", "yellow-color-text", "blue-color-text"];
let selectorIndex = 2;
let delSelectorIndex = 1;

elem.addEventListener("click", changeColor);
elem.addEventListener("click", deleteColor);

function changeColor() {
  selectorIndex = (selectorIndex + 1) % selector.length;
  this.classList.add(`${selector[selectorIndex]}`);
}

function deleteColor() {
  delSelectorIndex = (delSelectorIndex + 1) % selector.length;
  this.classList.remove(`${selector[delSelectorIndex]}`);
}

const slides = [
  {
    src: "https://ocdn.eu/pulscms-transforms/1/_Xlk9kqTURBXy8wYzMwZmU5NjJkZDlmYWI1NDZiZDM4OWRmYWJhZjFkOS5qcGVnk5UDAM0BDM0QwM0JbJMJpmU3Mjc0YQaTBc0EsM0CdoGhMAE/panda.jpg",
    atl: "Panda",
  },
  {
    src: "https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0010/17/e5253fb8cfec5b05d86596709e694c687d4ff8a3.jpeg",
    atl: "Panda",
  },
  {
    src: "https://www.wwf.pl/sites/default/files/inline-images/panda-6.jpg",
    atl: "Panda",
  },
];

const slider = new Slider(slides);

const [elImgOne, elImgTwo, elImgThree] = document.querySelectorAll("img");
const [prevImg, nextImg] = document.querySelectorAll(".prev-next-img");

updateSlideAll();

nextImg.onclick = () => {
  slider.incSlideIndex();

  updateSlideAll();
};

prevImg.onclick = () => {
  slider.decSlideIndex();

  updateSlideAll();
};

function updateSlideAll() {
  updateSlideOne(slider.currentSlideFist);
  updateSlideTwo(slider.currentSlideSecond);
  updateSlideThree(slider.currentSlideThird);
}

function updateSlideOne(currentSlide) {
  elImgOne.src = currentSlide.src;
  elImgOne.alt = currentSlide.alt;
}

function updateSlideTwo(currentSlide) {
  elImgTwo.src = currentSlide.src;
  elImgTwo.alt = currentSlide.alt;
}

function updateSlideThree(currentSlide) {
  elImgThree.src = currentSlide.src;
  elImgThree.alt = currentSlide.alt;
}
