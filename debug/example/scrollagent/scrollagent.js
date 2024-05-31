import ScrollAgent from "../../flexvue/core/ScrollAgent.class.js";
import { ElementButton, ElementDiv } from "../../flexvue/components/ElementsManager.class.js";
const onReady = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  // 채널 등록
  new ScrollObserver(['notice', 'category', 'qna']);
  // vertical
  const noticeScrollAgent = new ScrollAgent('notice');
  const noticePreTopPos = noticeScrollAgent.getPos();
  noticeScrollAgent.addScrollListener('vertical', '#notice', function (pos = 0) {
    Log.d('current', pos);
  });
  noticeScrollAgent.scrollTo({ top: noticePreTopPos });
  // scroll to bottom
  (_a = new ElementButton('#btn_vbottom')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
    noticeScrollAgent.scrollToBottom(1);
  });
  // scroll to top
  (_b = new ElementButton('#btn_vtop')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function (e) {
    noticeScrollAgent.scrollTo({ top: 0 }, 1);
  });
  // scroll get current position
  (_c = new ElementButton('#btn_vgetpos')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function (e) {
    alert(noticeScrollAgent.getPos());
  });
  // 스크롤 비활성화
  (_d = new ElementButton('#btn_vdiss')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function (e) {
    noticeScrollAgent.disableScroll();
    new ElementDiv('#notice').style('backgroundColor', "#ddd");
  });
  // 스크롤 활성화
  (_e = new ElementButton('#btn_venab')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function (e) {
    noticeScrollAgent.enableScroll();
    new ElementDiv('#notice').style('backgroundColor', "#ffffff");
  });
  // horizontal -
  const horizontalScrollAgent = new ScrollAgent('category');
  const horizontalPreLeftPos = horizontalScrollAgent.getPos();
  horizontalScrollAgent.addScrollListener('horizontal', '#horizontal-category');
  horizontalScrollAgent.scrollToLeft({ left: horizontalPreLeftPos });
  // horizontal scroll to left
  (_f = new ElementButton('#btn_hsetpos')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
    horizontalScrollAgent.scrollToLeft({ left: 300 }, 1);
  });
  (_g = new ElementButton('#btn_hsetpos3')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () {
    horizontalScrollAgent.scrollToLeft({ left: 600 }, 1);
  });
  (_h = new ElementButton('#btn_hgetpos')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', function () {
    alert(horizontalScrollAgent.getPos());
  });
};
//setLanguages = ['en','ja','ko'];
new App().setLanguages([]).setResoures(import.meta.url).run(onReady);