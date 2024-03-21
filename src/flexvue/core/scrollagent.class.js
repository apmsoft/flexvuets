"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScrollAgent = /** @class */ (function () {
    function ScrollAgent(channel) {
        this.TAG = 'ScrollAgent';
        this.version = '1.2';
        this.channel = channel;
        this.scrollerVertical = null;
        this.scrollerHorizontal = null;
        this.keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
        this.supportsPassive = false;
        this.wheelOpt = false;
        this.wheelEvent = 'mousewheel';
        this.floatEl = null;
        this.floatElScrollPos = 500;
    }
    ScrollAgent.prototype.addFloatListener = function (elId, pos, callback) {
        var self = this;
        this.floatEl = document.querySelector(elId);
        if (this.floatEl) {
            self.floatElScrollPos = pos || 500;
            Handler.post(function () {
                if (!self.floatEl.classList.contains('hidden')) {
                    self.floatEl.classList.add('hidden');
                }
            }, 1);
            if (typeof callback === 'function') {
                callback(this.floatEl);
            }
        }
    };
    ScrollAgent.prototype.addScrollListener = function (mode, scrollTarget) {
        if (mode === 'vertical') {
            this.scrollerVertical = document.querySelector(scrollTarget);
            if (this.scrollerVertical) {
                this.scrollerVertical.dataset.scrollch = this.channel;
                this.startVertical();
            }
        }
        else if (mode === 'horizontal') {
            this.scrollerHorizontal = document.querySelector(scrollTarget);
            if (this.scrollerHorizontal) {
                this.scrollerHorizontal.dataset.scrollch = this.channel;
                this.startHorizontal();
            }
        }
    };
    ScrollAgent.prototype.startVertical = function () {
        var _this = this;
        // 스크롤 캡쳐
        if (this.scrollerVertical) {
            this.scrollerVertical.addEventListener("scroll", function (event) {
                var target = event.target;
                var _ch = target.dataset.scrollch;
                var tpos = target.scrollTop;
                if (_ch !== 'undefined' && _ch === _this.channel) {
                    ScrollObserver._setPos(_this.channel, tpos);
                }
                // float Layout
                if (_this.floatEl) {
                    if (tpos < _this.floatElScrollPos) {
                        if (!_this.floatEl.classList.contains('hidden')) {
                            _this.floatEl.classList.add('hidden');
                        }
                    }
                    else {
                        if (_this.floatEl.classList.contains('hidden')) {
                            _this.floatEl.classList.remove('hidden');
                        }
                    }
                }
            });
            // try {
            //     window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            //         get: () => { this.supportsPassive = true; }
            //     }));
            // } catch (e) { }
            this.wheelOpt = this.supportsPassive ? { passive: false } : false;
            this.wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
        }
    };
    ScrollAgent.prototype.startHorizontal = function () {
        var _this = this;
        var self = this;
        if (this.scrollerHorizontal) {
            this.scrollerHorizontal.addEventListener("scroll", function (event) {
                var target = event.target;
                var _ch = target.dataset.scrollch;
                if (_ch === self.channel) {
                    // Log.d("+++++ >" + _ch + ' ' + tpos);
                    ScrollObserver._setPos(_this.channel, _this.scrollerHorizontal.scrollLeft);
                }
            });
        }
    };
    ScrollAgent.prototype.getPos = function () {
        var pos = 0;
        try {
            pos = ScrollObserver._getPos(this.channel);
        }
        catch (e) {
            Log.d(e);
        }
        return pos;
    };
    ScrollAgent.prototype.getPosById = function (target) {
        var pos = 0;
        var obj = document.querySelector("#".concat(target));
        if (obj) {
            pos = obj.offsetTop;
        }
        return pos;
    };
    ScrollAgent.prototype.resetPos = function () {
        ScrollObserver._setPos(this.channel, 0);
    };
    ScrollAgent.prototype.scrollTo = function (params, delaytime) {
        var self = this;
        var dtime = delaytime || 0;
        Handler.post(function () {
            if (self.scrollerVertical) {
                self.scrollerVertical.scrollTo(params);
            }
        }, dtime);
    };
    ScrollAgent.prototype.scrollToLeft = function (params, delaytime) {
        var self = this;
        var dtime = delaytime || 0;
        Handler.post(function () {
            if (self.scrollerHorizontal) {
                self.scrollerHorizontal.scrollTo(params);
            }
        }, dtime);
    };
    ScrollAgent.prototype.scrollToBottom = function (delaytime) {
        var self = this;
        var dtime = delaytime || 0;
        if (self.scrollerVertical) {
            Handler.post(function () {
                var _a, _b;
                var pos = (_a = self.scrollerVertical) === null || _a === void 0 ? void 0 : _a.scrollHeight;
                (_b = self.scrollerVertical) === null || _b === void 0 ? void 0 : _b.scrollTo({ top: pos });
            }, dtime);
        }
    };
    ScrollAgent.prototype.preventDefault = function (e) {
        try {
            e.stopImmediatePropagation();
            e.preventDefault();
        }
        catch (e) {
        }
    };
    ScrollAgent.prototype.preventDefaultForScrollKeys = function (e) {
        if (this.keys[e.keyCode]) {
            this.preventDefault(e);
            return false;
        }
    };
    ScrollAgent.prototype.disableScroll = function () {
        if (this.scrollerVertical) {
            this.scrollerVertical.addEventListener('DOMMouseScroll', this.preventDefault, false); // older FF
            this.scrollerVertical.addEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt); // modern desktop
            // this.scrollerVertical.addEventListener('touchmove', this.preventDefault, this.wheelOpt); // mobile
            this.scrollerVertical.addEventListener('touchmove', this.preventDefault, false); // mobile
            this.scrollerVertical.addEventListener('keydown', this.preventDefaultForScrollKeys, false);
        }
    };
    ScrollAgent.prototype.enableScroll = function () {
        if (this.scrollerVertical) {
            this.scrollerVertical.removeEventListener('DOMMouseScroll', this.preventDefault, false);
            this.scrollerVertical.removeEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
            // this.scrollerVertical.removeEventListener('touchmove', this.preventDefault, this.wheelOpt);
            this.scrollerVertical.removeEventListener('touchmove', this.preventDefault);
            this.scrollerVertical.removeEventListener('keydown', this.preventDefaultForScrollKeys, false);
        }
    };
    return ScrollAgent;
}());
exports.default = ScrollAgent;
