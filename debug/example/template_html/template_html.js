import Template from "../../flexvue/core/template.class.js";
const onReady = () => {
  ProgressBars.show();
  new Template().readFile(new URL(`../template_html/tpl/test.tpl.html`, import.meta.url).href).
  then((template) => {
    // 데이터 설정
    const resp = {
      name: '홍길동', age: 20, msg: [{ name: '-홍' }]
    };
    // 출력
    const outhtml_el = document.querySelector('#echo_contents');
    outhtml_el.innerHTML = new Template().render(template, { message: resp });
  }).
  finally(() => {
    // close progress
    ProgressBars.close();
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);