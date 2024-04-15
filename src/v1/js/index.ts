import UrlManager from '@flexvue/urlmanager';
import AsyncTask from '@flexvue/asynctask';
import FastRouter from '@flexvue/fastrouter';
import R from '@flexvue/resource';

import {MyException} from '@v1/js/exception.class.js';
import { HeaderActivity } from '@v1/js/header.class.js';
import { DrawerMenu } from "@v1/js/drawer_menu.js";

// 이전 화면 패널 위치
let pre_viewpage : string | null = null;

const onReady = () : void =>
{
    // config
    config.src8 = 'server_8000.php';
    config.src = config.host+'/'+config.src8;

    // 앱 정보
    new App();
    Log.i(App.browser, App.version, App.os, App.lang);

    // onBackPressed
    new Activity().onBackPressed( state =>{
        Log.d('onBackPressed : ------>',state);
    });

    // url manager
    const urlManager = new UrlManager(document.location.toString());

    // class
    const myException = new MyException();
    const headerActivity = new HeaderActivity();
    const drawerMenu = new DrawerMenu();

    // head
    headerActivity.run();

    // drawer-menu
    drawerMenu.init();
    drawerMenu.closeDrawer();
    drawerMenu.doDrawerListener();

    // observe
    window.observable = new Observable(['exception','public']);

    window.observable.subscribe('exception', myException);
    window.observable = new Observable(["drawermenu",'exception','public']);
    window.observable.subscribe('exception', myException);
    window.observable.subscribe("drawermenu", drawerMenu);

    // progress init
    new ProgressBars();

    // scroll Observer
    new ScrollObserver(["main","menu3","menu2","search"]);

    // routes
    try{
        const fastRouter = new FastRouter(urlManager.hash);
        fastRouter.addRoute('/', 'run', new URL('../main/main.class.js', import.meta.url).href );
        fastRouter.addRoute('/menu1/greeting', 'doGreeting',new URL('../menu1/menu1.class.js', import.meta.url).href);
        fastRouter.addRoute('/menu1/location', 'doLocation',new URL('../menu1/menu1.class.js', import.meta.url).href);
        fastRouter.addRoute('/menu2', 'doList',new URL('../menu2/menu2.class.js', import.meta.url).href);
        fastRouter.addRoute('/menu3', 'doList',new URL('../menu3/menu3.class.js', import.meta.url).href);

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

                // drawer-menu
                if(pathinfo.path =='/drawermenu'){
                    drawerMenu.openDrawer();
                }else {
                    let _path = (pathinfo.path !='/' && typeof pathinfo.parse_path[0] !==undefined) ? pathinfo.parse_path[0].replace(/[^a-zA-Z0-9-_]/g, "") : '';
                    window.observable.notify("drawermenu", _path);
                }

                // fastRouter dispatcher
                fastRouter.dispatcher(pathinfo.path, pathinfo.parse_query);
            }
        });
    }catch(err){
        Log.e(err);
    }
};

// document ready
// document ready
document.addEventListener("DOMContentLoaded", () => {
    // R 클래스 초기화 후에 DOMContentLoaded 이벤트 발생
    window.R = R;
    window.R.__init({
        sysmsg : new URL(`../js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
        arrays : new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
        strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href,
        numbers: new URL(`../js/values/numbers${App.getLocale()}.js`, import.meta.url).href
    }).then(() => {
        onReady();
    }).catch(err => {
        console.error("Error initializing R:", err);
    });
});
