import R from "../../flexvue/core/resource.class.js";
const onReady = () => {
  // R 클래스를 import하고, sysmsg 리소스에 접근하여 사용할 수 있습니다.
  // Log.d(window.R.sysmsg); // sysmsg 리소스 데이터 출력
  Log.d(window.R.arrays); // arrays 리소스 데이터 출력
  // Log.d(window.R.strings); // strings 리소스 데이터 출력
  // Log.d(window.R.numbers); // numbers 리소스 데이터 출력
};
document.addEventListener("DOMContentLoaded", () => {
  // R 클래스 초기화 후에 DOMContentLoaded 이벤트 발생
  config.surport_langs = ['en'];
  Log.d(`../js/values/arrays${App.getLocale()}.js`);
  window.R = R;
  window.R.__init({
    // sysmsg : new URL(`../js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
    arrays: new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href
    // strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href,
    // numbers: new URL(`../js/values/numbers${App.getLocale()}.js`, import.meta.url).href
  }).then(() => {
    onReady();
  }).catch((err) => {
    Log.e("Error initializing R:", err);
  });
});