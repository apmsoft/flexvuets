import UrlManager from '@flexvue/urlmanager';
import {ElementButton} from '@flexvue/elements/manager';

const onReady = () : void =>
{
    Log.i(App.browser, App.version, App.os, App.lang);

    Activity.onBackPressed( state =>{
        Log.d('onBackPressed : ------>',state);
    });

    // #docs/start : hash 경로가 바뀔때 마다 호출 됩니다
    const urlManager = new UrlManager(document.location.toString());

    new ElementButton('#go_right')!.addEventListener('click', function(){
        history.pushState('#slideR2L', 'right', `?a=b`);
        const activityId = Activity.onStart('fvueSlideFromRight top-[200px]', 'fvueSlideToLeft');
    });

    new ElementButton('#go_bottom')!.addEventListener('click', function(){
        history.pushState('#slideB2T', 'bottom', `?b=c`);
        const activityId = Activity.onStart('fvueSlideFromBottom top-[140%]', 'fvueSlideToTop');
    });
};

// document ready
(new App()).setLanguages([]).setResoures(import.meta.url).run(onReady);
