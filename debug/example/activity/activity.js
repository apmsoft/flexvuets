import UrlManager from "../../flexvue/core/urlmanager.class.js";
{
  const onReady = () => {
    var _a, _b, _c, _d, _e, _f;
    new App();
    Log.i(App.browser, App.version, App.os, App.lang);
    new Activity().onBackPressed(state => {
      Log.d('onBackPressed : ------>', state);
    });
    // #docs/start : hash 경로가 바뀔때 마다 호출 됩니다
    const urlManager = new UrlManager(document.location.toString());
    // btn go right
    (_a = document.querySelector('#go_right')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
      Activity.onStart('#right');
      history.pushState('#right', 'right', '#right/');
    });
    // btn go right side
    (_b = document.querySelector('#go_rightside')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
      Activity.onStart('#rightside');
      history.pushState('#rightside', 'rightside', '#rightside/');
    });
    // btn go right third
    (_c = document.querySelector('#go_rightthird')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
      Activity.onStart('#rightthird');
      history.pushState('#rightthird', 'rightthird', '#rightthird/');
    });
    // btn go bottom
    (_d = document.querySelector('#go_bottom')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
      Activity.onStart('#bottom');
      history.pushState('#bottom', 'bottom', '#bottom/');
    });
    // btn go bottom side
    (_e = document.querySelector('#go_bottomside')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
      Activity.onStart('#bottomside');
      history.pushState('#bottomside', 'bottomside', '#bottomside/');
    });
    // btn go bottom third
    (_f = document.querySelector('#go_bottomthird')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
      Activity.onStart('#bottomthird');
      history.pushState('#bottomthird', 'bottomthird', '#bottomthird/');
    });
  };
  // document ready
  document.addEventListener("DOMContentLoaded", onReady);
}