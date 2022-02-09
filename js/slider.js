"use strict";

class Slider {
  constructor(
    slides,
    slideIndexOne = 0,
    slideIndexTwo = 1,
    slideIndexThree = 2
  ) {
    this.slides = slides;
    this.slideIndexOne = slideIndexOne;
    this.slideIndexTwo = slideIndexTwo;
    this.slideIndexThree = slideIndexThree;
  }

  incSlideIndex() {
    this.slideIndexOne = (this.slideIndexOne + 1) % this.slides.length;
    this.slideIndexTwo = (this.slideIndexTwo + 1) % this.slides.length;
    this.slideIndexThree = (this.slideIndexThree + 1) % this.slides.length;
  }

  decSlideIndex() {
    this.slideIndexOne =
      (this.slideIndexOne - 1 + this.slides.length) % this.slides.length;
    this.slideIndexTwo =
      (this.slideIndexTwo - 1 + this.slides.length) % this.slides.length;
    this.slideIndexThree =
      (this.slideIndexThree - 1 + this.slides.length) % this.slides.length;
  }

  get currentSlideFist() {
    return this.slides[this.slideIndexOne];
  }

  get currentSlideSecond() {
    return this.slides[this.slideIndexTwo];
  }

  get currentSlideThird() {
    return this.slides[this.slideIndexThree];
  }
}
