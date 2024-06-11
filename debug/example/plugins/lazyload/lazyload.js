import LazyLoad from "vanilla-lazyload";
const onReady = () => {
    const lazyContent = new LazyLoad({
        container: document.querySelector("#left-fvue--layout--main"),
        unobserve_entered: true,
        use_native: false,
        threshold: 0.95 // 스크롤이 요소의 % 근처에 도달했을 때 로딩 시작
    });
    lazyContent.update();
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
