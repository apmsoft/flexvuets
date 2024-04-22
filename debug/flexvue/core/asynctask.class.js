var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}
    function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}
    function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
export default class AsyncTask {
  /**
   *
   * @param method 전송방식
   * @param url 서버 접속 경로
   * @param params 전송할 데이터
   * @param options 옵션
   */
  execute(method_1, url_1) {
    return __awaiter(this, arguments, void 0, function* (method, url, params = {}, ...options) {
      const _method = method.toUpperCase();
      let redirect_url = url;
      let headers = _method == 'GET' ? { 'Content-Type': 'text/plain' } : { 'Content-Type': 'application/json' };
      let _options = method == 'GET' ? params !== null ? [params] : options : options;
      let otherOptions = {};
      if (_options !== null) {
        _options.forEach((opt) => {
          if (opt !== null) {
            Object.entries(opt).forEach(([key, value]) => {
              let _startString = key.substring(0, 1);
              if (/^[A-Z]+$/.test(_startString)) {
                headers[key] = value;
              } else
              {
                otherOptions[key] = value;
              }
            });
          }
        });
      }
      let requestOptions = {
        method: _method,
        cache: 'no-cache',
        mode: 'cors',
        verify: false,
        headers: new Headers(headers)
      };
      if (_method != 'GET') {
        requestOptions.body = JSON.stringify(params);
      }
      Object.entries(otherOptions).forEach(([key, value]) => {
        requestOptions[key] = value;
      });
      const response = yield fetch(redirect_url, requestOptions);
      const contentType = response.headers.get('content-type');
      if (!response.ok) {
        throw new Error(String(response.status));
      }
      let result;
      if (contentType && contentType.includes('application/json')) {
        result = yield response.json();
      } else
      if (contentType && contentType.includes('text')) {
        result = yield response.text();
      } else
      if (contentType && contentType.includes('application')) {
        result = yield response.blob();
      }
      return result;
    });
  }
  doImport(url) {
    return __awaiter(this, void 0, void 0, function* () {
      return import(url);
    });
  }
  doImportCss(url) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!document.querySelector(`[href="${url}"]`)) {
        document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${url}" />`);
      }
    });
  }
}