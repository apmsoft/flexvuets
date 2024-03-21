"use strict";
const onReady = () => {
  document.querySelectorAll('.uk-hidden').forEach((el, idx) => {
    console.log(idx);
    let closestTrObj = el.closest(`tr`);
    console.log(closestTrObj);
    if (closestTrObj) {
      let elPrice = closestTrObj.querySelector('.price');
      console.log(elPrice.textContent);
    }
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);