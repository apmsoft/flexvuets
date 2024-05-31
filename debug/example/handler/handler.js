const onReady = () => {
  // 2초 출력
  Handler.post(function () {
    Log.d('2초');
  }, 2000);
  // 1초 후 출력
  Handler.post(function () {
    Log.d('1초');
  }, 1000);
  // 바로 출력
  Handler.post(function () {
    Log.d('0초');
  }, 0);
};
// document ready
new App().setLanguages([]).setResoures(import.meta.url).run(onReady);
export {};