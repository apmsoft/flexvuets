var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}
    function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}
    function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
// class
export default class Template {
  constructor() {
  }
  render(message) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield `
        <div class="fvue--layout--container rounded-lg bg-white dark:bg-transport w-full !max-w-screen-sm !mx-auto !h-3/6 !max-h-screen-lg !min-h-2/3vh" >
        <div class="fvue--layout--header">
            <div class="fvue--layout--header--row py-3 px-3">
                <div class="fvue--layout--icon cursor-pointer text-gray-400" onclick="history.go(-1);return false;">
                    <i class="fas fa-arrow-left fa-2x"></i>
                </div>
                <div id="bottomthird_title" class="fvue--layout--title pl-3 text-2xl">
                    우편번호 검색
                </div>
                <div class="fvue--layout--spacer"></div>
                <div class="fvue--layout--navigation"></div>
              </div>
        </div>
        <div class="fvue--layout--main">
            <div class="!xl:container !xl:mx-auto" id="bottomthird_daumpostmap">
    
            </div>
        </div>
    </div>
        `;
    });
  }
}