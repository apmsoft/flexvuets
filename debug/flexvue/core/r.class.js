var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}
    function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}
    function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
import AsyncTask from "./asynctask.class.js";
class R {
  static __init() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const locale = App.getLocale();
        for (const [key, path] of Object.entries(config.resources)) {
          const absolutePath = new URL(`${path}${locale}.js`, import.meta.url).href;
          const resourceData = yield new AsyncTask().doImport(absolutePath);
          R[key] = resourceData;
        }
      }
      catch (err) {
        throw new Error("Error loading resource: " + err);
      }
    });
  }
}
// R 클래스를 import 할 때 자동으로 초기화 코드 실행
R.__init().catch((err) => {
  console.error(err);
});
export default R;