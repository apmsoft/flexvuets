import UrlManager from '@flexvue/urlmanager';
import Arrays from '@path/example/js/values/arrays.js';
import Sysmsg from '@path/example/js/values/sysmsg.js';
import Strings from '@path/example/js/values/strings.js';
import Numbers from '@path/example/js/values/numbers.js';

window.Sysmsg = Sysmsg;
window.Arrays = Arrays;
window.Strings = Strings;
window.Numbers = Numbers;

const onReady = () : void =>
{
    // 기본 클래스 선언
    new App();

    Log.i(App.browser, App.version, App.os, App.lang);


    Log.d('Arrays',Arrays.general);
    Log.d('Sysmsg',Sysmsg.i_delete);
    Log.d('Strings',Strings.app_name);
    Log.d('Numbers',Numbers.app_version);
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
