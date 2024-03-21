"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var template_class_js_1 = require("@flexvue/core/template.class.js");
var onReady = function () {
    ProgressBars.show();
    new template_class_js_1.default().readFile(new URL("../template_html/tpl/test.tpl.html", import.meta.url).href)
        .then(function (template) {
        // 데이터 설정
        var resp = {
            name: '홍길동', age: 20, msg: [{ name: '-홍' }]
        };
        // 출력
        var outhtml_el = document.querySelector('#echo_contents');
        outhtml_el.innerHTML = new template_class_js_1.default().render(template, { message: resp });
    })
        .finally(function () {
        // close progress
        ProgressBars.close();
    });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
