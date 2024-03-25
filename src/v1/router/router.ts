import UrlManager from '@flexvue/urlmanager';
import AsyncTask from '@flexvue/asynctask';

import {Notice} from '@path/observable/notice.class.js';
import {Faq} from '@path/observable/faq.class.js';

const onReady = () : void =>
{
    // 기본 클래스 선언
    new App();

    // observable test /--------------------------
    const _n = new Notice();
    const _f = new Faq();

    window.observable = new Observable(['public','sub']);
    // public 채널 구독
    window.observable.subscribe('public', _n);
    window.observable.subscribe('public', _f);

    // 뒤로 가기 시 실행
    new Activity().onBackPressed( state =>{
        Log.clear();
        Log.i('onBackPressed : ',state);
    });

    // 라우터 테스트용 버튼 활성화
    document.querySelectorAll<HTMLButtonElement>('.btn-router').forEach((el : HTMLButtonElement) => {
        el.addEventListener('click', function(){
            const path : any = el.dataset.path;

            window.location.hash = `#${path}`;
        });
    });

    /**
     * router /===========================================>
     */
    const urlManager = new UrlManager(document.location.toString());

    // routes 경로 설정
    const routes : {[key:string]: any} = {
        '/'          : new URL('../js/dashboard.class.js', import.meta.url).href,
        '/bbs/notice': new URL('../js/notice.class.js', import.meta.url).href,
        '/bbs/faq'   : new URL('../js/faq.class.js', import.meta.url).href,
    };

    // Router
    new Router(urlManager.hash).filter(function(pathinfo : PathInfo)
    {
        if(pathinfo.url ==''){
            return;
        }

        Log.d( 'pathinfo',pathinfo );

        // make module path
        const path : string = (pathinfo.parse_path.length>0) ? pathinfo.parse_path.slice(0, -1).join('') : pathinfo.path;
        Log.d('path', path);

        // find mymodule path
        const mymodule_path : string = routes[ path ];
        Log.d('mymodule_path',mymodule_path);
        if(typeof mymodule_path !=='undefined' && mymodule_path !==null)
        {
            let mode : any = pathinfo.parse_path.slice(-1);
            mode = mode.length>0 ? mode : pathinfo.path;
            Log.d('mode',mode);

            // dynamic import mymodule
            new AsyncTask().doImport( mymodule_path )
            .then(Module =>
            {
                const componentActivity = new Module.ComponentActivity();
                if(mode == '/'){
                    componentActivity.doList(pathinfo.parse_query);
                }else if(mode == '/post'){
                    componentActivity.doPost(pathinfo.parse_query);
                }else if(mode == '/edit'){
                    componentActivity.doEdit(pathinfo.parse_query);
                }else if(mode == '/reply'){
                    componentActivity.doReply(pathinfo.parse_query);
                }else if(mode == '/view'){
                    componentActivity.doView(pathinfo.parse_query);
                }else if(mode == '/list'){
                    componentActivity.doList(pathinfo.parse_query);
                }
            });
        }

    });
    // <-----router
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
