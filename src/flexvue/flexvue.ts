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
    version: '3.4',
    int_version: 15,
    debug: ['d', 'i', 'v', 'w', 'e'],
    debug_colors : {
        'd' : '#868686',
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

    async notify(channel: string, message: any) {
        const _channel : any = this._findChannel(channel);
        await Promise.all(this.observers[_channel].map(observer => observer.update(message)));
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
    private resources : {[key:string] : string} = {};

    constructor() {
        this.versionSearchString = ''
        App.browser = this.findPlatform(browsers) || "unknown";
        App.version = this.getPlatformVersion(navigator.userAgent)
            || this.getPlatformVersion(navigator.appVersion)
            || "unknown";
        App.os = this.findPlatform(OS) || "unknown";
        App.lang = this.getLanguage() || '';
    }

    // 지원언어 설정
    setLanguages (langs : string[]) : this {
        config.surport_langs = langs;
    return this;
    }

    setResoures (resources : {[key:string] : string}) : this {
        this.resources = resources;
        return this;
    }

    // DOMContentLoaded
    run (callback : Function ) : void {
        document.addEventListener("DOMContentLoaded", () => {
            R.__init(this.resources).then(() => {
                callback();
            }).catch(err => {
                console.error("Error initializing R:", err);
            });
        });
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
    let month : string | number = today.getMonth() + 1;
    const date: number = today.getDate();
    let hour  : number = today.getHours();
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
    static zIndexCounter        : number = 0;
    static panels               : HTMLDivElement[] = [];
    static transitioned         : {}  = {};
    static animations = {
        'fvue-slide': { className: 'fvue-slide'}
    };
    static historyState : {[key: string]: any} = [];
    static activityState : {[key: string]: any} = [];

    static createPanel(panelid : string): HTMLDivElement {
        const div = document.createElement('div');

        div.classList.add('panel','fvue--layout','flex','transition');
        const zIndex = ++this.zIndexCounter;
        div.style.zIndex = `${zIndex}`;
        div.setAttribute('id', panelid);
        div.innerHTML = `<p>Activity ${this.zIndexCounter}</p>`;
        this.panels.push(div);

        return div;
    }

    // 패널만 미리 생성하기
    static createPanels(...panels : string[]) : void {
        const self = this;
        panels.forEach(panel_id => {
            const panel = self.createPanel(`fvue--activity-${panel_id}`);
            document.body.appendChild(panel);
            panel.classList.add('hidden');
        });
    }

    static setStateHistory(panelid : string) : void {
        const found = this.historyState.find((element) => {
            if(typeof element[panelid] !=='undefined'){
                return element;
            }
        });

        if(typeof found === 'undefined'){
            this.historyState.push({[panelid] : Activity.getQueryParams(document.location.toString())});
            this.activityState.push({[panelid] : null});
            Log.d('setStateHistory >>',this.historyState);
        }
    }

    static setStateActivity(panelid : string, activity : object | null) : void {
        const found = this.historyState.find((element) => {
            if(typeof element[panelid] !=='undefined'){
                return element;
            }
        });
        if(typeof found === 'undefined'){
            this.activityState.push({[panelid] : activity});
            this.historyState.push({[panelid] : Activity.getQueryParams(document.location.toString())});
            Log.d('setStateActivity >>',this.activityState);
        }
    }

    static onStart(fvue_id : string ,fromClassList:string, toClassList : string): string{
        const animation = this.animations['fvue-slide'];
        const panelId = `fvue--activity-${fvue_id}`;

        // 사용 중이지 않은 패널 찾기
        let panel = document.querySelector<HTMLDivElement>('#'+panelId)!;

        // 패널이 없으면 새로 생성
        if (!panel) {
            panel = this.createPanel(panelId);
            document.body.appendChild(panel);
            this.doTransition(panel, animation.className, fromClassList, toClassList);
            this.transitioned[panelId] = toClassList;
            console.log('transitioned',this.transitioned);
        }
        else {
            if(toClassList.trim()){
                this.transitioned[panelId] = toClassList;
            }
            this.doTransition(panel, animation.className,fromClassList, toClassList);
        }

    return panelId;
    }

    static onClose(fvue_id : string) : void {
        const panelWindow = document.querySelector<HTMLDivElement>(`#${fvue_id}`)!;
        if(panelWindow){
            panelWindow.classList.add('hidden');
            if (this.transitioned[fvue_id]) {
                this.transClassList('remove', panelWindow, this.transitioned[fvue_id]);
                this.activityState = (this.activityState.length > 0) ? this.activityState.pop() : [];
                this.historyState = (this.historyState.length > 0) ? this.historyState.pop() : [];
                Log.d('onClose >>',this.activityState);
            }
        }
    }

    static transClassList(mode : string, element, userClass) : void {
        if (userClass.trim()) {
            const hasWhitespace = /\s/.test(userClass);
            if(hasWhitespace){
                userClass.split(' ').forEach(cls => {
                    if(mode == 'add') element.classList.add(cls.trim());
                    else element.classList.remove(cls.trim());
                });
            }else{
                if(mode == 'add') element.classList.add(userClass.trim());
                else element.classList.remove(userClass.trim());
            }
        }
    }

    static doTransition(element: HTMLDivElement, className: string, fromClassList : string, toClassList : string): void 
    {
        element.classList.remove('hidden');
        if(className){element.classList.add(className);}
        if(fromClassList) { this.transClassList('add', element, fromClassList); }
        Handler.post(() => {
            this.transClassList('add', element, toClassList);
        },50);
    }

    static getQueryParams(url : string) {
        const queryParams = {};
        const urlObj = new URL(url);
        const params = new URLSearchParams(urlObj.search);

        // 쿼리 파라미터 파싱
        params.forEach((value, key) => {
            queryParams[key] = value;
        });

        // 해시 부분도 파싱
        if (urlObj.hash) {
            // #을 제거한 후, 실제로 URLSearchParams를 사용할 수 있도록 처리
            const hash = urlObj.hash.substring(1); // #을 제거

            // 해시가 "panelId1/" 같은 경로인 경우, 해시 부분을 분리하여 처리
            const hashParts = hash.split('?');
            if (hashParts.length > 0) {
                queryParams["hashPath"] = hashParts[0];
            }
            if (hashParts.length > 1) {
                const hashParams = new URLSearchParams(hashParts[1]);
                hashParams.forEach((value, key) => {
                    queryParams[key] = value;
                });
            }
        }

        return queryParams;
    }

    static onBackPressed(callback: (state: { id: string, history: {}, activity : object | null }) => void): void {
        const self = this;
        window.onpopstate = function(event) {
            let isTrusted = false;

            if (typeof event.isTrusted !== 'undefined' && event.isTrusted) {
                isTrusted = true;
            } else if (typeof event.state !== 'undefined' && event.state !== null) {
                isTrusted = true;
            }

            if (isTrusted) {
                const historyObj = (self.historyState.length > 0) ? self.historyState.pop() : self.historyState;
                const activityStateObj = self.activityState.length > 0 ? self.activityState.pop() : self.activityState;
                let panelId = "";
                let panelData = {};
                let activity = null;

                if (historyObj && typeof historyObj === 'object') {
                    panelId = Object.keys(historyObj)[0] || "";
                    if (panelId && historyObj[panelId] && typeof historyObj[panelId] === 'object') {
                        panelData = historyObj[panelId];
                    }

                    if(panelId && activityStateObj !==null && typeof activityStateObj[panelId] !=='undefined'){
                        activity = activityStateObj[panelId];
                    }
                }

                callback({
                    id: panelId,
                    history: panelData,
                    activity: activity
                });
            }
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