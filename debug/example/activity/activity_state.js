import UrlManager from '@flexvue/urlmanager';
import FastRouter from '@flexvue/fastrouter';
import { ElementButton } from '@flexvue/elements/manager';
const onReady = () => {
    Log.i(App.browser, App.version, App.os, App.lang);
    // 뒤로가기 캡쳐
    Activity.onBackPressed(state => {
        Log.d('onBackPressed : ------>', state);
        // if(state.id=='fvue--activity-1' && state.activity != null){
        //     state.activity['doPost']({d : 'dddd'});
        // }
    });
    new ElementButton('#go_right').addEventListener('click', function () {
        window.location.hash = '#/page1';
    });
    new ElementButton('#go_bottom').addEventListener('click', function () {
        window.location.hash = '#/page2';
    });
    const urlManager = new UrlManager(document.location.toString());
    /**
     * router /===========================================>
     */
    try {
        // FastRouter
        const fastRouter = new FastRouter(urlManager.hash);
        fastRouter.addRoute('/', null, null);
        fastRouter.addRoute('/page1', 'doList', new URL('../activity/page1.class.js', import.meta.url).href);
        fastRouter.addRoute('/page2', 'doList', new URL('../activity/page2.class.js', import.meta.url).href);
        fastRouter.listen((pathinfo) => {
            Log.d('pathinfo', pathinfo);
            if (pathinfo.path) {
                fastRouter.dispatcher(pathinfo.path, pathinfo.parse_query);
            }
        });
    }
    catch (err) {
        Log.e(err);
    }
};
// document ready
(new App()).setLanguages([]).setResoures(import.meta.url).run(onReady);
