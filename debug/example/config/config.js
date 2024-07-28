// document ready
new App().setLanguages([]).setResoures({
  sysmsg: new URL(`../js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
  arrays: new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
  strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(() => {
  Log.d(config);
  Log.w('test, dddnamae 키와 값 추가 =======');
  Handler.post(() => {
    // 새로운 데이터 추가 [propName : string] : any
    config.test = {};
    config.dddnamae = 'T,X,';
    Log.v(JSON.stringify(config, null, 2));
  }, 2000);
});
export {};