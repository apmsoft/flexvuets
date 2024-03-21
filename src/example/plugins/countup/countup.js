"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countup_js_1 = require("@flexvue/plugins/countup/countup.js");
var onReady = function () {
    Handler.post(function () {
        var countUp = new countup_js_1.CountUp('mypoint', 10000);
        if (!countUp.error) {
            countUp.start();
        }
        else {
            throw countUp.error;
        }
    }, 1000);
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
