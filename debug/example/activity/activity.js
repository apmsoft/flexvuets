import UrlManager from "../../flexvue/core/UrlManager.class.js";
import { ElementButton } from "../../flexvue/components/ElementsManager.class.js";
const onReady = () => {
  Log.i(App.browser, App.version, App.os, App.lang);
  Activity.onBackPressed((state) => {
    Log.d('onBackPressed : ------>', state);
  });
  // #docs/start : hash 경로가 바뀔때 마다 호출 됩니다
  const urlManager = new UrlManager(document.location.toString());
  new ElementButton('#go_right').addEventListener('click', function () {
    history.pushState('#slideR2L', 'right', `?a=b`);
    const activityId = Activity.onStart('fvueSlideFromRight top-[200px]', 'fvueSlideToLeft');
    // url 히스토리 남기기
    Activity.setStateHistory(activityId);
  });
  new ElementButton('#go_bottom').addEventListener('click', function () {
    history.pushState('#slideB2T', 'bottom', `?b=c`);
    const activityId = Activity.onStart('fvueSlideFromBottom top-[140%]', 'fvueSlideToTop');
    // url 히스토리 남기기
    Activity.setStateHistory(activityId);
  });
};
// document ready
new App().setLanguages([]).setResoures({
  // sysmsg : new URL(`./js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
  arrays: new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
  strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(onReady);