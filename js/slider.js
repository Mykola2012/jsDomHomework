"use strict";

class Slider {
  constructor(slides, currentSlideIndex = 0) {
    this.slides = slides;
    this.currentSlideIndex = currentSlideIndex;
  }

  set currentSlideIndex(v) {
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
    this._currentSlideIndex = v;
  }

  get currentSlideIndex() {
    return this._currentSlideIndex;
  }

  incSlideIndex() {
    this.currentSlideIndex = this.nextSlideIndex;
  }

  decSlideIndex() {
    this.currentSlideIndex = this.prevSlideIndex;
  }

  get prevSlideIndex() {
    return (
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length
    );
  }

  get nextSlideIndex() {
    return (this.currentSlideIndex + 1) % this.slides.length;
  }

  get currentSlideFist() {
    return this.slides[this.prevSlideIndex];
  }

  get currentSlideSecond() {
    return this.slides[this._currentSlideIndex];
  }

  get currentSlideThird() {
    return this.slides[this.nextSlideIndex];
  }
}
