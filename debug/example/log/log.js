// document ready
new App().setLanguages([]).setResoures({
  sysmsg: new URL(`../js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
  arrays: new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
  strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(() => {
  const fn = (debug) => {
    console.log(debug);
    config.debug = debug;
    Log.i(App.browser);
    Log.d(App.version);
    Log.v(App.os);
    Log.w(App.lang);
    Log.e(App.browser, App.version, App.os, App.lang);
  };
  fn(['i', 'd', 'v', 'w', 'e']);
  Handler.post(() => {
    fn(['i']);
  }, 1000);
  Handler.post(() => {
    fn(['d']);
  }, 2000);
  Handler.post(() => {
    fn(['v']);
  }, 3000);
  Handler.post(() => {
    fn(['w']);
  }, 4000);
  Handler.post(() => {
    fn(['e']);
  }, 5000);
});
export {};