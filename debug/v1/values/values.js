import Arrays from "../js/values/arrays.js";
import Sysmsg from "../js/values/sysmsg.js";
import Strings from "../js/values/strings.js";
import Numbers from "../js/values/numbers.js";
window.Sysmsg = Sysmsg;
window.Arrays = Arrays;
window.Strings = Strings;
window.Numbers = Numbers;
const onReady = () => {
  // 기본 클래스 선언
  new App();
  Log.i(App.browser, App.version, App.os, App.lang);
  Log.d('Arrays', Arrays.general);
  Log.d('Sysmsg', Sysmsg.i_delete);
  Log.d('Strings', Strings.app_name);
  Log.d('Numbers', Numbers.app_version);
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);