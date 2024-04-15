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
  static __init(resources) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        for (const [key, path] of Object.entries(resources)) {
          const resourceData = yield new AsyncTask().doImport(path);
          R[key] = resourceData.default;
        }
      }
      catch (err) {
        throw new Error("Error loading resource: " + err);
      }
    });
  }
}
export default R;