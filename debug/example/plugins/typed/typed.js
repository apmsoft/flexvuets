import Typed from "../../../plugins/typed.js/dist/typed.module.js";
const typed = new Typed('#element', {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.', '한글로 잘 되려나??'],
  typeSpeed: 50
});