"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notice = void 0;
var Notice = /** @class */ (function () {
    function Notice() {
        this.TAG = 'notice';
    }
    Notice.prototype.doList = function (params) {
        if (params === void 0) { params = {}; }
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
    };
    Notice.prototype.doPost = function (params) {
        if (params === void 0) { params = {}; }
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
    };
    Notice.prototype.doEdit = function (params) {
        if (params === void 0) { params = {}; }
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
    };
    // interface
    Notice.prototype.update = function (message) {
        Log.d(message);
    };
    return Notice;
}());
exports.Notice = Notice;
;
