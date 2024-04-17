import AsyncTask from "../../flexvue/core/asynctask.class.js";
class ComponentActivity {
  constructor() {
    this.TAG = 'page1';
  }
  doList(params = {}) {
    Log.v(this.TAG, 'doList', params);
    // promise.all 사용
    Promise.all([
    window.cacheMemory._getAsync('/test/object').then((cacheData) => cacheData !== null ? cacheData : new AsyncTask().doImport(new URL('../js/values/arrays.js', import.meta.url).href)),
    new AsyncTask().doImport(new URL('../js/values/strings.js', import.meta.url).href)]
    ).
    then((data) => {
      Log.v('Promise.all', data);
    }).
    catch((e) => {
      Log.e(e);
    });
  }
  doPost(params = {}) {
    Log.v(this.TAG, 'doPost', params);
  }
  doEdit(params = {}) {
    Log.v(this.TAG, 'doEdit', params);
  }
}
;
export { ComponentActivity };