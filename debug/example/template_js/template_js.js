import AsyncTask from "../../flexvue/core/AsyncTask.class.js";
import { ElementDiv } from "../../flexvue/components/ElementsManager.class.js";
const onReady = () => {
  ProgressBars.show();
  new AsyncTask().doImport(new URL(`../template_js/tpl/test.tpl.js`, import.meta.url).href).
  then((data) => {
    const template = new data.Template();
    // 출력
    new ElementDiv('#echo_contents').html(template.render({
      name: "홍길동",
      age: 17,
      msg: [
      {
        name: "유관순"
      }]

    }));
  }).
  finally(() => {
    // close progress
    ProgressBars.close();
  });
};
//setLanguages = ['en','ja','ko'];
new App().setLanguages([]).setResoures({
  sysmsg: new URL(`../js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
  arrays: new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
  strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(onReady);