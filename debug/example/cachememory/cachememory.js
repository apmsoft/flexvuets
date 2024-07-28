import UrlManager from "../../flexvue/core/UrlManager.class.js";
import FastRouter from "../../flexvue/core/FastRouter.class.js";
import { CacheMemory } from "../../flexvue/core/Caches.class.js";
import AsyncTask from "../../flexvue/core/AsyncTask.class.js";
const onReady = () => {
  Log.i(App.browser, App.version, App.os, App.lang);
  // 캐시 클래스 선언
  window.cacheMemory = new CacheMemory();
  // 캐시 데이터
  const data = { num: 1, title: "a" };
  const dataString = "홍길동";
  const dataArray = ["유관순", "이순신", "홍길동"];
  // // 캐시 데이터 체크 및 저장 및 데이터 가져오기
  // const cachedData = window.cacheMemory._get('/test/object') ?? window.cacheMemory._set('/test/object', data, 60)._get('/test/object');
  // Log.d('cache','/test/object', cachedData);
  // // string
  // const cachedString = window.cacheMemory._get('/test/string') ?? window.cacheMemory._set('/test/string', dataString, 60)._get('/test/string');
  // Log.d('cache string','/test/string', cachedString);
  // // array
  // const cachedArray = window.cacheMemory._get('/test/array') ?? window.cacheMemory._set('/test/array', dataArray, 60)._get('/test/array');
  // Log.d('cache array','/test/array', cachedArray);
  // // 비동기 
  // window.cacheMemory._getAsync('/test/array')
  // .then(data =>{
  //     Log.d('_getAsync', data);
  // });
  // Promise.all 예제
  Promise.all([
  window.cacheMemory._getAsync('/test/array').then((cacheData) => cacheData !== null ? cacheData : new AsyncTask().doImport(new URL('../js/values/arrays.js', import.meta.url).href)),
  new AsyncTask().doImport(new URL('../js/values/strings.js', import.meta.url).href)]
  ).
  then((data) => {
    Log.v('Promise.all', data);
    // 캐시 상태 체크 및 캐시 설정
    if (window.cacheMemory._get('/test/array') === null) {
      window.cacheMemory._set('/test/array', data[0], 60);
    }
  }).
  catch((e) => {
    Log.e(e);
  });
  // 캐시 삭제
  // window.cacheMemory._delete('mc');
  // 캐시 전체 비우기
  // window.cacheMemory._clear();
  const urlManager = new UrlManager(document.location.toString());
  /**
   * router /===========================================>
   */
  try {
    // FastRouter
    const fastRouter = new FastRouter(urlManager.hash);
    fastRouter.addRoute('/', null, null);
    fastRouter.addRoute('/test/object', 'doList', new URL('../cachememory/page1.class.js', import.meta.url).href);
    fastRouter.addRoute('/test/array', 'doList', new URL('../cachememory/page2.class.js', import.meta.url).href);
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
new App().setLanguages([]).setResoures({
  sysmsg: new URL(`../js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
  arrays: new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
  strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(onReady);