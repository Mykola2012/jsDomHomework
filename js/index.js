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

try {
  const slider = new Slider(slides);

  const [elImgOne, elImgTwo, elImgThree] = document.querySelectorAll("img");
  const [prevImg, nextImg] = document.querySelectorAll(".prev-next-img");

  updateSlideAll();

  nextImg.onmouseover = () => {
    nextImg.classList.add("non-filter");
  };

  prevImg.onmouseover = () => {
    prevImg.classList.add("non-filter");
  };

  nextImg.onmouseout = () => {
    nextImg.classList.remove("non-filter");
  };

  prevImg.onmouseout = () => {
    prevImg.classList.remove("non-filter");
  };

  nextImg.onclick = () => {
    slider.incSlideIndex();

    updateSlideAll();
  };

  prevImg.onclick = () => {
    slider.decSlideIndex();

    updateSlideAll();
  };

  function updateSlideAll() {
    updateSlide(elImgOne, slider.currentSlideFist);
    updateSlide(elImgTwo, slider.currentSlideSecond);
    updateSlide(elImgThree, slider.currentSlideThird);
  }

  function updateSlide(el, currentSlide) {
    el.src = currentSlide.src;
    el.alt = currentSlide.alt;
  }
} catch (err) {
  const [imgOne, imgTwo, imgThree] = document.querySelectorAll("img");
  function errImg(pevImg, mainImg, nextImg) {
    pevImg.src =
      "https://static8.depositphotos.com/1003238/882/v/600/depositphotos_8821893-stock-illustration-bamboo-on-white.jpg";
    mainImg.src =
      "https://static8.depositphotos.com/1003238/882/v/600/depositphotos_8821893-stock-illustration-bamboo-on-white.jpg";
    nextImg.src =
      "https://static8.depositphotos.com/1003238/882/v/600/depositphotos_8821893-stock-illustration-bamboo-on-white.jpg";
  }
  if (err instanceof TypeError) {
    console.log("TypeError :>> Argument must be type number");
    errImg(imgOne, imgTwo, imgThree);
  } else if (err instanceof RangeError) {
    console.log("RangeError :>> Argument must be > 0 and < argument.length");
    errImg(imgOne, imgTwo, imgThree);
  } else {
    console.log("err :>> ", err);
    errImg(imgOne, imgTwo, imgThree);
  }
}
