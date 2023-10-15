"use strict";
const config = {
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
class Observable {
    constructor(channel) {
        this.observers = this._makeChannel(channel);
    }
    _makeChannel(channel) {
        const ch = Array.isArray(channel) ? channel : ['public'];
        let result = {};
        for (const element of ch) {
            result[element] = [];
        }
        return result;
    }
    subscribe(channel, o) {
        const _channel = this._findChannel(channel);
        if (_channel) {
            const even = (_o) => _o.constructor.name === o.constructor.name;
            let is_o_found = this.observers[_channel].some(even);
            if (!is_o_found) {
                this.observers[_channel].push(o);
            }
        }
    }
    _findChannel(channel) {
        return Object.keys(this.observers).find(element => element === channel) || 'public';
    }
    unsubscribe(channel, o) {
        const _channel = this._findChannel(channel);
        this.observers[_channel] = this.observers[_channel].filter(subscriber => subscriber !== o);
    }
    notify(channel, message) {
        const _channel = this._findChannel(channel);
        this.observers[_channel].forEach(observer => observer.update(message));
    }
}
class ScrollObserver {
    constructor(channel) {
        ScrollObserver.channels = this._makeChannel(channel);
    }
    _makeChannel(channel) {
        let ch = {};
        channel.forEach((k) => {
            ch[k] = 0;
        });
        return ch;
    }
    static _findChannel(channel) {
        const keys = Object.keys(ScrollObserver.channels);
        let found = keys.find(element => element == channel);
        return found || '';
    }
    static _setPos(channel, pos) {
        if (ScrollObserver._findChannel(channel)) {
            ScrollObserver.channels[channel] = pos;
        }
    }
    static _getPos(channel) {
        let pos = 0;
        if (ScrollObserver._findChannel(channel)) {
            pos = ScrollObserver.channels[channel];
        }
        return pos;
    }
}
const OS = [
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
const browsers = [
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
class App {
    constructor() {
        this.versionSearchString = '';
        App.browser = this.findPlatform(browsers) || "unknown";
        App.version = this.getPlatformVersion(navigator.userAgent)
            || this.getPlatformVersion(navigator.appVersion)
            || "unknown";
        App.os = this.findPlatform(OS) || "unknown";
        App.lang = this.getLanguage() || '';
    }
    static getLocale() {
        let language = App.lang;
        return language;
    }
    findPlatform(data) {
        for (let i = 0; i < data.length; i++) {
            const dataString = data[i].agent;
            const dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString && data[i].subagent.test(dataString)) {
                return data[i].identity;
            }
            else if (dataProp) {
                return data[i].identity;
            }
        }
        return '';
    }
    getPlatformVersion(data) {
        const index = data.indexOf(this.versionSearchString);
        if (index == -1)
            return;
        return parseFloat(data.substring(index + this.versionSearchString.length + 1));
    }
    getLanguage() {
        let language = navigator.language;
        language = language.toLowerCase();
        language = language.substring(0, 2); // first 2 characters
        if (['cn', 'tw', 'zh'].includes(language)) {
            language = 'cn'; // Assuming you want to default to 'cn' if any of these are the language
        }
        return language;
    }
}
// console.log
class Log {
    static d(...args) {
        this.print_('d', args);
    }
    static i(...args) {
        this.print_('i', args);
    }
    static v(...args) {
        this.print_('v', args);
    }
    static w(...args) {
        this.print_('w', args);
    }
    static e(...args) {
        this.print_('e', args);
    }
    static print_(log_type, args) {
        if (config.debug.some(el => el == log_type)) {
            const logs = args.map(arg => {
                if (typeof arg === 'object') {
                    return JSON.stringify(arg);
                }
                return arg;
            });
            console.log('%c' + echoNowDate() + ` >> ${log_type.toUpperCase()} : ` + logs.join(' | '), `color:${config.debug_colors[log_type]}`);
        }
    }
    static clear() {
        console.clear();
    }
}
class ProgressBars {
    constructor(load = '') {
        var _a;
        const loading = load || '<svg width="40px"  height="40px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;"><circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#55ad15" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(347.727 50.0001 50.0001)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>';
        Promise.resolve(((_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterend', `<div id="loading" class="loading" style="display:none;">${loading}</div>`)))
            .then(() => {
            ProgressBars.progressObj = document.querySelector('#loading');
        });
    }
    static show() {
        Handler.post(() => {
            if (ProgressBars.progressObj) {
                ProgressBars.progressObj.style.display = 'block';
            }
        }, 10);
    }
    static close() {
        Handler.post(() => {
            if (ProgressBars.progressObj) {
                ProgressBars.progressObj.style.display = 'none';
            }
        }, 100);
    }
}
function echoNowDate() {
    const today = new Date();
    const dayNames = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
    const day = dayNames[today.getDay()];
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    const date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour %= 12;
    hour = hour || 12; // 0 => 12
    month = month < 10 ? '0' + month : month;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    return `${year}-${month}-${date} ${ampm} ${hour}:${minute}:${second}`;
}
const Runnable = function (callback) {
    const reqAnimFrame = window.requestAnimationFrame;
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
const Handler = {
    post(callback, delay) {
        setTimeout(() => {
            Runnable(callback);
        }, delay);
    }
};
class Activity {
    constructor() {
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
    onCreateView() {
        // Implement this method
    }
    static inentView(url, delaytime = 0) {
        Handler.post(() => {
            window.location.href = url;
        }, delaytime);
    }
    static onStart(panel_id) {
        if (panel_id !== null) {
            Activity.push_state = panel_id ? panel_id.replace('#', '') : '';
            if (typeof window.location.hash !== 'undefined') {
                Activity.history_state[Activity.push_state] = window.location.hash;
            }
            let panel = Activity.layout_panel[Activity.push_state];
            if (panel.target !== null) {
                let classname = panel.toggle;
                if (!document.querySelector(panel.id).classList.contains(classname)) {
                    Handler.post(() => {
                        var _a;
                        document.querySelector((_a = panel.target) !== null && _a !== void 0 ? _a : panel_id).classList.toggle(classname);
                    }, 10);
                }
            }
        }
    }
    static onStop(panel_id) {
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
    }
    onBackPressed(callback) {
        window.onpopstate = function (event) {
            let is_Trusted = false;
            if (typeof event.isTrusted !== 'undefined' && event.isTrusted) {
                is_Trusted = true;
            }
            else if (typeof event.state !== 'undefined' && event.state !== 'null') {
                is_Trusted = true;
            }
            if (is_Trusted) {
                let config_history_state = {
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
    }
    static onBackButtonEvent(id, callback) {
        const btn_backey = document.querySelector(id);
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
    }
}
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
class Router {
    constructor(hash) {
        this.init = false;
        this.hash = hash;
    }
    filter(callback) {
        window.addEventListener('hashchange', (evt) => {
            const pathinfo = this.pathinfo(window.location.hash.replace('#', ''));
            callback(pathinfo);
        });
        if (!this.init) {
            let _hash = this.hash ? this.hash.replace('#', '') : '';
            this.init = true;
            const pathinfo = this.pathinfo(_hash);
            callback(pathinfo);
        }
    }
    pathinfo(hash) {
        var _a;
        const pathinfo = {
            'url': '',
            'path': '/',
            'parse_path': [],
            'query_string': '',
            'parse_query': {}
        };
        pathinfo.url = '#' + hash;
        const path_pattern = /[\/](\w+)/gi;
        if (path_pattern.test(hash)) {
            let path = hash.match(path_pattern) || [];
            const parse_path = path.map(h => {
                const pathname = h.replace(/\/$/, '');
                pathinfo.parse_path.push(pathname);
                return pathname;
            });
            let send_params = {};
            const params_pattern = /(\w+)=(.*)/g;
            if (params_pattern.test(hash)) {
                pathinfo.query_string = ((_a = hash.match(params_pattern)) === null || _a === void 0 ? void 0 : _a[0]) || '';
                pathinfo.parse_query = Object.assign(send_params, Object.fromEntries(new URLSearchParams(pathinfo.query_string)));
            }
            pathinfo.path = parse_path.join('');
        }
        return pathinfo;
    }
}
