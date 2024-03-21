"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var UrlManager = /** @class */ (function (_super) {
    __extends(UrlManager, _super);
    function UrlManager(url) {
        var _this = _super.call(this, url) || this;
        _this.version = 1;
        _this.current_id = '';
        _this.url_params = _this.convertURL2JSON() || {};
        return _this;
    }
    UrlManager.prototype.doEmpty = function () {
        this.url_params = {};
    };
    UrlManager.prototype.removeUrlParams = function () {
        var argv = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argv[_i] = arguments[_i];
        }
        var self = this;
        var result = __assign({}, self.url_params);
        if (Array.isArray(argv)) {
            argv.forEach(function (k) {
                if (result.hasOwnProperty(k)) {
                    delete result[k];
                }
            });
        }
        return result || {};
    };
    UrlManager.prototype.getUrlParams = function () {
        var argv = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argv[_i] = arguments[_i];
        }
        var self = this;
        var result = {};
        if (Array.isArray(argv)) {
            argv.forEach(function (k) {
                if (self.url_params.hasOwnProperty(k)) {
                    result[k] = self.url_params[k];
                }
            });
        }
        return result;
    };
    UrlManager.prototype.convertURL2JSON = function () {
        this.doEmpty();
        this.url_params = Object.fromEntries(new URLSearchParams(_super.prototype.search));
        return this.url_params;
    };
    UrlManager.prototype.makeJSON2URL = function (params) {
        this.mergeURLParams(params);
        var url_param = Object.entries(this.url_params).map(function (_a) {
            var key = _a[0], val = _a[1];
            return "".concat(key, "=").concat(encodeURIComponent(val));
        }).join("&");
        return url_param;
    };
    UrlManager.prototype.mergeURLParams = function (params) {
        this.url_params = Object.assign(this.url_params, params);
    };
    // Activity class 레이아웃 패널 확인 및 현재 주소 등록
    UrlManager.prototype.pushState = function (id, title, url) {
        if (Activity.push_state != '' && Activity.push_state !== null) {
            var cur_state = Activity.push_state;
            Activity.history_state[cur_state] = id;
        }
        window.history.pushState(id, title, url);
    };
    return UrlManager;
}(URL));
exports.default = UrlManager;
