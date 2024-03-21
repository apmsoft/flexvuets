"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urlmanager_class_js_1 = require("@flexvue/core/urlmanager.class.js");
var onReady = function () {
    new App();
    Log.i(App.browser, App.version, App.os, App.lang);
    new Activity().onBackPressed(function (state) {
        Log.d('onBackPressed : ------>', state);
    });
    // #docs/start : hash 경로가 바뀔때 마다 호출 됩니다
    var urlManager = new urlmanager_class_js_1.default(document.location.toString());
    // btn go right
    var go_right = document.querySelector('#go_right').addEventListener('click', function () {
        Activity.onStart('#right');
        history.pushState('#right', 'right', '#right/');
    });
    // btn go right side
    document.querySelector('#go_rightside').addEventListener('click', function () {
        Activity.onStart('#rightside');
        history.pushState('#rightside', 'rightside', '#rightside/');
    });
    // btn go right third
    document.querySelector('#go_rightthird').addEventListener('click', function () {
        Activity.onStart('#rightthird');
        history.pushState('#rightthird', 'rightthird', '#rightthird/');
    });
    // btn go bottom
    document.querySelector('#go_bottom').addEventListener('click', function () {
        Activity.onStart('#bottom');
        history.pushState('#bottom', 'bottom', '#bottom/');
    });
    // btn go bottom side
    document.querySelector('#go_bottomside').addEventListener('click', function () {
        Activity.onStart('#bottomside');
        history.pushState('#bottomside', 'bottomside', '#bottomside/');
    });
    // btn go bottom third
    document.querySelector('#go_bottomthird').addEventListener('click', function () {
        Activity.onStart('#bottomthird');
        history.pushState('#bottomthird', 'bottomthird', '#bottomthird/');
    });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
