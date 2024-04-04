import UrlManager from '@flexvue/urlmanager';
import AsyncTask from '@flexvue/asynctask';
import FastRouter from '@flexvue/fastrouter';

import Arrays from '@v1/js/values/arrays.js';
import Sysmsg from '@v1/js/values/sysmsg.js';
import Strings from '@v1/js/values/strings.js';
import Numbers from '@v1/js/values/numbers.js';

import {MyException} from '@v1/js/exception.class.js';

window.Sysmsg = Sysmsg;
window.Arrays = Arrays;
window.Strings = Strings;
window.Numbers = Numbers;

// 이전 화면 패널 위치
let pre_viewpage : string | null = null;

const onReady = () : void =>
{
    // config
    config.src = config.host+'/'+config.src9;

    // 앱 정보
    new App();
    Log.i(App.browser, App.version, App.os, App.lang);

    // onBackPressed
    new Activity().onBackPressed( state =>{
        Log.d('onBackPressed : ------>',state);
    });

    // url manager
    const urlManager = new UrlManager(document.location.toString());

    // observe
    window.observable = new Observable(['exception','public']);

    // class
    const myException = new MyException();
    // const navigation  = new Navigation();

    window.observable.subscribe('exception', myException);

    // progress init
    new ProgressBars();

    // scroll Observer
    new ScrollObserver([]);

    // routes
    try{
        const fastRouter = new FastRouter(urlManager.hash);
        fastRouter.addRoute('/', null, null );
        fastRouter.addRoute('/item/list', null,null);

        fastRouter.listen((pathinfo) => {
            Log.d( 'pathinfo',pathinfo );
            if (pathinfo.path)
            {
                // 페이지 refresh 여부
                if(pre_viewpage != null && pre_viewpage != '#left'){
                    if(document.querySelector<HTMLElement>('#left')!.childNodes.length>1){
                        Log.d(' <<<< stop >>>>');
                        return;
                    }
                }

                // 모든 이벤트 종료 시키기
                window.observable.notify('public',{type : 'close'});

                // fastRouter dispatcher
                fastRouter.dispatcher(pathinfo.path, pathinfo.parse_query);
            }
        });
    }catch(err){
        Log.e(err);
    }
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
