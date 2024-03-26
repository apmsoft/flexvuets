import UrlManager from "../../flexvue/core/urlmanager.class.js";
const onReady = () => {
  new App();
  Log.i(App.browser, App.version, App.os, App.lang);
  new Activity().onBackPressed((state) => {
    Log.d('onBackPressed : ------>', state);
  });
  // url manager
  const urlManager = new UrlManager(document.location.toString());
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);