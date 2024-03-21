var config = {
    app_name: 'flexvue',
    version: '3.0',
    int_version: 15,
    debug: ['d', 'i', 'v', 'w', 'e'],
    debug_colors: {
        'd': '#333333',
        'v': '#5A8BE3',
        'i': '#1B963A',
        'w': '#d05b13',
        'e': '#E82C35'
    },
    cache: 'default',
    host: 'http://',
    _headers_: {
        'Content-Type': 'application/json'
    },
    _fileupload_headers_: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Authorization-Access-Token': ''
    },
    asset: 'v1',
    src: 'src',
    res: 'res',
    _history_state: {
        id: '#left',
        state: ''
    }
};
var Observable = /** @class */ (function () {
    function Observable(channel) {
        this.observers = this._makeChannel(channel);
    }
    Observable.prototype._makeChannel = function (channel) {
        var ch = Array.isArray(channel) ? channel : ['public'];
        var result = {};
        for (var _i = 0, ch_1 = ch; _i < ch_1.length; _i++) {
            var element = ch_1[_i];
            result[element] = [];
        }
        return result;
    };
    Observable.prototype.subscribe = function (channel, o) {
        var _channel = this._findChannel(channel);
        if (_channel) {
            var even = function (_o) { return _o.constructor.name === o.constructor.name; };
            var is_o_found = this.observers[_channel].some(even);
            if (!is_o_found) {
                this.observers[_channel].push(o);
            }
        }
    };
    Observable.prototype._findChannel = function (channel) {
        return Object.keys(this.observers).find(function (element) { return element === channel; }) || 'public';
    };
    Observable.prototype.unsubscribe = function (channel, o) {
        var _channel = this._findChannel(channel);
        this.observers[_channel] = this.observers[_channel].filter(function (subscriber) { return subscriber !== o; });
    };
    Observable.prototype.notify = function (channel, message) {
        var _channel = this._findChannel(channel);
        this.observers[_channel].forEach(function (observer) { return observer.update(message); });
    };
    return Observable;
}());
var ScrollObserver = /** @class */ (function () {
    function ScrollObserver(channel) {
        ScrollObserver.channels = this._makeChannel(channel);
    }
    ScrollObserver.prototype._makeChannel = function (channel) {
        var ch = {};
        channel.forEach(function (k) {
            ch[k] = 0;
        });
        return ch;
    };
    ScrollObserver._findChannel = function (channel) {
        var keys = Object.keys(ScrollObserver.channels);
        var found = keys.find(function (element) { return element == channel; });
        return found || '';
    };
    ScrollObserver._setPos = function (channel, pos) {
        if (ScrollObserver._findChannel(channel)) {
            ScrollObserver.channels[channel] = pos;
        }
    };
    ScrollObserver._getPos = function (channel) {
        var pos = 0;
        if (ScrollObserver._findChannel(channel)) {
            pos = ScrollObserver.channels[channel];
        }
        return pos;
    };
    return ScrollObserver;
}());
var OS = [
    {
        agent: window.navigator.platform,
        subagent: /Win/i,
        identity: "Windows"
    },
    {
        agent: window.navigator.userAgent,
        subagent: /IEMobile/i,
        identity: "IEMobile"
    },
    {
        agent: window.navigator.userAgent,
        subagent: /Android/i,
        identity: "Android"
    },
    {
        agent: window.navigator.platform,
        subagent: /Mac/i,
        identity: "Mac"
    },
    {
        agent: window.navigator.userAgent,
        subagent: /iPhone/i,
        identity: "iPhone"
    },
    {
        agent: window.navigator.platform,
        subagent: /Linux/i,
        identity: "Linux"
    }
];
var browsers = [
    {
        agent: window.navigator.userAgent,
        subagent: /Chrome/i,
        identity: "Chrome"
    },
    {
        agent: window.navigator.userAgent,
        subagent: /OmniWeb/i,
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    },
    {
        agent: window.navigator.vendor,
        subagent: /Apple/i,
        identity: "Safari",
        versionSearch: "Version"
    },
    // {
    //     prop: window.opera,
    //     identity: /Opera/i,
    //     versionSearch: "Version"
    // },
    {
        agent: window.navigator.vendor,
        subagent: /iCab/i,
        identity: "iCab"
    },
    {
        agent: window.navigator.vendor,
        subagent: /KDE/i,
        identity: "Konqueror"
    },
    {
        agent: window.navigator.userAgent,
        subagent: /Firefox/i,
        identity: "Firefox"
    },
    {
        agent: window.navigator.vendor,
        subagent: /Camino/i,
        identity: "Camino"
    },
    {
        agent: window.navigator.userAgent,
        subagent: /Netscape/i,
        identity: "Netscape"
    },
    {
        agent: window.navigator.userAgent,
        subagent: /MSIE/i,
        identity: "Explorer",
        versionSearch: "MSIE"
    },
    {
        agent: window.navigator.userAgent,
        subagent: /Gecko/i,
        identity: "Mozilla",
        versionSearch: "rv"
    },
    {
        agent: window.navigator.userAgent,
        subagent: /Mozilla/i,
        identity: "Netscape",
        versionSearch: "Mozilla"
    }
];
// application
var App = /** @class */ (function () {
    function App() {
        this.versionSearchString = '';
        App.browser = this.findPlatform(browsers) || "unknown";
        App.version = this.getPlatformVersion(navigator.userAgent)
            || this.getPlatformVersion(navigator.appVersion)
            || "unknown";
        App.os = this.findPlatform(OS) || "unknown";
        App.lang = this.getLanguage() || '';
    }
    App.getLocale = function () {
        var language = App.lang;
        return language;
    };
    App.prototype.findPlatform = function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].agent;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString && data[i].subagent.test(dataString)) {
                return data[i].identity;
            }
            else if (dataProp) {
                return data[i].identity;
            }
        }
        return '';
    };
    App.prototype.getPlatformVersion = function (data) {
        var index = data.indexOf(this.versionSearchString);
        if (index == -1)
            return;
        return parseFloat(data.substring(index + this.versionSearchString.length + 1));
    };
    App.prototype.getLanguage = function () {
        var language = navigator.language;
        language = language.toLowerCase();
        language = language.substring(0, 2); // first 2 characters
        if (['cn', 'tw', 'zh'].includes(language)) {
            language = 'cn'; // Assuming you want to default to 'cn' if any of these are the language
        }
        return language;
    };
    return App;
}());
// console.log
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.d = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.print_('d', args);
    };
    Log.i = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.print_('i', args);
    };
    Log.v = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.print_('v', args);
    };
    Log.w = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.print_('w', args);
    };
    Log.e = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.print_('e', args);
    };
    Log.print_ = function (log_type, args) {
        if (config.debug.some(function (el) { return el == log_type; })) {
            var logs = args.map(function (arg) {
                if (typeof arg === 'object') {
                    return JSON.stringify(arg);
                }
                return arg;
            });
            console.log('%c' + echoNowDate() + " >> ".concat(log_type.toUpperCase(), " : ") + logs.join(' | '), "color:".concat(config.debug_colors[log_type]));
        }
    };
    Log.clear = function () {
        console.clear();
    };
    return Log;
}());
var ProgressBars = /** @class */ (function () {
    function ProgressBars(load) {
        if (load === void 0) { load = ''; }
        var _a;
        var loading = load || '<svg width="40px"  height="40px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;"><circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#55ad15" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(347.727 50.0001 50.0001)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>';
        Promise.resolve(((_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterend', "<div id=\"loading\" class=\"loading\" style=\"display:none;\">".concat(loading, "</div>"))))
            .then(function () {
            ProgressBars.progressObj = document.querySelector('#loading');
        });
    }
    ProgressBars.show = function () {
        Handler.post(function () {
            if (ProgressBars.progressObj) {
                ProgressBars.progressObj.style.display = 'block';
            }
        }, 10);
    };
    ProgressBars.close = function () {
        Handler.post(function () {
            if (ProgressBars.progressObj) {
                ProgressBars.progressObj.style.display = 'none';
            }
        }, 100);
    };
    return ProgressBars;
}());
function echoNowDate() {
    var today = new Date();
    var dayNames = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
    var day = dayNames[today.getDay()];
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    hour %= 12;
    hour = hour || 12; // 0 => 12
    month = month < 10 ? '0' + month : month;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    return "".concat(year, "-").concat(month, "-").concat(date, " ").concat(ampm, " ").concat(hour, ":").concat(minute, ":").concat(second);
}
var Runnable = function (callback) {
    var reqAnimFrame = window.requestAnimationFrame;
    if (reqAnimFrame) {
        return reqAnimFrame(callback);
    }
    else {
        if (typeof callback === 'function') {
            return window.setTimeout(callback, 0);
        }
        return 0;
    }
};
var Handler = {
    post: function (callback, delay) {
        setTimeout(function () {
            Runnable(callback);
        }, delay);
    }
};
var Activity = /** @class */ (function () {
    function Activity() {
        Activity.bottomthird = document.querySelector("#bottomthird");
        Activity.bottomside = document.querySelector("#bottomside");
        Activity.bottom = document.querySelector("#bottom");
        Activity.rightthird = document.querySelector("#rightthird");
        Activity.rightside = document.querySelector("#rightside");
        Activity.right = document.querySelector("#right");
        Activity.drawer_menu = document.querySelector("#drawer_menu");
        Activity.layout_panel = {
            left: {
                id: '#left',
                target: null,
                toggle: '',
            },
            right: {
                id: '#right',
                target: '#right',
                toggle: 'transitioned',
            },
            rightside: {
                id: '#rightside',
                target: '#rightside',
                toggle: 'rightside_transitioned',
            },
            rightthird: {
                id: '#rightthird',
                target: '#rightthird',
                toggle: 'rightthird_transitioned',
            },
            bottom: {
                id: '#bottom',
                target: '#bottom',
                toggle: 'bottom_transitioned',
            },
            bottomside: {
                id: '#bottomside',
                target: '#bottomside',
                toggle: 'bottomside_transitioned',
            },
            bottomthird: {
                id: '#bottomthird',
                target: '#bottomthird',
                toggle: 'bottomthird_transitioned',
            },
            drawer_menu: {
                id: '#drawer_menu',
                target: '#drawer_menu',
                toggle: 'drawer_transitioned',
            },
        };
    }
    Activity.prototype.onCreateView = function () {
        // Implement this method
    };
    Activity.inentView = function (url, delaytime) {
        if (delaytime === void 0) { delaytime = 0; }
        Handler.post(function () {
            window.location.href = url;
        }, delaytime);
    };
    Activity.onStart = function (panel_id) {
        if (panel_id !== null) {
            Activity.push_state = panel_id ? panel_id.replace('#', '') : '';
            if (typeof window.location.hash !== 'undefined') {
                Activity.history_state[Activity.push_state] = window.location.hash;
            }
            var panel_1 = Activity.layout_panel[Activity.push_state];
            if (panel_1.target !== null) {
                var classname_1 = panel_1.toggle;
                if (!document.querySelector(panel_1.id).classList.contains(classname_1)) {
                    Handler.post(function () {
                        var _a;
                        document.querySelector((_a = panel_1.target) !== null && _a !== void 0 ? _a : panel_id).classList.toggle(classname_1);
                    }, 10);
                }
            }
        }
    };
    Activity.onStop = function (panel_id) {
        panel_id = panel_id ? panel_id.replace('#', '') : '';
        switch (panel_id) {
            case 'bottomthird':
                if (Activity.bottomthird && Activity.bottomthird.classList.contains('bottomthird_transitioned')) {
                    Activity.bottomthird.classList.toggle('bottomthird_transitioned');
                }
                break;
            case 'bottomside':
                if (Activity.bottomside && Activity.bottomside.classList.contains('bottomside_transitioned')) {
                    Activity.bottomside.classList.toggle('bottomside_transitioned');
                }
                break;
            case 'bottom':
                if (Activity.bottom && Activity.bottom.classList.contains('bottom_transitioned')) {
                    Activity.bottom.classList.toggle('bottom_transitioned');
                }
                break;
            case 'rightthird':
                if (Activity.rightthird && Activity.rightthird.classList.contains('rightthird_transitioned')) {
                    Activity.rightthird.classList.toggle('rightthird_transitioned');
                }
                break;
            case 'rightside':
                if (Activity.rightside && Activity.rightside.classList.contains('rightside_transitioned')) {
                    Activity.rightside.classList.toggle('rightside_transitioned');
                }
                break;
            case 'right':
                if (Activity.right && Activity.right.classList.contains('transitioned')) {
                    Activity.right.classList.toggle('transitioned');
                }
                break;
            case 'drawer_menu':
                if (Activity.drawer_menu && Activity.drawer_menu.classList.contains('drawer_transitioned')) {
                    Activity.drawer_menu.classList.toggle('drawer_transitioned');
                }
                break;
        }
    };
    Activity.prototype.onBackPressed = function (callback) {
        window.onpopstate = function (event) {
            var is_Trusted = false;
            if (typeof event.isTrusted !== 'undefined' && event.isTrusted) {
                is_Trusted = true;
            }
            else if (typeof event.state !== 'undefined' && event.state !== 'null') {
                is_Trusted = true;
            }
            if (is_Trusted) {
                var config_history_state = {
                    id: '#left',
                    state: '',
                };
                if (Activity.bottomthird && Activity.bottomthird.classList.contains('bottomthird_transitioned')) {
                    config_history_state.id = '#bottomthird';
                    config_history_state.state = Activity.history_state.bottomthird ? Activity.history_state.bottomthird : Activity.history_state[Activity.push_state];
                    Activity.bottomthird.classList.toggle('bottomthird_transitioned');
                }
                else if (Activity.bottomside && Activity.bottomside.classList.contains('bottomside_transitioned')) {
                    config_history_state.id = '#bottomside';
                    config_history_state.state = Activity.history_state.bottomside ? Activity.history_state.bottomside : Activity.history_state[Activity.push_state];
                    Activity.bottomside.classList.toggle('bottomside_transitioned');
                }
                else if (Activity.bottom && Activity.bottom.classList.contains('bottom_transitioned')) {
                    config_history_state.id = '#bottom';
                    config_history_state.state = Activity.history_state.bottom ? Activity.history_state.bottom : Activity.history_state[Activity.push_state];
                    Activity.bottom.classList.toggle('bottom_transitioned');
                }
                else if (Activity.rightthird && Activity.rightthird.classList.contains('rightthird_transitioned')) {
                    config_history_state.id = '#rightthird';
                    config_history_state.state = Activity.history_state.rightthird ? Activity.history_state.rightthird : Activity.history_state[Activity.push_state];
                    Activity.rightthird.classList.toggle('rightthird_transitioned');
                }
                else if (Activity.rightside && Activity.rightside.classList.contains('rightside_transitioned')) {
                    config_history_state.id = '#rightside';
                    config_history_state.state = Activity.history_state.rightside ? Activity.history_state.rightside : Activity.history_state[Activity.push_state];
                    Activity.rightside.classList.toggle('rightside_transitioned');
                }
                else if (Activity.right && Activity.right.classList.contains('transitioned')) {
                    config_history_state.id = '#right';
                    config_history_state.state = Activity.history_state.right ? Activity.history_state.right : Activity.history_state[Activity.push_state];
                    Activity.right.classList.toggle('transitioned');
                }
                else if (Activity.drawer_menu && Activity.drawer_menu.classList.contains('drawer_transitioned')) {
                    config_history_state.id = '#drawer_menu';
                    config_history_state.state = Activity.history_state.drawer_menu ? Activity.history_state.drawer_menu : Activity.history_state[Activity.push_state];
                    Activity.drawer_menu.classList.toggle('drawer_transitioned');
                }
                else {
                    config_history_state.id = '#left';
                    config_history_state.state = Activity.history_state.left ? Activity.history_state.left : Activity.history_state[Activity.push_state];
                }
                callback(config_history_state);
            }
        };
    };
    Activity.onBackButtonEvent = function (id, callback) {
        var btn_backey = document.querySelector(id);
        if (btn_backey) {
            btn_backey.addEventListener('click', function (e) {
                e.preventDefault();
                if (callback) {
                    callback(new URL(window.location.href));
                }
                else {
                    history.go(-1);
                }
            });
        }
    };
    Activity.push_state = '';
    Activity.history_state = {
        'left': '',
        'right': '',
        'rightside': '',
        'rightthird': '',
        'bottom': '',
        'bottomside': '',
        'bottomthird': '',
        'drawer_menu': '',
    };
    return Activity;
}());
var Router = /** @class */ (function () {
    function Router(hash) {
        this.init = false;
        this.hash = hash;
    }
    Router.prototype.filter = function (callback) {
        var _this = this;
        window.addEventListener('hashchange', function (evt) {
            var pathinfo = _this.pathinfo(window.location.hash.replace('#', ''));
            callback(pathinfo);
        });
        if (!this.init) {
            var _hash = this.hash ? this.hash.replace('#', '') : '';
            this.init = true;
            var pathinfo = this.pathinfo(_hash);
            callback(pathinfo);
        }
    };
    Router.prototype.pathinfo = function (hash) {
        var _a;
        var pathinfo = {
            'url': '',
            'path': '/',
            'parse_path': [],
            'query_string': '',
            'parse_query': {}
        };
        pathinfo.url = '#' + hash;
        var path_pattern = /[\/](\w+)/gi;
        if (path_pattern.test(hash)) {
            var path = hash.match(path_pattern) || [];
            var parse_path = path.map(function (h) {
                var pathname = h.replace(/\/$/, '');
                pathinfo.parse_path.push(pathname);
                return pathname;
            });
            var send_params = {};
            var params_pattern = /(\w+)=(.*)/g;
            if (params_pattern.test(hash)) {
                pathinfo.query_string = ((_a = hash.match(params_pattern)) === null || _a === void 0 ? void 0 : _a[0]) || '';
                pathinfo.parse_query = Object.assign(send_params, Object.fromEntries(new URLSearchParams(pathinfo.query_string)));
            }
            pathinfo.path = parse_path.join('');
        }
        return pathinfo;
    };
    return Router;
}());
