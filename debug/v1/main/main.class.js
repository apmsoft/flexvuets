import AsyncTask from "../../flexvue/core/asynctask.class.js";
import Swiper from "../../plugins/swiper/swiper-bundle.min.mjs";
class ComponentActivity {
  constructor() {
    this.TAG = 'MainActivity';
  }
  run(params = {}) {
    ProgressBars.show();
    const self = this;
    // send params
    let send_params = {};
    send_params = Object.assign(send_params, params);
    // panel
    Activity.onStart('#left');
    // multiout
    Promise.all([
    new AsyncTask().doImport(new URL(`../main/tpl/main${App.getLocale()}.js`, import.meta.url).href)]
    ).then((data) => {
      const template = new data[0].Template();
      document.querySelector('#left-content-container').innerHTML = template.render({});
      return 'ok';
    }).
    then((ok) => {
      // scroll top
      document.querySelector('#left-layout--main').scrollTo({ top: 0, behavior: 'smooth' });
      const swiper = new Swiper('.mySwiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      });
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