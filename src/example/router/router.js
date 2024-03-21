"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urlmanager_class_js_1 = require("@flexvue/core/urlmanager.class.js");
var asynctask_class_js_1 = require("@flexvue/core/asynctask.class.js");
var notice_class_js_1 = require("../observable/notice.class.js");
var faq_class_js_1 = require("../observable/faq.class.js");
var onReady = function () {
    // 기본 클래스 선언
    new App();
    // observable test /--------------------------
    var _n = new notice_class_js_1.Notice();
    var _f = new faq_class_js_1.Faq();
    window.observable = new Observable(['public', 'sub']);
    // public 채널 구독
    window.observable.subscribe('public', _n);
    window.observable.subscribe('public', _f);
    // 뒤로 가기 시 실행
    new Activity().onBackPressed(function (state) {
        Log.clear();
        Log.i('onBackPressed : ', state);
    });
    // 라우터 테스트용 버튼 활성화
    document.querySelectorAll('.btn-router').forEach(function (el) {
        el.addEventListener('click', function () {
            var path = el.dataset.path;
            window.location.hash = "#".concat(path);
        });
    });
    /**
     * router /===========================================>
     */
    var urlManager = new urlmanager_class_js_1.default(document.location.toString());
    // routes 경로 설정
    var routes = {
        '/': new URL('../js/dashboard.class.js', import.meta.url).href,
        '/bbs/notice': new URL('../js/notice.class.js', import.meta.url).href,
        '/bbs/faq': new URL('../js/faq.class.js', import.meta.url).href,
    };
    // Router
    new Router(urlManager.hash).filter(function (pathinfo) {
        if (pathinfo.url == '') {
            return;
        }
        Log.d('pathinfo', pathinfo);
        // make module path
        var path = (pathinfo.parse_path.length > 0) ? pathinfo.parse_path.slice(0, -1).join('') : pathinfo.path;
        Log.d('path', path);
        // find mymodule path
        var mymodule_path = routes[path];
        Log.d('mymodule_path', mymodule_path);
        if (typeof mymodule_path !== 'undefined' && mymodule_path !== null) {
            var mode_1 = pathinfo.parse_path.slice(-1);
            mode_1 = mode_1.length > 0 ? mode_1 : pathinfo.path;
            Log.d('mode', mode_1);
            // dynamic import mymodule
            new asynctask_class_js_1.default().doImport(mymodule_path)
                .then(function (Module) {
                var componentActivity = new Module.ComponentActivity();
                if (mode_1 == '/') {
                    componentActivity.doList(pathinfo.parse_query);
                }
                else if (mode_1 == '/post') {
                    componentActivity.doPost(pathinfo.parse_query);
                }
                else if (mode_1 == '/edit') {
                    componentActivity.doEdit(pathinfo.parse_query);
                }
                else if (mode_1 == '/reply') {
                    componentActivity.doReply(pathinfo.parse_query);
                }
                else if (mode_1 == '/view') {
                    componentActivity.doView(pathinfo.parse_query);
                }
                else if (mode_1 == '/list') {
                    componentActivity.doList(pathinfo.parse_query);
                }
            });
        }
    });
    // <-----router
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
