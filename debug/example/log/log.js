"use strict";

{
  const onReady = () => {
    new App();
    const fn = debug => {
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
  };
  // document ready
  document.addEventListener("DOMContentLoaded", onReady);
}