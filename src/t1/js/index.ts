import UrlManager from '@flexvue/urlmanager';
import AsyncTask from '@flexvue/asynctask';
import FastRouter from '@flexvue/fastrouter';
import CryptoES from 'crypto-es';
import {CacheLocalStorage} from '@flexvue/caches';
import Swal from 'sweetalert2';

import Navigation from '@t1/js/Nav.class.js';
import {MyException} from '@t1/js/Exception.class.js';

// 이전 화면 패널 위치
let pre_viewpage : string | null = null;

const onReady = () : void =>
{
    // config
    config.src = config.host+'/'+config.src9;

    // 앱 정보
    Log.i(App.browser, App.version, App.os, App.lang);

    // onBackPressed
    Activity.onBackPressed( state =>{
        Log.d('onBackPressed : ------>',state);
    });

    // cache
    window.cacheStorage = new CacheLocalStorage( config.app_name+"am" );
    config.userinfo = window.cacheStorage._get('aminfo') ? JSON.parse(CryptoES.AES.decrypt(window.cacheStorage._get('aminfo'), config.app_name).toString(CryptoES.enc.Utf8)) : {};

    // url manager
    const urlManager = new UrlManager(document.location.toString());

    // observe
    window.observable = new Observable(['exception','public']);

    // class
    const myException = new MyException();
    const navigation  = new Navigation();
    navigation.onCreateView();

    window.observable.subscribe('exception', myException);

    // progress init
    // new ProgressBars();

    // scroll Observer
    new ScrollObserver([]);

    // 로그아웃 버튼
    const btn_logout = document.querySelector<HTMLButtonElement>("#btn-logout");
    if(btn_logout)
    {
        btn_logout.addEventListener("click", () =>
        {
            const Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true
            });

            Toast.fire({
                icon: 'success',
                title: R.sysmsg.v_logout
            });

            Handler.post(()=>{
                alert('페이지 이동');
            },1100);
            // new AsyncTask().execute('POST', `${config.src}/manager/login/out`,{},config._options_,config._headers_)
            // .then((resp)=>
            // {
            //     // result
            //     if(resp.result == 'false'){
            //         throw resp;
            //     }

            //     window.location.href = "../login.html";
            // })
            // .catch(err => {
            //     window.observable.notify('exception',err);
            // })
            // .finally(()=>{
            //     ProgressBars.close();
            // });
        }, false);
    }

    // routes
    try{
        const fastRouter = new FastRouter(urlManager.hash);
        fastRouter.addRoute('/', null, null );
        fastRouter.addRoute('/item/list', null,null);
        fastRouter.addRoute('/itemgroup/list', null,null);
        fastRouter.addRoute('/manager/list', null,null);
        fastRouter.addRoute('/analysis/tables', null, null);

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

                // navigation 1차 메뉴 셀렉트
                navigation.selectNav1(pathinfo.parse_path[0]);

                // navigation 2차 메뉴 실행 및 셀렉트
                let _path = pathinfo.parse_path[0].replace(/[^a-zA-Z0-9-_]/g, "");
                let navi2 = R.arrays[_path] ?? {};
                navi2['gid'] = pathinfo.parse_path.slice(0,2).join('');
                navigation.selectNav2(navi2);

                // fastRouter dispatcher
                fastRouter.dispatcher(pathinfo.path, pathinfo.parse_query);
            }
        });
    }catch(err){
        Log.e(err);
    }
};

(new App()).setLanguages([]).setResoures(import.meta.url).run(onReady);
