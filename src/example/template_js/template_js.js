"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var asynctask_class_js_1 = require("@flexvue/core/asynctask.class.js");
var onReady = function () {
    ProgressBars.show();
    new asynctask_class_js_1.default().doImport(new URL("../template_js/tpl/test.tpl.js", import.meta.url).href)
        .then(function (data) {
        // 데이터 설정
        var resp = {
            name: '홍길동', age: 20, msg: [{ name: '-홍' }]
        };
        Log.d(resp);
        var template = new data.Template();
        // 출력
        var outhtml_el = document.querySelector('#echo_contents');
        outhtml_el.innerHTML = template.render(resp);
    })
        .finally(function () {
        // close progress
        ProgressBars.close();
    });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
