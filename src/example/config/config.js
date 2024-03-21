{
    var onReady_1 = function () {
        Log.d(config);
        Log.w('test, dddnamae 키와 값 추가 =======');
        Handler.post(function () {
            // 새로운 데이터 추가 [propName : string] : any
            config.test = {};
            config.dddnamae = 'T,X,';
            Log.v(JSON.stringify(config, null, 2));
        }, 2000);
    };
    // document ready
    document.addEventListener("DOMContentLoaded", onReady_1);
}
