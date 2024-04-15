import UrlManager from "../../flexvue/core/urlmanager.class.js";
import AsyncTask from "../../flexvue/core/asynctask.class.js";
import FastRouter from "../../flexvue/core/fastrouter.class.js";
import R from "../../flexvue/core/resource.class.js";
import Navigation from "./nav.class.js";
import { MyException } from "./exception.class.js";
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
  const navigation = new Navigation();
  navigation.onCreateView();
  window.observable.subscribe('exception', myException);
  // progress init
  new ProgressBars();
  // scroll Observer
  new ScrollObserver([]);
  // 로그아웃 버튼
  const btn_logout = document.querySelector("#btn-logout");
  if (btn_logout) {
    btn_logout.addEventListener("click", () => {
      new AsyncTask().execute('POST', `${config.src}/manager/login/out`, {}, config._options_, config._headers_).
      then((resp) => {
        // result
        if (resp.result == 'false') {
          throw resp;
        }
        window.location.href = "../login.html";
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
    fastRouter.addRoute('/item/list', null, null);
    fastRouter.addRoute('/itemgroup/list', null, null);
    fastRouter.addRoute('/manager/list', null, null);
    fastRouter.addRoute('/analysis/tables', null, null);
    fastRouter.listen((pathinfo) => {
      var _a;
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
        // navigation 1차 메뉴 셀렉트
        navigation.selectNav1(pathinfo.parse_path[0]);
        // navigation 2차 메뉴 실행 및 셀렉트
        let _path = pathinfo.parse_path[0].replace(/[^a-zA-Z0-9-_]/g, "");
        let navi2 = (_a = window.R.arrays[_path]) !== null && _a !== void 0 ? _a : {};
        navi2['gid'] = pathinfo.parse_path.slice(0, 2).join('');
        navigation.selectNav2(navi2);
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
document.addEventListener("DOMContentLoaded", () => {
  // R 클래스 초기화 후에 DOMContentLoaded 이벤트 발생
  window.R = R;
  window.R.__init({
    sysmsg: new URL(`../js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
    arrays: new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
    strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href,
    numbers: new URL(`../js/values/numbers${App.getLocale()}.js`, import.meta.url).href
  }).then(() => {
    onReady();
  }).catch((err) => {
    console.error("Error initializing R:", err);
  });
});