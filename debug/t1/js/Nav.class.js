import AsyncTask from "../../flexvue/core/AsyncTask.class.js";
import UrlManager from "../../flexvue/core/UrlManager.class.js";
export default class Navigation {
  constructor() {
    this.preNavigation = null;
  }
  onCreateView() {
    // Promise all
    new AsyncTask().doImport(new URL(`../nav/tpl/Nav1.template${App.getLocale()}.js`, import.meta.url).href).
    then((data) => {
      const nav1View = new data.Nav1View();
      // set title
      document.querySelector('#left_title').innerText = R.strings.app_name;
      // 네비게이션
      document.querySelector('#left-col-1').innerHTML = nav1View.render(R.arrays);
      // resolve
      return 'ok';
    }).
    then((ok) => {
      // 메뉴 활성화
      const urlManager = new UrlManager(window.location.href);
      if (typeof urlManager.hash !== 'undefined' && urlManager.hash != '') {
        const path_pattern = /[\/](\w+)/gi;
        let path = urlManager.hash.match(path_pattern);
        if (path != null) {
          this.selectNav1(path[0]);
        }
      }
    }).
    catch((e) => {
      Log.e(e);
    });
  }
  // 1차 메뉴 활설화
  selectNav1(k) {
    let cur_parent = document.querySelectorAll('.navigation-icon');
    cur_parent.forEach((el) => {
      let cur_mid = el.dataset.id;
      const path_pattern = /[\/](\w+)/gi;
      let path = cur_mid.match(path_pattern);
      if (path != null && this.preNavigation != null) {
        if (this.preNavigation == path[0] || this.preNavigation == path[0] + '/') {
          el.classList.remove('btn-active');
        }
      }
      if (path != null && (path[0] == k || path[0] + '/' == k)) {
        el.classList.add('btn-active');
      }
    });
    this.preNavigation = k;
  }
  // 2차 메뉴 (모듈별 메뉴 출력)
  selectNav2(menu = {}) {
    // config
    new AsyncTask().doImport(new URL(`../nav/tpl/Nav2.template${App.getLocale()}.js`, import.meta.url).href).
    then((data) => {
      const nav2View = new data.Nav2View();
      // 네비게이션 서브
      const outhtml_el = document.querySelector('#left-col-2');
      outhtml_el.innerHTML = nav2View.render(menu);
      // resolve
      return menu;
    }).
    then((menu) => {
      // 메뉴 접고/펼침
      if (document.querySelector("#btn-close-lm")) {
        // 메뉴 기본 설정에 따른 자동 열기/닫기
        if (window.cacheStorage._get('mco') !== null) {
          if (window.cacheStorage._get('mco') == 'open') {
            document.querySelector("#lay-menu-title").style.display = '';
            document.querySelector("#btn-open-lm").classList.add('hidden');
            document.querySelector("#btn-close-lm").classList.remove('hidden');
          } else
          {
            document.querySelector("#lay-menu-title").style.display = 'none';
            document.querySelector("#btn-close-lm").classList.add('hidden');
            document.querySelector("#btn-open-lm").classList.remove('hidden');
          }
        }
        // 닫기
        document.querySelector("#btn-close-lm").addEventListener("click", () => {
          document.querySelector("#lay-menu-title").style.display = 'none';
          document.querySelector("#btn-close-lm").classList.add('hidden');
          document.querySelector("#btn-open-lm").classList.remove('hidden');
          // set storage
          window.cacheStorage._set('mco', 'close', 0);
        }, false);
        // 열기
        document.querySelector("#btn-open-lm").addEventListener("click", () => {
          document.querySelector("#lay-menu-title").style.display = '';
          document.querySelector("#btn-open-lm").classList.add('hidden');
          document.querySelector("#btn-close-lm").classList.remove('hidden');
          // set storage
          window.cacheStorage._set('mco', 'open', 0);
        }, false);
      }
      if (document.querySelector("#btn-close-window")) {
        // 전체 메뉴 열기/닫기 자동 설정
        if (window.cacheStorage._get('wco') !== null) {
          if (window.cacheStorage._get('wco') == 'close') {
            document.querySelector("#left-col-1").style.display = 'none';
            document.querySelector("#left-col-2").style.display = 'none';
            document.querySelector("#btn-close-window").classList.add('hidden');
            document.querySelector("#btn-open-window").classList.remove('hidden');
          } else
          {
            document.querySelector("#left-col-1").style.display = '';
            document.querySelector("#left-col-2").style.display = '';
            document.querySelector("#btn-open-window").classList.add('hidden');
            document.querySelector("#btn-close-window").classList.remove('hidden');
          }
        }
        // 닫기
        document.querySelector("#btn-close-window").addEventListener("click", () => {
          document.querySelector("#left-col-1").style.display = 'none';
          document.querySelector("#left-col-2").style.display = 'none';
          document.querySelector("#btn-close-window").classList.add('hidden');
          document.querySelector("#btn-open-window").classList.remove('hidden');
          // set storage
          window.cacheStorage._set('wco', 'close', 0);
        }, false);
        // 열기
        document.querySelector("#btn-open-window").addEventListener("click", () => {
          document.querySelector("#left-col-1").style.display = '';
          document.querySelector("#left-col-2").style.display = '';
          document.querySelector("#btn-open-window").classList.add('hidden');
          document.querySelector("#btn-close-window").classList.remove('hidden');
          // set storage
          window.cacheStorage._set('wco', 'open', 0);
        }, false);
      }
    }).
    catch((e) => {
      Log.e(e);
    });
  }
}