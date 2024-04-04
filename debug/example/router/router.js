import UrlManager from "../../flexvue/core/urlmanager.class.js";
import FastRouter from "../../flexvue/core/fastrouter.class.js";
const onReady = () => {
  // 기본 클래스 선언
  new App();
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
  const urlManager = new UrlManager(document.location.toString());
  /**
   * router /===========================================>
   */
  try {
    // FastRouter
    const fastRouter = new FastRouter(urlManager.hash);
    fastRouter.addRoute('/', null, null);
    fastRouter.addRoute('/bbs/notice/list', 'doList', new URL('../js/notice.class.js', import.meta.url).href);
    fastRouter.addRoute('/bbs/notice/edit', 'doEdit', new URL('../js/notice.class.js', import.meta.url).href);
    fastRouter.addRoute('/bbs/faq/list', 'doList', new URL('../js/faq.class.js', import.meta.url).href);
    fastRouter.addRoute('/bbs/faq/edit', 'doEdit', new URL('../js/faq.class.js', import.meta.url).href);
    fastRouter.listen((pathinfo) => {
      Log.d('pathinfo', pathinfo);
      if (pathinfo.path) {
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