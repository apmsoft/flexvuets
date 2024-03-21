export default class UrlManager extends URL {
  constructor(url) {
    super(url);
    this.version = 1;
    this.current_id = '';
    this.url_params = this.convertURL2JSON() || {};
  }
  doEmpty() {
    this.url_params = {};
  }
  removeUrlParams(...argv) {
    const self = this;
    let result = Object.assign({}, self.url_params);
    if (Array.isArray(argv)) {
      argv.forEach(function (k) {
        if (result.hasOwnProperty(k)) {
          delete result[k];
        }
      });
    }
    return result || {};
  }
  getUrlParams(...argv) {
    const self = this;
    let result = {};
    if (Array.isArray(argv)) {
      argv.forEach((k) => {
        if (self.url_params.hasOwnProperty(k)) {
          result[k] = self.url_params[k];
        }
      });
    }
    return result;
  }
  convertURL2JSON() {
    this.doEmpty();
    this.url_params = Object.fromEntries(new URLSearchParams(super.search));
    return this.url_params;
  }
  makeJSON2URL(params) {
    this.mergeURLParams(params);
    let url_param = Object.entries(this.url_params).map(([key, val]) => `${key}=${encodeURIComponent(val)}`).join("&");
    return url_param;
  }
  mergeURLParams(params) {
    this.url_params = Object.assign(this.url_params, params);
  }
  // Activity class 레이아웃 패널 확인 및 현재 주소 등록
  pushState(id, title, url) {
    if (Activity.push_state != '' && Activity.push_state !== null) {
      let cur_state = Activity.push_state;
      Activity.history_state[cur_state] = id;
    }
    window.history.pushState(id, title, url);
  }
}
//# sourceMappingURL=urlmanager.class.js.map