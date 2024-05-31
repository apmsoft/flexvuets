import Forms from "../../flexvue/core/Forms.class.js";
const onReady = () => {
  new Forms('#thePostForm').doSubmit((form_params) => {
    Log.d(form_params);
    document.querySelector('#echo_contents').innerHTML = JSON.stringify(form_params, null, 2);
  });
};
// document ready
new App().setLanguages([]).setResoures(import.meta.url).run(onReady);