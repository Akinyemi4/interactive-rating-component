"use strict";
// Selecting Elements
const mainSectionEl = document.querySelector(".main-section");
const thankSectionEl = document.querySelector(".thank-section");

const ratingEl = document.querySelectorAll(".rating");
const selectedRatingEl = document.querySelector(".selRating");

const submitBtn = document.querySelector(".main-btn");
const ratingArrEl = Array.from(ratingEl);

let rateClicked = false;
ratingArrEl.forEach((eachEl, i) => {
  eachEl.addEventListener("click", () => {
    rateClicked = true;
    const btnEl = document.querySelector(`.rate--${i + 1}`);
    selectedRatingEl.textContent = btnEl.textContent;

    let backgroundCheck = ratingArrEl.some((eachEl) =>
      eachEl.classList.contains("clicked")
    );
    if (!backgroundCheck) {
      // There is no background
      eachEl.classList.add("clicked");
    } else {
      // There is background
      ratingArrEl
        .find((eachEl) => eachEl.classList.contains("clicked"))
        .classList.remove("clicked");
      eachEl.classList.add("clicked");
    }
  });
});

submitBtn.addEventListener("click", function () {
  if (rateClicked) {
    mainSectionEl.classList.add("hidden");
    thankSectionEl.classList.remove("hidden");
  }
});
