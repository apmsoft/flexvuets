"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Forms = /** @class */ (function () {
    function Forms(targetId) {
        this.targetId = targetId;
    }
    /**
     * @param callback Function
     */
    Forms.prototype.doSubmit = function (callback) {
        if (callback === void 0) { callback = null; }
        var send_params = {};
        var formElem = document.querySelector(this.targetId);
        if (!formElem)
            return;
        formElem.addEventListener('submit', function (e) {
            e.preventDefault();
            send_params = {};
            // 데이터 필터링
            var formData = new FormData(formElem);
            formData.forEach(function (val, name) {
                var elements = formElem.elements.namedItem(name);
                if (elements instanceof RadioNodeList) {
                    var nodeName = (elements.length > 1)
                        ? elements[0].nodeName
                        : elements[0].nodeName;
                    send_params[name] = (send_params[name] && send_params[name] !== '')
                        ? "".concat(send_params[name], ",").concat(val)
                        : val;
                }
                else if (elements) {
                    var nodeName = elements.nodeName;
                    var _value = (nodeName === 'TEXTAREA') ? encodeURIComponent(val) : val;
                    send_params[name] = (send_params[name] && send_params[name] !== '')
                        ? "".concat(send_params[name], ",").concat(_value)
                        : _value;
                }
            });
            if (typeof callback === 'function') {
                callback(send_params);
            }
        });
    };
    return Forms;
}());
exports.default = Forms;
