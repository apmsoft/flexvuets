"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
var fn = function (name) { return "####".concat(name, "<<<<"); };
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.render = function (message) {
        var _a;
        return ("\n            <h3 class=\"mt-4 text-red-800\"><IMPORT \uB3D9\uAE30 \uD15C\uD50C\uB9BF \uD074\uB798\uC2A4></h3>\n            <p>".concat(fn(message.name), "</p>\n            <p>").concat(message.age, "</p>\n            <ul>\n            ").concat((_a = message.msg) === null || _a === void 0 ? void 0 : _a.map(function (item) { return "\n                <li>".concat(item.name, "</li>\n            "); }).join(''), "\n            </ul>\n        "));
    };
    return Template;
}());
exports.Template = Template;
