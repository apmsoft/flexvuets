var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { promises as fs } from 'fs';
import { join } from 'path';
export default class Template {
    // template 파일 찾기
    fread(filename, _options = {}, _headers = null) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield fs.readFile(join(__dirname, filename), 'utf8');
        });
    }
    /**
     * @param {json data} data
     * @returns : rendering html
     */
    render(tpl, data) {
        const func = new Function(...Object.keys(data), "return `" + tpl + "`;");
        return func(...Object.values(data));
    }
}
