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

  set slideIndexOne(v) {
    if (typeof v !== "number") {
      throw TypeError();
    }
    if (
      Number.isNaN(v) ||
      v < 0 ||
      v > this.slides.length ||
      !Number.isInteger(v)
    ) {
      throw RangeError();
    }
    this._slideIndexOne = v;
  }

  set slideIndexTwo(v) {
    if (typeof v !== "number") {
      throw TypeError();
    }
    if (
      Number.isNaN(v) ||
      v < 0 ||
      v > this.slides.length ||
      !Number.isInteger(v)
    ) {
      throw RangeError();
    }
    this._slideIndexTwo = v;
  }

  set slideIndexThree(v) {
    if (typeof v !== "number") {
      throw TypeError();
    }
    if (
      Number.isNaN(v) ||
      v < 0 ||
      v > this.slides.length ||
      !Number.isInteger(v)
    ) {
      throw RangeError();
    }
    this._slideIndexThree = v;
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

  get slideIndexOne() {
    return this._slideIndexOne;
  }

  get slideIndexTwo() {
    return this._slideIndexTwo;
  }

  get slideIndexThree() {
    return this._slideIndexThree;
  }

  get currentSlideFist() {
    return this.slides[this._slideIndexOne];
  }

  get currentSlideSecond() {
    return this.slides[this._slideIndexTwo];
  }

  get currentSlideThird() {
    return this.slides[this._slideIndexThree];
  }
}
