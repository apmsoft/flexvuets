"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_class_js_1 = require("@flexvue/core/forms.class.js");
{
    var onReady_1 = function () {
        new forms_class_js_1.default('#thePostForm').doSubmit(function (form_params) {
            Log.d(form_params);
            document.querySelector('#echo_contents').innerHTML = JSON.stringify(form_params, null, 2);
        });
    };
    // document ready
    document.addEventListener("DOMContentLoaded", onReady_1);
}
