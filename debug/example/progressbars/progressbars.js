const onReady = () => {
  var _a, _b;
  new ProgressBars();
  (_a = document.querySelector('#btn_show')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    ProgressBars.show();
  });
  (_b = document.querySelector('#btn_close')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    ProgressBars.close();
  });
};
//setLanguages = ['en','ja','ko'];
new App().setLanguages([]).setResoures({
  sysmsg: new URL(`../js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
  arrays: new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
  strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(onReady);
export {};