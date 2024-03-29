import UrlManager from "../../flexvue/core/urlmanager.class.js";
import FastRouter from "../../flexvue/core/fastrouter.class.js";
import { Notice } from "../observable/notice.class.js";
import { Faq } from "../observable/faq.class.js";
const onReady = () => {
  // 기본 클래스 선언
  new App();
  // observable test /--------------------------
  const _n = new Notice();
  const _f = new Faq();
  window.observable = new Observable(['public', 'sub']);
  // public 채널 구독
  window.observable.subscribe('public', _n);
  window.observable.subscribe('public', _f);
  // 뒤로 가기 시 실행
  new Activity().onBackPressed((state) => {
    Log.clear();
    Log.i('onBackPressed : ', state);
  });
  // 라우터 테스트용 버튼 활성화
  document.querySelectorAll('.btn-router').forEach((el) => {
    el.addEventListener('click', function () {
      const path = el.dataset.path;
      window.location.hash = `#${path}`;
    });
  });
  /**
   * router /===========================================>
   */
  const urlManager = new UrlManager(document.location.toString());
  // routes 경로 설정
  const routes = {
    '/': new URL('../js/dashboard.class.js', import.meta.url).href,
    '/bbs/notice': {
      '/list': new URL('../js/notice.class.js', import.meta.url).href,
      '/edit': new URL('../js/notice.class.js', import.meta.url).href
    },
    '/bbs/faq': {
      '/list': new URL('../js/notice.class.js', import.meta.url).href,
      '/edit': new URL('../js/notice.class.js', import.meta.url).href
    }
  };
  // FastRouter
  const fastRouter = new FastRouter(routes);
  fastRouter.addRoute('/bbs/notice/list', 'doList');
  fastRouter.addRoute('/bbs/notice/edit', 'doEdit');
  fastRouter.addRoute('/bbs/faq/list', 'doList');
  fastRouter.addRoute('/bbs/faq/edit', 'doEdit');
  // Router
  new Router(urlManager.hash).filter(function (pathinfo) {
    if (pathinfo.url == '') {
      return;
    }
    Log.d('pathinfo', pathinfo);
    // FastRouter
    fastRouter.listen(pathinfo.path, pathinfo.parse_query);
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);