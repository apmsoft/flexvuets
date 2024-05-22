import AsyncTask from "../../../flexvue/core/AsyncTask.class.js";
class ComponentActivity {
  constructor() {
  }
  do(params = {}) {
    ProgressBars.show();
    // send params
    let send_params = {};
    send_params = Object.assign(send_params, params);
    // panel
    Activity.onStart('#left');
    // multiout
    Promise.all([
    new AsyncTask().execute('POST', `${config.src}/analysis/tables`, {}, config._options_, config._headers_),
    new AsyncTask().doImport(new URL(`../tables/tpl/List.template${App.getLocale()}.js`, import.meta.url).href)]
    ).
    then((data) => {
      const listView = new data[1].ListView();
      const resp = data[0];
      // reject
      if (resp.result == 'false') {
        throw resp;
      }
      document.querySelector('#left_docs_contents').innerHTML = listView.render(resp);
      return resp;
    }).
    then((resp) => {
      // scroll top
      document.querySelector('#left-col-3').scrollTo({ top: 0, behavior: 'smooth' });
    }).
    catch((err) => {
      window.observable.notify('exception', err);
    }).
    finally(() => {
      ProgressBars.close();
    });
  }
}
export { ComponentActivity };