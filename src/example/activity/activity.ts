import UrlManager from '@flexvue/urlmanager';
import {ElementButton} from '@flexvue/elements/manager';

// 이전 화면 패널 위치
let pre_viewpage : Record<string,any> | null = null;
const onReady = () : void =>
{
    Log.i(App.browser, App.version, App.os, App.lang);

    Activity.onBackPressed( state =>{
        Log.d('onBackPressed : ------>',state);
        pre_viewpage = state.id ? state : null;

        if(pre_viewpage?.id.includes('fvue--activity')){
            Activity.onClose(pre_viewpage?.id);
        }
    });

    // 패널 미리 생성하기
    Activity.createPanels("view1","view2","view3");

    // // #docs/start : hash 경로가 바뀔때 마다 호출 됩니다
    // const urlManager = new UrlManager(document.location.toString());

    new ElementButton('#go_right')!.addEventListener('click', function(){
        history.pushState('#view1', 'right', `?a=b`);
        const activityId = Activity.onStart('view1','fvueSlideFromRight top-[10%]', 'fvueSlideToLeft');
        Activity.setStateHistory(activityId);
    });

    new ElementButton('#go_bottom')!.addEventListener('click', function(){
        history.pushState('#view2', 'bottom', `?b=c`);

        const activityId = Activity.onStart('view2','fvueSlideFromBottom top-[140%]', 'fvueSlideToTop');
        Activity.setStateHistory(activityId);
    });
};

// document ready
(new App()).setLanguages([]).setResoures({
    // sysmsg : new URL(`../js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
    arrays : new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
    strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(onReady);
