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
    div.classList.add('panel', 'fvue--layout', 'transition');
    const zIndex = ++this.zIndexCounter;
    div.style.zIndex = `${zIndex}`;
    div.setAttribute('id', `activityId${zIndex}`);
    div.innerHTML = `<p>Activity ${this.zIndexCounter}</p>`;
    this.panels.push(div);
    return div;
  }
  static onStart(fromClassList, toClassList) {
    const animation = this.animations['fvue-slide'];
    if (!animation)
    return;
    // 사용 중이지 않은 패널 찾기
    let panel = this.panels.find((div) => !div.classList.contains(animation.className));
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
    this.history_state[panel.id] = document.location.toString() ? Activity.getQueryParams(document.location.toString()) : {};
    return panel.id;
  }
  static transClassList(mode, element, userClass) {
    if (userClass.trim()) {
      const hasWhitespace = /\s/.test(userClass);
      if (hasWhitespace) {
        userClass.split(' ').forEach((cls) => {
          if (mode == 'add')
          element.classList.add(cls.trim());else

          element.classList.remove(cls.trim());
        });
      } else
      {
        if (mode == 'add')
        element.classList.add(userClass.trim());else

        element.classList.remove(userClass.trim());
      }
    }
  }
  static doTransition(element, className, fromClassList, toClassList) {
    if (!this.transitioned.includes(element)) {
      element.classList.remove('hidden');
      element.classList.add(className);
      this.transitioned.push(element);
      const userClass = toClassList + ',' + fromClassList;
      this.transitionedUserClass.push(userClass);
      this.transClassList('add', element, fromClassList);
      Handler.post(() => {
        this.transClassList('add', element, toClassList);
      }, 50);
    } else
    {
      const index = this.transitioned.indexOf(element);
      if (index > -1) {
        this.transitioned.splice(index, 1);
      }
    }
  }
  static getQueryParams(url) {
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
            const userClass = lastUserClassList.split(',');
            Activity.transClassList('remove', lastTransitioned, userClass[0]);
            Handler.post(() => {
              Activity.transClassList('remove', lastTransitioned, userClass[1]);
              lastTransitioned.classList.add('hidden');
            }, 50);
          }
          callback({
            id: lastTransitioned.id,
            state: Activity.history_state[lastTransitioned.id]
          });
        } else
        {
          // 이전 URL 경로를 얻음
          const previousUrl = event.state && event.state.previousUrl ? event.state.previousUrl : document.referrer;
          callback({
            id: '',
            state: Activity.getQueryParams(previousUrl)
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
Activity.history_state = {};
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