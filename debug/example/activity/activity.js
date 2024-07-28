import UrlManager from "../../flexvue/core/UrlManager.class.js";
import { ElementButton } from "../../flexvue/components/ElementsManager.class.js";
// 이전 화면 패널 위치
let pre_viewpage = null;
const onReady = () => {
  Log.i(App.browser, App.version, App.os, App.lang);
  Activity.onBackPressed((state) => {
    Log.d('onBackPressed : ------>', state);
    pre_viewpage = state.id ? state : null;
    if (pre_viewpage === null || pre_viewpage === void 0 ? void 0 : pre_viewpage.id.includes('fvue--activity')) {
      Activity.onClose(pre_viewpage === null || pre_viewpage === void 0 ? void 0 : pre_viewpage.id);
    }
  });
  // #docs/start : hash 경로가 바뀔때 마다 호출 됩니다
  const urlManager = new UrlManager(document.location.toString());
  new ElementButton('#go_right').addEventListener('click', function () {
    history.pushState('#slideR2L', 'right', `?a=b`);
    const activityId = Activity.onStart('edit', 'fvueSlideFromRight top-[10%]', 'fvueSlideToLeft');
    Activity.setStateHistory(activityId);
  });
  new ElementButton('#go_bottom').addEventListener('click', function () {
    history.pushState('#slideB2T', 'bottom', `?b=c`);
    const activityId = Activity.onStart('edit2', 'fvueSlideFromBottom top-[140%]', 'fvueSlideToTop');
    Activity.setStateHistory(activityId);
  });
};
// document ready
new App().setLanguages([]).setResoures({
  // sysmsg : new URL(`./js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
  arrays: new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
  strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(onReady);