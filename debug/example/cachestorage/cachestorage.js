import { CacheLocalStorage } from "../../flexvue/core/caches.class.js";
const onReady = () => {
  var _a, _b, _c;
  new App();
  Log.i(App.browser, App.version, App.os, App.lang);
  // 캐시 클래스 글로벌 선언
  window.cacheStorage = new CacheLocalStorage();
  // 캐시 데이터
  const data = { num: 1, title: "a" };
  const dataString = "홍길동";
  const dataArray = ["유관순", "이순신", "홍길동"];
  // 캐시 데이터 체크 및 저장 및 데이터 가져오기
  const cachedData = (_a = window.cacheStorage._get('mc_object')) !== null && _a !== void 0 ? _a : (() => {
    window.cacheStorage._set('mc_object', data, 60);
    return window.cacheStorage._get('mc_object');
  })();
  Log.d('cache', 'mc_object', cachedData);
  // string
  const cachedString = (_b = window.cacheStorage._get('mc_string')) !== null && _b !== void 0 ? _b : (() => {
    window.cacheStorage._set('mc_string', dataString, 10);
    return window.cacheStorage._get('mc_string');
  })();
  Log.d('cache string', 'mc_string', cachedString);
  // array
  const cachedArray = (_c = window.cacheStorage._get('mc_array')) !== null && _c !== void 0 ? _c : (() => {
    window.cacheStorage._set('mc_array', dataArray, 10);
    return window.cacheStorage._get('mc_array');
  })();
  Log.d('cache array', 'mc_array', cachedArray);
  // 캐시 삭제
  // window.cacheStorage._delete('mc');
  // 캐시 전체 비우기
  // window.cacheStorage._clear();
  // 로컬 스토리지 사용량 체크
  const cachedUsage = window.cacheStorage.getLocalStorageUsage();
  Log.d('사용량', cachedUsage);
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);