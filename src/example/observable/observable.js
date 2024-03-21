"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notice_class_js_1 = require("../observable/notice.class.js");
var faq_class_js_1 = require("../observable/faq.class.js");
var forms_class_js_1 = require("src/flexvue/core/forms.class.js");
var onReady = function () {
    var _n = new notice_class_js_1.Notice();
    var _f = new faq_class_js_1.Faq();
    window.observable = new Observable(['public', 'sub']);
    // public 채널 구독
    window.observable.subscribe('public', _n);
    window.observable.subscribe('public', _f);
    window.observable.notify('public', 'PUBLIC message 테스트');
    window.observable.notify('public', 'SUB message 테스트');
    new forms_class_js_1.default('#theMessageForm').doSubmit(function (form_params) {
        var _a;
        Log.clear();
        Log.d(form_params);
        window.observable.notify('public', (_a = form_params.message) !== null && _a !== void 0 ? _a : '-');
    });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
