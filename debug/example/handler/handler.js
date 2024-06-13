const onReady = () => {
  // 2초 출력
  Handler.post(function () {
    Log.d('2초');
  }, 2000);
  // 1초 후 출력
  Handler.post(function () {
    Log.d('1초');
  }, 1000);
  // 바로 출력
  Handler.post(function () {
    Log.d('0초');
  }, 0);
};
// document ready
new App().setLanguages([]).setResoures({
  sysmsg: new URL(`./js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
  arrays: new URL(`./js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
  strings: new URL(`./js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(onReady);
export {};