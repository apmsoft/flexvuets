import AsyncTask from "../../flexvue/core/asynctask.class.js";
const onReady = () => {
  ProgressBars.show();
  new AsyncTask().doImport(new URL(`../template_js/tpl/test.tpl.js`, import.meta.url).href).
  then((data) => {
    // 데이터 설정
    const resp = {
      name: '홍길동', age: 20, msg: [{ name: '-홍' }]
    };
    Log.d(resp);
    const template = new data.Template();
    // 출력
    const outhtml_el = document.querySelector('#echo_contents');
    outhtml_el.innerHTML = template.render(resp);
  }).
  finally(() => {
    // close progress
    ProgressBars.close();
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
//# sourceMappingURL=template_js.js.map