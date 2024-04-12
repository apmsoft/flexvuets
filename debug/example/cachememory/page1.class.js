class ComponentActivity {
  constructor() {
    this.TAG = 'page1';
  }
  doList(params = {}) {
    var _a;
    Log.v(this.TAG, 'doList', params);
    // 캐시메모리
    const cachedData = (_a = window.cacheMemory._get('/test/object')) !== null && _a !== void 0 ? _a : '캐시데이터가 없거나 만료됨';
    Log.e('cache', '/test/object', cachedData);
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