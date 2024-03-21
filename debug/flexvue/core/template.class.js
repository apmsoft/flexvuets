var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}
    function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}
    function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
export default class Template {
  // template 파일 찾기
  readFile(filename, _options = {}, _headers = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const defaultHeaders = Object.assign({ 'Content-Type': 'text/plain' }, _headers);
      const options = Object.assign({ cache: 'default', headers: defaultHeaders }, _options);
      const response = yield fetch(filename, options);
      if (response.ok) {
        return yield response.text();
      }
      throw new Error(response.status.toString());
    });
  }
  /**
   *
   * @param <template id="#tpl_test"> : template_id
   * @returns
   */
  include(template_id) {
    return __awaiter(this, void 0, void 0, function* () {
      const elem = document.querySelector(template_id);
      if (elem === null || elem === void 0 ? void 0 : elem.content) {
        const fragment = elem.content;
        const tpl = document.importNode(fragment, true);
        return new XMLSerializer().serializeToString(tpl);
      }
      return 'undefined';
    });
  }
  /**
   *
   * @param {json data} data
   * @returns : rendering html
   */
  render(tpl, data) {
    const func = new Function(...Object.keys(data), "return `" + tpl + "`;");
    return func(...Object.values(data));
  }
}