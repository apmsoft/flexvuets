import Forms from "../../flexvue/core/Forms.class.js";
const onReady = () => {
  new Forms('#thePostForm').doSubmit((form_params) => {
    Log.d(form_params);
    document.querySelector('#echo_contents').innerHTML = JSON.stringify(form_params, null, 2);
  });
};
// document ready
new App().setLanguages([]).setResoures({
  sysmsg: new URL(`./js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
  arrays: new URL(`./js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
  strings: new URL(`./js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(onReady);