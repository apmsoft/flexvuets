"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var asyncajax_class_js_1 = require("@flexvue/core/asyncajax.class.js");
{
    var onReady_1 = function () {
        // json
        var json_params = {
            page: 1,
            q: encodeURIComponent('테스트')
        };
        new asyncajax_class_js_1.default().execute('GET', '../../res/values/strings.json', json_params, {
            dataType: "json",
            cache: false,
            crossOrigin: true
        }, {
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
                xhr.setRequestHeader('Access-Control-Allow-Methods', '*');
                xhr.setRequestHeader('Authorization-Access-Token', 'Y29tZmFu');
            }
        })
            .then(function (resp) {
            Log.d('resp >>> ', resp);
            document.querySelector('#echo_contents').innerHTML = JSON.stringify(resp, null, 2);
        }).catch(function (e) {
            Log.e('error =>', e);
        });
        ;
    };
    // document ready
    document.addEventListener("DOMContentLoaded", onReady_1);
}
