"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentActivity = void 0;
var ComponentActivity = /** @class */ (function () {
    function ComponentActivity() {
        this.TAG = 'notice';
    }
    ComponentActivity.prototype.doList = function (params) {
        if (params === void 0) { params = {}; }
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
        Log.d(App.getLocale());
        // observable
        window.observable.notify('public', "observer <public> : ".concat(this.TAG, "::doList"));
    };
    ComponentActivity.prototype.doPost = function (params) {
        if (params === void 0) { params = {}; }
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
    };
    ComponentActivity.prototype.doEdit = function (params) {
        if (params === void 0) { params = {}; }
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
    };
    return ComponentActivity;
}());
exports.ComponentActivity = ComponentActivity;
;
