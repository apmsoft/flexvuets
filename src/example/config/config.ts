// document ready
(new App()).setLanguages([]).setResoures(import.meta.url).run(()=>{
    Log.d(config);

    Log.w('test, dddnamae 키와 값 추가 =======');

    Handler.post(()=>{
        // 새로운 데이터 추가 [propName : string] : any
        config.test = {};
        config.dddnamae = 'T,X,';

        Log.v(JSON.stringify(config,null,2));
    },2000);
});
