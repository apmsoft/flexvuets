interface Config {
    app_name     : string;
    version      : string;
    int_version  : number;
    debug        : string[];
    debug_colors : {
        [key: string]: string;
    };
    surport_langs: string[],
    _history_state: {
        id: string;
        state: string;
    };
    host : string;
    _options_ : {
        [key: string]: any;
    };
    _headers_: {
        [key: string]: string;
    };
    _fileupload_headers_: {
        [key: string]: string;
    };
    src : string;
    [propName : string]: any
}

const config: Config = {
    app_name: 'flexvue',
    version: '3.0',
    int_version: 15,
    debug: ['d', 'i', 'v', 'w', 'e'],
    debug_colors : {
        'd' : '#333333',
        'v' : '#5A8BE3',
        'i' : '#1B963A',
        'w' : '#d05b13',
        'e' : '#E82C35'
    },
    _history_state: {
        id: '#left',
        state: ''
    },
    _options_ : {
        cache: 'no-cache',
        mode : 'cors',
        verify : false
    },
    _headers_: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
    },
    _fileupload_headers_: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Authorization-Access-Token': ''
    },

    host: 'http://',
    src : 'src',
    surport_langs: []
};

interface Observer {
    update(message: any): void;
}

class Observable {
    private observers: { [key: string]: Observer[] };

    constructor(channel: string[] | string) {
        this.observers = this._makeChannel(channel);
    }

    private _makeChannel(channel: string[] | string): { [key: string]: Observer[] } {
        const ch = Array.isArray(channel) ? channel : ['public'];
        let result: { [key: string]: Observer[] } = {};

        for (const element of ch) {
            result[element] = [];
        }

        return result;
    }

    public subscribe(channel: string, o: Observer): void {
        const _channel = this._findChannel(channel);

        if (_channel) {
            const even = (_o: Observer) => _o.constructor.name === o.constructor.name;
            let is_o_found = this.observers[_channel].some(even);

            if (!is_o_found) {
                this.observers[_channel].push(o);
            }
        }
    }

    private _findChannel(channel: string): string | undefined {
        return Object.keys(this.observers).find(element => element === channel) || 'public';
    }

    public unsubscribe(channel: string, o: Observer): void {
        const _channel : any = this._findChannel(channel);
        this.observers[_channel] = this.observers[_channel].filter(subscriber => subscriber !== o);
    }

    public notify(channel: string, message: any): void {
        const _channel : any = this._findChannel(channel);
        this.observers[_channel].forEach(observer => observer.update(message));
    }
}

class ScrollObserver {
    private static channels: { [channel: string]: number };

    constructor(channel: string[]) {
        ScrollObserver.channels = this._makeChannel(channel);
    }

    private _makeChannel(channel: string[]): { [channel: string]: number } {
        let ch: { [channel: string]: number } = {};
        channel.forEach((k : string) => {
            ch[k] = 0;
        });
        return ch;
    }

    static _findChannel(channel: string): string {
        const keys = Object.keys(ScrollObserver.channels);
        let found = keys.find(element => element == channel);
        return found || '';
    }

    static _setPos(channel: string, pos: number) {
        if (ScrollObserver._findChannel(channel)) {
            ScrollObserver.channels[channel] = pos;
        }
    }

    static _getPos(channel: string): number {
        let pos = 0;
        if (ScrollObserver._findChannel(channel)) {
            pos = ScrollObserver.channels[channel];
        }
        return pos;
    }
}

interface WebBrowser {
    agent?: string;
    subagent: RegExp;
    prop?: any;
    identity: string;
    versionSearch?: string;
}

interface OperatingSystem {
    agent: string;
    subagent: RegExp;
    identity: string;
}

const OS : OperatingSystem[] = [
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
const browsers: WebBrowser[] = [
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
    static browser: string;
    static version: string | number;
    static os: string;
    static lang: string;
    private versionSearchString: string;

    constructor() {
        this.versionSearchString = ''
        App.browser = this.findPlatform(browsers) || "unknown";
        App.version = this.getPlatformVersion(navigator.userAgent)
            || this.getPlatformVersion(navigator.appVersion)
            || "unknown";
        App.os = this.findPlatform(OS) || "unknown";
        App.lang = this.getLanguage() || '';
    }

    static getLocale(): string {
        let language = '';
        config.surport_langs.forEach(function(lng){
            if(App.lang == lng){
                language = '_'+lng;
            }
        });
        return (language) ? language : '';
    }

    private findPlatform(data: WebBrowser[]): string {

        for (let i = 0; i < data.length; i++) {
            const dataString = data[i].agent;
            const dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString && data[i].subagent.test(dataString)) {
                return data[i].identity;
            } else if (dataProp) {
                return data[i].identity;
            }
        }
        return '';
    }

    private getPlatformVersion(data: string): number | undefined {
        const index = data.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(data.substring(index + this.versionSearchString.length + 1));
    }

    private getLanguage(): string {
        let language = navigator.language;
        language = language.toLowerCase();
        language = language.substring(0, 2); // first 2 characters
        if(['cn', 'tw', 'zh'].includes(language)) {
            language = 'cn';  // Assuming you want to default to 'cn' if any of these are the language
        }
        return language;
    }
}

new App();

// console.log
class Log {
    static d (...args: any[]) {
        this.print_('d', args);
    }

    static i (...args: any[]) {
        this.print_('i', args);
    }

    static v (...args: any[]) {
        this.print_('v', args);
    }

    static w (...args: any[]) {
        this.print_('w', args);
    }

    static e (...args: any[]) {
        this.print_('e', args);
    }

    static print_(log_type:string, args : any[]) : void
    {
        if(config.debug.some(el => el == log_type))
        {
            const logs = args.map(arg => {
                if (typeof arg === 'object') { return JSON.stringify(arg); }
                return arg;
            });
            console.log('%c'+echoNowDate()+` >> ${log_type.toUpperCase()} : `+logs.join(' | '), `color:${config.debug_colors[log_type]}`);
        }
    }

    static clear(){
        console.clear();
    }
}

class ProgressBars {
    private static progressObj: HTMLElement | null;

    constructor(load: string = '') {
        const loading: string = load || '<svg width="40px"  height="40px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;"><circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#55ad15" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(347.727 50.0001 50.0001)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>';

        Promise.resolve((document.querySelector('body')?.insertAdjacentHTML('afterend',`<div id="loading" class="loading" style="display:none;">${loading}</div>`)))
        .then(() => {
            ProgressBars.progressObj = document.querySelector('#loading');
        });
    }

    static show(): void {
        Handler.post(() => {
            if (ProgressBars.progressObj) {
                ProgressBars.progressObj.style.display = 'block';
            }
        }, 10);
    }

    static close(): void {
        Handler.post(() => {
            if (ProgressBars.progressObj) {
                ProgressBars.progressObj.style.display = 'none';
            }
        }, 100);
    }
}

function echoNowDate(): string {
    const today: Date = new Date();

    const dayNames: string[] = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
    const day: string = dayNames[today.getDay()];

    const year: number = today.getFullYear();
    let month: string | number = today.getMonth() + 1;
    const date: number = today.getDate();
    let hour: number = today.getHours();
    let minute: any = today.getMinutes();
    let second: any = today.getSeconds();
    const ampm: string = hour >= 12 ? 'PM' : 'AM';

    hour %= 12;
    hour = hour || 12;  // 0 => 12

    month = month < 10 ? '0' + month : month;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    return `${year}-${month}-${date} ${ampm} ${hour}:${minute}:${second}`;
}


type RunnableCallback = (timestamp?: number) => void;

const Runnable = function(callback: RunnableCallback): number {
    const reqAnimFrame = window.requestAnimationFrame;

    if (reqAnimFrame) {
        return reqAnimFrame(callback);
    } else {
        if (typeof callback === 'function') {
            return window.setTimeout(callback, 0);
        }
        return 0;
    }
};

const Handler = {
    post(callback: RunnableCallback, delay: number) {
        setTimeout(() => {
            Runnable(callback);
        }, delay);
    }
};

class Activity {
    static bottomthird: HTMLElement | null;
    static bottomside: HTMLElement | null;
    static bottom: HTMLElement | null;
    static rightthird: HTMLElement | null;
    static rightside: HTMLElement | null;
    static right: HTMLElement | null;
    static drawer_menu: HTMLElement | null;
    static layout_panel: Record<string, { id: string; target: string | null; toggle: string }>;
    static push_state: string = '';
    static history_state: Record<string, string> = {
        'left': '',
        'right': '',
        'rightside': '',
        'rightthird': '',
        'bottom': '',
        'bottomside': '',
        'bottomthird': '',
        'drawer_menu': '',
    };

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

    public onCreateView() {
        // Implement this method
    }

    static inentView(url: string, delaytime: number = 0) {
        Handler.post(() => {
            window.location.href = url;
        }, delaytime);
    }

    static onStart(panel_id: string) {
        if (panel_id !== null) {
            Activity.push_state = panel_id ? panel_id.replace('#', '') : '';
            if (typeof window.location.hash !== 'undefined') {
                Activity.history_state[Activity.push_state] = window.location.hash;
            }

            let panel = Activity.layout_panel[Activity.push_state];
            if (panel.target !== null) {
                let classname = panel.toggle;
                if (!document.querySelector(panel.id)!.classList.contains(classname)) {
                    Handler.post(() => {
                        document.querySelector(panel.target??panel_id)!.classList.toggle(classname);
                    }, 10);
                }
            }
        }
    }

    static onStop(panel_id: string) {
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

    public onBackPressed(callback: (state: { id: string, state: string }) => void): void {
        window.onpopstate = function (event) {
            let is_Trusted = false;
            if (typeof event.isTrusted !== 'undefined' && event.isTrusted) {
                is_Trusted = true;
            } else if (typeof event.state !== 'undefined' && event.state !== 'null') {
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
                } else if (Activity.bottomside && Activity.bottomside.classList.contains('bottomside_transitioned')) {
                    config_history_state.id = '#bottomside';
                    config_history_state.state = Activity.history_state.bottomside ? Activity.history_state.bottomside : Activity.history_state[Activity.push_state];
                    Activity.bottomside.classList.toggle('bottomside_transitioned');
                } else if (Activity.bottom && Activity.bottom.classList.contains('bottom_transitioned')) {
                    config_history_state.id = '#bottom';
                    config_history_state.state = Activity.history_state.bottom ? Activity.history_state.bottom : Activity.history_state[Activity.push_state];
                    Activity.bottom.classList.toggle('bottom_transitioned');
                } else if (Activity.rightthird && Activity.rightthird.classList.contains('rightthird_transitioned')) {
                    config_history_state.id = '#rightthird';
                    config_history_state.state = Activity.history_state.rightthird ? Activity.history_state.rightthird : Activity.history_state[Activity.push_state];
                    Activity.rightthird.classList.toggle('rightthird_transitioned');
                } else if (Activity.rightside && Activity.rightside.classList.contains('rightside_transitioned')) {
                    config_history_state.id = '#rightside';
                    config_history_state.state = Activity.history_state.rightside ? Activity.history_state.rightside : Activity.history_state[Activity.push_state];
                    Activity.rightside.classList.toggle('rightside_transitioned');
                } else if (Activity.right && Activity.right.classList.contains('transitioned')) {
                    config_history_state.id = '#right';
                    config_history_state.state = Activity.history_state.right ? Activity.history_state.right : Activity.history_state[Activity.push_state];
                    Activity.right.classList.toggle('transitioned');
                } else if (Activity.drawer_menu && Activity.drawer_menu.classList.contains('drawer_transitioned')) {
                    config_history_state.id = '#drawer_menu';
                    config_history_state.state = Activity.history_state.drawer_menu ? Activity.history_state.drawer_menu : Activity.history_state[Activity.push_state];
                    Activity.drawer_menu.classList.toggle('drawer_transitioned');
                } else {
                    config_history_state.id = '#left';
                    config_history_state.state = Activity.history_state.left ? Activity.history_state.left : Activity.history_state[Activity.push_state];
                }

                callback(config_history_state);
            }
        };
    }

    static onBackButtonEvent(id: string, callback?: (url: URL) => void) {
        const btn_backey: HTMLElement | null = document.querySelector(id);
        if (btn_backey) {
            btn_backey.addEventListener('click', function (e) {
                e.preventDefault();

                if (callback) {
                    callback(new URL(window.location.href));
                } else {
                    history.go(-1);
                }
            });
        }
    }
}

class R {
    static [propName: string]: any;
    static async __init(resources : {[key:string]: string}) {
        try {
            for (const [key, path] of Object.entries(resources)) {
                const resourceData = await import(path);
                R[key] = resourceData.default;
            }
        } catch (err) {
            throw new Error("Error loading resource: " + err);
        }
    }
}