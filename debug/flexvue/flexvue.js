"use strict";
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}
    function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}
    function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
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
  _history_state: {
    id: '#left',
    state: ''
  },
  _options_: {
    cache: 'no-cache',
    mode: 'cors',
    verify: false
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
  src: 'src',
  surport_langs: []
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
    return Object.keys(this.observers).find((element) => element === channel) || 'public';
  }
  unsubscribe(channel, o) {
    const _channel = this._findChannel(channel);
    this.observers[_channel] = this.observers[_channel].filter((subscriber) => subscriber !== o);
  }
  notify(channel, message) {
    return __awaiter(this, void 0, void 0, function* () {
      const _channel = this._findChannel(channel);
      yield Promise.all(this.observers[_channel].map((observer) => observer.update(message)));
    });
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
    let found = keys.find((element) => element == channel);
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
}];

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
}];

// application
class App {
  constructor() {
    this.resources = {};
    this.versionSearchString = '';
    App.browser = this.findPlatform(browsers) || "unknown";
    App.version = this.getPlatformVersion(navigator.userAgent) ||
    this.getPlatformVersion(navigator.appVersion) ||
    "unknown";
    App.os = this.findPlatform(OS) || "unknown";
    App.lang = this.getLanguage() || '';
  }
  // 지원언어 설정
  setLanguages(langs) {
    config.surport_langs = langs;
    return this;
  }
  setResoures(import_url, resources = ['sysmsg', 'arrays', 'strings', 'numbers']) {
    resources.forEach((name) => {
      this.resources[name] = new URL(`../js/values/${name}${App.getLocale()}.js`, import_url).href;
    });
    return this;
  }
  // DOMContentLoaded
  run(callback) {
    document.addEventListener("DOMContentLoaded", () => {
      R.__init(this.resources).then(() => {
        callback();
      }).catch((err) => {
        console.error("Error initializing R:", err);
      });
    });
  }
  static getLocale() {
    let language = '';
    config.surport_langs.forEach(function (lng) {
      if (App.lang == lng) {
        language = '_' + lng;
      }
    });
    return language ? language : '';
  }
  findPlatform(data) {
    for (let i = 0; i < data.length; i++) {
      const dataString = data[i].agent;
      const dataProp = data[i].prop;
      this.versionSearchString = data[i].versionSearch || data[i].identity;
      if (dataString && data[i].subagent.test(dataString)) {
        return data[i].identity;
      } else
      if (dataProp) {
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
    if (config.debug.some((el) => el == log_type)) {
      const logs = args.map((arg) => {
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
    Promise.resolve((_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterend', `<div id="loading" class="loading" style="display:none;">${loading}</div>`)).
    then(() => {
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
  } else
  {
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
  static createPanel() {
    const div = document.createElement('div');
    div.classList.add('fvue--layout', 'panel', 'transition');
    const zIndex = ++this.zIndexCounter;
    div.style.zIndex = `${zIndex}`;
    div.setAttribute('id', `panelId${zIndex}`);
    div.innerHTML = `<p>Panel ${this.zIndexCounter}</p>`;
    this.panels.push(div);
    return div;
  }
  static onStart(fromClassList, toClassList) {
    const animation = this.animations['fvue-slide'];
    if (!animation)
    return;
    // 사용 중이지 않은 패널 찾기
    let panel = this.panels.find((div) => !div.classList.contains(animation.className));
    console.log(panel);
    // 패널이 없으면 새로 생성
    if (!panel) {
      panel = this.createPanel();
      document.body.appendChild(panel);
      this.doTransition(panel, animation.className, fromClassList, toClassList);
    } else
    {
      // 패널 재사용 시 기존 애니메이션 클래스 제거 후 새 애니메이션 클래스 추가
      for (const animType in this.animations) {
        const anim = this.animations[animType];
        panel.classList.remove(anim.className);
      }
      this.doTransition(panel, animation.className, fromClassList, toClassList);
    }
    return panel.id;
  }
  static doTransition(element, className, fromClassList, toClassList) {
    if (!this.transitioned.includes(element)) {
      element.classList.remove('hidden');
      element.classList.add(className);
      this.transitioned.push(element);
      const userClass = fromClassList + ' ' + toClassList;
      this.transitionedUserClass.push(userClass);
      if (userClass.trim()) {
        const hasWhitespace = /\s/.test(userClass);
        if (hasWhitespace) {
          userClass.split(' ').forEach((cls) => {
            element.classList.add(cls.trim());
          });
        } else
        {
          element.classList.add(userClass.trim());
        }
      }
    } else
    {
      const index = this.transitioned.indexOf(element);
      if (index > -1) {
        this.transitioned.splice(index, 1);
      }
    }
  }
  static onBackPressed(callback) {
    window.onpopstate = function (event) {
      let isTrusted = false;
      if (typeof event.isTrusted !== 'undefined' && event.isTrusted) {
        isTrusted = true;
      } else
      if (typeof event.state !== 'undefined' && event.state !== null) {
        isTrusted = true;
      }
      if (isTrusted) {
        if (Activity.transitioned.length > 0) {
          const lastTransitioned = Activity.transitioned.pop();
          const lastUserClassList = Activity.transitionedUserClass.pop();
          for (const type in Activity.animations) {
            lastTransitioned.classList.remove('fvue-slide');
            if (lastUserClassList.trim()) {
              const hasWhitespace = /\s/.test(lastUserClassList);
              if (hasWhitespace) {
                lastUserClassList.split(' ').forEach((cls) => {
                  lastTransitioned.classList.remove(cls.trim());
                });
              } else
              {
                lastTransitioned.classList.remove(lastUserClassList.trim());
              }
            }
            lastTransitioned.classList.add('hidden');
          }
          // 이전 URL 경로를 얻음
          const previousUrl = event.state && event.state.previousUrl ? event.state.previousUrl : document.referrer;
          callback({
            id: lastTransitioned.id,
            state: previousUrl
          });
        } else
        {
          // 이전 URL 경로를 얻음
          const previousUrl = event.state && event.state.previousUrl ? event.state.previousUrl : document.referrer;
          callback({
            id: '',
            state: previousUrl
          });
        }
      }
    };
  }
}
Activity.zIndexCounter = 0;
Activity.panels = [];
Activity.transitioned = [];
Activity.transitionedUserClass = [];
Activity.animations = {
  'fvue-slide': { className: 'fvue-slide' }
};
// class Activity {
//     static bottomthird: HTMLElement | null;
//     static bottomside: HTMLElement | null;
//     static bottom: HTMLElement | null;
//     static rightthird: HTMLElement | null;
//     static rightside: HTMLElement | null;
//     static right: HTMLElement | null;
//     static drawer_menu: HTMLElement | null;
//     static layout_panel: Record<string, { id: string; target: string | null; toggle: string }>;
//     static push_state: string = '';
//     static history_state: Record<string, string> = {
//         'left': '',
//         'right': '',
//         'rightside': '',
//         'rightthird': '',
//         'bottom': '',
//         'bottomside': '',
//         'bottomthird': '',
//         'drawer_menu': '',
//     };
//     constructor() {
//         Activity.bottomthird = document.querySelector("#bottomthird");
//         Activity.bottomside = document.querySelector("#bottomside");
//         Activity.bottom = document.querySelector("#bottom");
//         Activity.rightthird = document.querySelector("#rightthird");
//         Activity.rightside = document.querySelector("#rightside");
//         Activity.right = document.querySelector("#right");
//         Activity.drawer_menu = document.querySelector("#drawer_menu");
//         Activity.layout_panel = {
//             left: {
//                 id: '#left',
//                 target: null,
//                 toggle: '',
//             },
//             right: {
//                 id: '#right',
//                 target: '#right',
//                 toggle: 'transitioned',
//             },
//             rightside: {
//                 id: '#rightside',
//                 target: '#rightside',
//                 toggle: 'rightside_transitioned',
//             },
//             rightthird: {
//                 id: '#rightthird',
//                 target: '#rightthird',
//                 toggle: 'rightthird_transitioned',
//             },
//             bottom: {
//                 id: '#bottom',
//                 target: '#bottom',
//                 toggle: 'bottom_transitioned',
//             },
//             bottomside: {
//                 id: '#bottomside',
//                 target: '#bottomside',
//                 toggle: 'bottomside_transitioned',
//             },
//             bottomthird: {
//                 id: '#bottomthird',
//                 target: '#bottomthird',
//                 toggle: 'bottomthird_transitioned',
//             },
//             drawer_menu: {
//                 id: '#drawer_menu',
//                 target: '#drawer_menu',
//                 toggle: 'drawer_transitioned',
//             },
//         };
//     }
//     public onCreateView() {
//         // Implement this method
//     }
//     static inentView(url: string, delaytime: number = 0) {
//         Handler.post(() => {
//             window.location.href = url;
//         }, delaytime);
//     }
//     static onStart(panel_id: string) {
//         if (panel_id !== null) {
//             Activity.push_state = panel_id ? panel_id.replace('#', '') : '';
//             if (typeof window.location.hash !== 'undefined') {
//                 Activity.history_state[Activity.push_state] = window.location.hash;
//             }
//             let panel = Activity.layout_panel[Activity.push_state];
//             if (panel.target !== null) {
//                 let classname = panel.toggle;
//                 if (!document.querySelector(panel.id)!.classList.contains(classname)) {
//                     Handler.post(() => {
//                         document.querySelector(panel.target??panel_id)!.classList.toggle(classname);
//                     }, 10);
//                 }
//             }
//         }
//     }
//     static onStop(panel_id: string) {
//         panel_id = panel_id ? panel_id.replace('#', '') : '';
//         switch (panel_id) {
//             case 'bottomthird':
//                 if (Activity.bottomthird && Activity.bottomthird.classList.contains('bottomthird_transitioned')) {
//                     Activity.bottomthird.classList.toggle('bottomthird_transitioned');
//                 }
//                 break;
//             case 'bottomside':
//                 if (Activity.bottomside && Activity.bottomside.classList.contains('bottomside_transitioned')) {
//                     Activity.bottomside.classList.toggle('bottomside_transitioned');
//                 }
//                 break;
//             case 'bottom':
//                 if (Activity.bottom && Activity.bottom.classList.contains('bottom_transitioned')) {
//                     Activity.bottom.classList.toggle('bottom_transitioned');
//                 }
//                 break;
//             case 'rightthird':
//                 if (Activity.rightthird && Activity.rightthird.classList.contains('rightthird_transitioned')) {
//                     Activity.rightthird.classList.toggle('rightthird_transitioned');
//                 }
//                 break;
//             case 'rightside':
//                 if (Activity.rightside && Activity.rightside.classList.contains('rightside_transitioned')) {
//                     Activity.rightside.classList.toggle('rightside_transitioned');
//                 }
//                 break;
//             case 'right':
//                 if (Activity.right && Activity.right.classList.contains('transitioned')) {
//                     Activity.right.classList.toggle('transitioned');
//                 }
//                 break;
//             case 'drawer_menu':
//                 if (Activity.drawer_menu && Activity.drawer_menu.classList.contains('drawer_transitioned')) {
//                     Activity.drawer_menu.classList.toggle('drawer_transitioned');
//                 }
//                 break;
//         }
//     }
//     public onBackPressed(callback: (state: { id: string, state: string }) => void): void {
//         window.onpopstate = function (event) {
//             let is_Trusted = false;
//             if (typeof event.isTrusted !== 'undefined' && event.isTrusted) {
//                 is_Trusted = true;
//             } else if (typeof event.state !== 'undefined' && event.state !== 'null') {
//                 is_Trusted = true;
//             }
//             if (is_Trusted) {
//                 let config_history_state = {
//                     id: '#left',
//                     state: '',
//                 };
//                 if (Activity.bottomthird && Activity.bottomthird.classList.contains('bottomthird_transitioned')) {
//                     config_history_state.id = '#bottomthird';
//                     config_history_state.state = Activity.history_state.bottomthird ? Activity.history_state.bottomthird : Activity.history_state[Activity.push_state];
//                     Activity.bottomthird.classList.toggle('bottomthird_transitioned');
//                 } else if (Activity.bottomside && Activity.bottomside.classList.contains('bottomside_transitioned')) {
//                     config_history_state.id = '#bottomside';
//                     config_history_state.state = Activity.history_state.bottomside ? Activity.history_state.bottomside : Activity.history_state[Activity.push_state];
//                     Activity.bottomside.classList.toggle('bottomside_transitioned');
//                 } else if (Activity.bottom && Activity.bottom.classList.contains('bottom_transitioned')) {
//                     config_history_state.id = '#bottom';
//                     config_history_state.state = Activity.history_state.bottom ? Activity.history_state.bottom : Activity.history_state[Activity.push_state];
//                     Activity.bottom.classList.toggle('bottom_transitioned');
//                 } else if (Activity.rightthird && Activity.rightthird.classList.contains('rightthird_transitioned')) {
//                     config_history_state.id = '#rightthird';
//                     config_history_state.state = Activity.history_state.rightthird ? Activity.history_state.rightthird : Activity.history_state[Activity.push_state];
//                     Activity.rightthird.classList.toggle('rightthird_transitioned');
//                 } else if (Activity.rightside && Activity.rightside.classList.contains('rightside_transitioned')) {
//                     config_history_state.id = '#rightside';
//                     config_history_state.state = Activity.history_state.rightside ? Activity.history_state.rightside : Activity.history_state[Activity.push_state];
//                     Activity.rightside.classList.toggle('rightside_transitioned');
//                 } else if (Activity.right && Activity.right.classList.contains('transitioned')) {
//                     config_history_state.id = '#right';
//                     config_history_state.state = Activity.history_state.right ? Activity.history_state.right : Activity.history_state[Activity.push_state];
//                     Activity.right.classList.toggle('transitioned');
//                 } else if (Activity.drawer_menu && Activity.drawer_menu.classList.contains('drawer_transitioned')) {
//                     config_history_state.id = '#drawer_menu';
//                     config_history_state.state = Activity.history_state.drawer_menu ? Activity.history_state.drawer_menu : Activity.history_state[Activity.push_state];
//                     Activity.drawer_menu.classList.toggle('drawer_transitioned');
//                 } else {
//                     config_history_state.id = '#left';
//                     config_history_state.state = Activity.history_state.left ? Activity.history_state.left : Activity.history_state[Activity.push_state];
//                 }
//                 callback(config_history_state);
//             }
//         };
//     }
// }
class R {
  static __init(resources) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        for (const [key, path] of Object.entries(resources)) {
          const resourceData = yield import(path);
          R[key] = resourceData.default;
        }
      }
      catch (err) {
        throw new Error("Error loading resource: " + err);
      }
    });
  }
}