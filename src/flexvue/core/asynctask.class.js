"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncTask = /** @class */ (function () {
    function AsyncTask() {
    }
    /**
     *
     * @param method 전송방식
     * @param url 서버 접속 경로
     * @param params 전송할 데이터
     * @param _options 옵션
     * @param _headers 전송할 헤더값
     */
    AsyncTask.prototype.execute = function (method, url, params, _options, _headers) {
        if (params === void 0) { params = {}; }
        if (_options === void 0) { _options = {}; }
        if (_headers === void 0) { _headers = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _method, redirect_url, headers, options, response, contentType, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _method = method.toUpperCase();
                        redirect_url = url;
                        headers = _headers || ((_method == 'GET') ? { 'Content-Type': 'text/plain' } : { 'Content-Type': 'application/json' });
                        options = {
                            method: _method,
                            cache: 'no-cache',
                            headers: new Headers(headers)
                        };
                        if (_method != 'GET') {
                            options.body = JSON.stringify(params);
                        }
                        Object.entries(_options).forEach(function (_a) {
                            var key = _a[0], value = _a[1];
                            options[key] = value;
                        });
                        return [4 /*yield*/, fetch(redirect_url, options)];
                    case 1:
                        response = _a.sent();
                        contentType = response.headers.get('content-type');
                        if (!response.ok) {
                            throw new Error(String(response.status));
                        }
                        if (!(contentType && contentType.includes('application/json'))) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        return [3 /*break*/, 7];
                    case 3:
                        if (!(contentType && contentType.includes('text'))) return [3 /*break*/, 5];
                        return [4 /*yield*/, response.text()];
                    case 4:
                        result = _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        if (!(contentType && contentType.includes('application'))) return [3 /*break*/, 7];
                        return [4 /*yield*/, response.blob()];
                    case 6:
                        result = _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/, result];
                }
            });
        });
    };
    AsyncTask.prototype.doImport = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve("".concat(url)).then(function (s) { return require(s); })];
            });
        });
    };
    AsyncTask.prototype.doImportCss = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!document.querySelector("[href=\"".concat(url, "\"]"))) {
                    document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"".concat(url, "\" />"));
                }
                return [2 /*return*/];
            });
        });
    };
    return AsyncTask;
}());
exports.default = AsyncTask;
