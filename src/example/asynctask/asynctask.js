"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var asynctask_class_js_1 = require("@flexvue/core/asynctask.class.js");
var onReady = function () {
    // application/json
    var json_params = JSON.stringify({
        page: 1,
        q: encodeURIComponent('테스트')
    });
    var formData = new FormData();
    formData.append("name", "홍길동");
    var post_params = new URLSearchParams();
    formData.forEach(function (value, key) {
        post_params.append(key, value);
    });
    // AsyncTask
    new asynctask_class_js_1.default().execute('GET', 'src/res/values/strings.json', post_params, {
        mode: 'no-cors', // no-cors, cors, *same-origin
        //redirect : 'follow'
    }, {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization-Access-Token': 'Y29tZmFuY3l1cHN'
    })
        .then(function (resp) {
        Log.d('resp >>> ', resp);
        document.querySelector('#echo_contents').innerHTML = JSON.stringify(resp, null, 2);
    })
        .catch(function (e) {
        Log.e(e);
    });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
