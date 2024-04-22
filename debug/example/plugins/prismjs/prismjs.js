import Prism from "../../../plugins/prism-es6/prism.js";
const onReady = () => {
  // if you are intending to use Prism functions manually, you will need to set:
  Prism.manual = true;
  Prism.highlightAll();
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);