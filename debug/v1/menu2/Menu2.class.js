import AsyncTask from "../../flexvue/core/AsyncTask.class.js";
import ScrollAgent from "../../flexvue/core/ScrollAgent.class.js";
class ComponentActivity {
  constructor() {
    this.TAG = 'Menu2Activity';
  }
  doList(params = {}) {
    ProgressBars.show();
    const self = this;
    // send params
    let send_params = {};
    send_params = Object.assign(send_params, params);
    // panel
    // Activity.onStart('#left');
    // multiout
    Promise.all([
    new AsyncTask().doImport(new URL(`../menu2/tpl/List.template${App.getLocale()}.js`, import.meta.url).href)]
    ).then((data) => {
      const listView = new data[0].ListView();
      document.querySelector('#left-content-container').innerHTML = listView.render({});
      return 'ok';
    }).
    then((resp) => {
      // 스크롤포지션 vertical
      const scrollAgent = new ScrollAgent('menu2');
      const preTopPos = scrollAgent.getPos();
      scrollAgent.addScrollListener('vertical', '#left-layout--main');
      scrollAgent.scrollTo({ top: preTopPos });
    }).
    catch((e) => {
      window.observable.notify('exception', e);
    }).
    finally(() => {
      ProgressBars.close();
    });
  }
}
export { ComponentActivity };