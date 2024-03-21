import { CountUp } from "../../../flexvue/plugins/countup/countup.js";
const onReady = () => {
  Handler.post(function () {
    const countUp = new CountUp('mypoint', 10000);
    if (!countUp.error) {
      countUp.start();
    } else
    {
      throw countUp.error;
    }
  }, 1000);
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);