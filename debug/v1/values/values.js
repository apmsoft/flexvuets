import Arrays from "../js/values/arrays.js";
import Sysmsg from "../js/values/sysmsg.js";
window.Sysmsg = Sysmsg;
const onReady = () => {
  // 기본 클래스 선언
  new App();
  Log.i(App.browser, App.version, App.os, App.lang);
  Log.d('Arrays.general', Arrays.general);
  Log.d('Sysmsg.i_delete', Sysmsg.i_delete);
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);