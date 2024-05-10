import AsyncTask from "../../flexvue/core/asynctask.class.js";
import ScrollAgent from "../../flexvue/core/scrollagent.class.js";
class ComponentActivity {
  constructor() {
    this.TAG = 'Menu3Activity';
  }
  doList(params = {}) {
    ProgressBars.show();
    const self = this;
    // send params
    let send_params = {};
    send_params = Object.assign(send_params, params);
    // panel
    Activity.onStart('#left');
    // multiout
    Promise.all([
    new AsyncTask().doImport(new URL(`../menu3/tpl/list${App.getLocale()}.js`, import.meta.url).href)]
    ).then((data) => {
      const template = new data[0].Template();
      document.querySelector('#left-content-container').innerHTML = template.render({});
      return 'ok';
    }).
    then((resp) => {
      // 스크롤포지션 vertical
      const scrollAgent = new ScrollAgent('menu3');
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