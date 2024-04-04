import AsyncTask from "../../flexvue/core/asynctask.class.js";
class ComponentActivity {
  constructor() {
  }
  doGreeting() {
    ProgressBars.show();
    const self = this;
    // panel
    Activity.onStart('#left');
    // multiout
    new AsyncTask().doImport(new URL(`../menu1/tpl/greeting${App.getLocale()}.js`, import.meta.url).href).
    then((Module) => {
      const template = new Module.Template();
      document.querySelector('#left-content-container').innerHTML = template.render({});
      return 'ok';
    }).
    then((resp) => {
      // scroll top
      document.querySelector('#left-layout--main').scrollTo({ top: 0, behavior: 'smooth' });
    }).
    finally(() => {
      ProgressBars.close();
    });
  }
  doLocation() {
    ProgressBars.show();
    const self = this;
    // panel
    Activity.onStart('#left');
    // multiout
    new AsyncTask().doImport(new URL(`../menu1/tpl/location${App.getLocale()}.js`, import.meta.url).href).
    then((Module) => {
      const template = new Module.Template();
      document.querySelector('#left-content-container').innerHTML = template.render({});
      return 'ok';
    }).
    then((resp) => {
      // scroll top
      document.querySelector('#left-layout--main').scrollTo({ top: 0, behavior: 'smooth' });
    }).
    finally(() => {
      ProgressBars.close();
    });
  }
}
export { ComponentActivity };