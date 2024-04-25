import LazyLoad from "../../../plugins/vanilla-lazyload/dist/esm/lazyload.js";
const onReady = () => {
  const lazyContent = new LazyLoad({
    container: document.querySelector("#left-fvue--layout--main"),
    unobserve_entered: true,
    use_native: false,
    threshold: 0.95 // 스크롤이 요소의 50% 근처에 도달했을 때 로딩 시작
  });
  lazyContent.update();
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);