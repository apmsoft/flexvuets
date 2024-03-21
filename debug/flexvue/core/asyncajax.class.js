var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}
    function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}
    function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
export default class AsyncAjax {
  /**
   *
   * @param method 전송방식
   * @param url 서버 접속 경로
   * @param params 전송할 데이터
   * @param _options 옵션
   * @param _headers 전송할 헤더값
   * @returns
   */
  execute(method, url, params = {}, _options = {}, _headers = null) {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((resolve, reject) => {
        // method
        const _method = method.toUpperCase();
        // headers
        let headers = _headers || {
          beforeSend: function (xhr) {
            xhr.setRequestHeader('Content-Type', 'application/json');
          }
        };
        // options
        let options = {
          method: _method,
          url: url,
          data: params,
          cache: false,
          crossDomain: true,
          dataType: "json"
        };
        Object.assign(options, _options, headers);
        $.ajax(options).
        done(function (data) {
          resolve(data);
        }).
        fail(function (jqxhr, textStatus, error) {
          var err = textStatus + ", " + error;
          throw new Error(err);
        });
      });
    });
  }
  doImport(url) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield import(url).then((Module) => {
        return Module;
      });
    });
  }
  doImportCss(url) {
    return __awaiter(this, void 0, void 0, function* () {
      if (document.querySelector(`[href="${url}"]`) === null) {
        Log.d("run link import css");
        yield document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${url}" />`);
      }
    });
  }
}