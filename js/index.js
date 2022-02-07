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

elem.addEventListener("click", changeColor);

function changeColor() {
  selectorIndex = (selectorIndex + 1) % selector.length;
  this.classList.add(`${selector[selectorIndex]}`);
}
