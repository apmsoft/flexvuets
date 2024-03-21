"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faq = void 0;
var Faq = /** @class */ (function () {
    function Faq() {
        this.TAG = 'faq';
    }
    Faq.prototype.doList = function (params) {
        if (params === void 0) { params = {}; }
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
    };
    Faq.prototype.doPost = function (params) {
        if (params === void 0) { params = {}; }
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
    };
    Faq.prototype.doEdit = function (params) {
        if (params === void 0) { params = {}; }
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
    };
    // interface
    Faq.prototype.update = function (message) {
        Log.d(message);
    };
    return Faq;
}());
exports.Faq = Faq;
;
