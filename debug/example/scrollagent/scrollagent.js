import ScrollAgent from "../../flexvue/core/scrollagent.class.js";
const onReady = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  // 채널 등록
  new ScrollObserver(['notice', 'category', 'qna']);
  // vertical
  const noticeScrollAgent = new ScrollAgent('notice');
  const noticePreTopPos = noticeScrollAgent.getPos();
  noticeScrollAgent.addScrollListener('vertical', '#notice');
  noticeScrollAgent.scrollTo({
    top: noticePreTopPos
  });
  // scroll to bottom
  (_a = document.querySelector('#btn_vbottom')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
    noticeScrollAgent.scrollToBottom(1);
  });
  // scroll to top
  (_b = document.querySelector('#btn_vtop')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function (e) {
    noticeScrollAgent.scrollTo({
      top: 0
    }, 1);
  });
  // scroll get current position
  (_c = document.querySelector('#btn_vgetpos')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function (e) {
    alert(noticeScrollAgent.getPos());
  });
  // 스크롤 비활성화
  (_d = document.querySelector('#btn_vdiss')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function (e) {
    noticeScrollAgent.disableScroll();
    document.querySelector('#notice').style.backgroundColor = "#ddd";
  });
  // 스크롤 활성화
  (_e = document.querySelector('#btn_venab')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function (e) {
    noticeScrollAgent.enableScroll();
    document.querySelector('#notice').style.backgroundColor = "#ffffff";
  });
  // horizontal -
  const horizontalScrollAgent = new ScrollAgent('category');
  const horizontalPreLeftPos = horizontalScrollAgent.getPos();
  horizontalScrollAgent.addScrollListener('horizontal', '#horizontal-category');
  horizontalScrollAgent.scrollToLeft({
    left: horizontalPreLeftPos
  });
  // horizontal scroll to left
  (_f = document.querySelector('#btn_hsetpos')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
    horizontalScrollAgent.scrollToLeft({
      left: 300
    }, 1);
  });
  (_g = document.querySelector('#btn_hsetpos3')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () {
    horizontalScrollAgent.scrollToLeft({
      left: 600
    }, 1);
  });
  (_h = document.querySelector('#btn_hgetpos')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', function () {
    alert(horizontalScrollAgent.getPos());
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);