import AsyncTask from "../../flexvue/core/AsyncTask.class.js";
import Forms from "../../flexvue/core/Forms.class.js";
import { ElementDiv, ElementSelect } from "../../flexvue/components/ElementsHtml.class.js";
const onReady = () => {
  new AsyncTask().doImport(new URL(`../components/tpl/form.template.js`, import.meta.url).href).
  then((Module) => {
    const editView = new Module.EditView();
    // output
    new ElementDiv('#fvue--layout--main').html(editView.render({}));
    return 'ok';
  }).
  then((ok) => {
    // level select
    new ElementSelect('#level').selected('999').addEventListener('change', (el, value) => {
      alert(value);
    });
    // form
    new Forms('#theManagerEditForm').doSubmit((form_params) => {
      Log.d(form_params);
    });
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);