import UrlManager from "../../flexvue/core/urlmanager.class.js";
import AsyncTask from "../../flexvue/core/asynctask.class.js";
import FastRouter from "../../flexvue/core/fastrouter.class.js";
import Arrays from "./values/arrays.js";
import Sysmsg from "./values/sysmsg.js";
import Strings from "./values/strings.js";
import Numbers from "./values/numbers.js";
import { MyException } from "./exception.class.js";
window.Sysmsg = Sysmsg;
window.Arrays = Arrays;
window.Strings = Strings;
window.Numbers = Numbers;
// 이전 화면 패널 위치
let pre_viewpage = null;
const onReady = () => {
  // config
  config.src = config.host + '/' + config.src9;
  // 앱 정보
  new App();
  Log.i(App.browser, App.version, App.os, App.lang);
  // onBackPressed
  new Activity().onBackPressed((state) => {
    Log.d('onBackPressed : ------>', state);
  });
  // url manager
  const urlManager = new UrlManager(document.location.toString());
  // observe
  window.observable = new Observable(['exception', 'public']);
  // class
  const myException = new MyException();
  // const navigation  = new Navigation();
  window.observable.subscribe('exception', myException);
  // progress init
  new ProgressBars();
  // scroll Observer
  new ScrollObserver([]);
  // 로그아웃 버튼
  const btn_logout = document.querySelector("#btn-logout");
  if (btn_logout) {
    btn_logout.addEventListener("click", () => {
      new AsyncTask().execute('POST', `${config.src}/member/logout`, {}, config._options_, config._headers_).
      then((resp) => {
        // result
        if (resp.result == 'false') {
          throw resp;
        }
        window.location.hash = "#/login";
      }).
      catch((err) => {
        window.observable.notify('exception', err);
      }).
      finally(() => {
        ProgressBars.close();
      });
    }, false);
  }
  // routes
  try {
    const fastRouter = new FastRouter(urlManager.hash);
    fastRouter.addRoute('/', null, null);
    fastRouter.addRoute('/login', null, null);
    fastRouter.listen((pathinfo) => {
      Log.d('pathinfo', pathinfo);
      if (pathinfo.path) {
        // 페이지 refresh 여부
        if (pre_viewpage != null && pre_viewpage != '#left') {
          if (document.querySelector('#left').childNodes.length > 1) {
            Log.d(' <<<< stop >>>>');
            return;
          }
        }
        // 모든 이벤트 종료 시키기
        window.observable.notify('public', { type: 'close' });
        // fastRouter dispatcher
        fastRouter.dispatcher(pathinfo.path, pathinfo.parse_query);
      }
    });
  }
  catch (err) {
    Log.e(err);
  }
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);