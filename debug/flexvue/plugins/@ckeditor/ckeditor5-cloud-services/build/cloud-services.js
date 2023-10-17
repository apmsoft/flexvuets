"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
(() => {
  var e = {
      704: (e, t, r) => {
        e.exports = r(79)("./src/core.js");
      },
      209: (e, t, r) => {
        e.exports = r(79)("./src/utils.js");
      },
      79: e => {
        "use strict";

        e.exports = CKEditor5.dll;
      }
    },
    t = {};
  function r(s) {
    var o = t[s];
    if (void 0 !== o) return o.exports;
    var n = t[s] = {
      exports: {}
    };
    return e[s](n, n.exports, r), n.exports;
  }
  r.d = (e, t) => {
    for (var s in t) r.o(t, s) && !r.o(e, s) && Object.defineProperty(e, s, {
      enumerable: !0,
      get: t[s]
    });
  }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  };
  var s = {};
  (() => {
    "use strict";

    r.r(s), r.d(s, {
      CloudServices: () => d,
      CloudServicesCore: () => h
    });
    var e = r(704),
      t = r(209);
    const o = {
        autoRefresh: !0
      },
      n = 36e5;
    class i extends (0, t.ObservableMixin)() {
      constructor(e, r = {}) {
        if (super(), !e) throw new t.CKEditorError("token-missing-token-url", this);
        r.initValue && this._validateTokenValue(r.initValue), this.set("value", r.initValue), this._refresh = "function" == typeof e ? e : () => {
          return r = e, new Promise((e, s) => {
            const o = new XMLHttpRequest();
            o.open("GET", r), o.addEventListener("load", () => {
              const r = o.status,
                n = o.response;
              return r < 200 || r > 299 ? s(new t.CKEditorError("token-cannot-download-new-token", null)) : e(n);
            }), o.addEventListener("error", () => s(new Error("Network Error"))), o.addEventListener("abort", () => s(new Error("Abort"))), o.send();
          });
          var r;
        }, this._options = Object.assign(Object.assign({}, o), r);
      }
      init() {
        return new Promise((e, t) => {
          this.value ? (this._options.autoRefresh && this._registerRefreshTokenTimeout(), e(this)) : this.refreshToken().then(e).catch(t);
        });
      }
      refreshToken() {
        return this._refresh().then(e => (this._validateTokenValue(e), this.set("value", e), this._options.autoRefresh && this._registerRefreshTokenTimeout(), this));
      }
      destroy() {
        clearTimeout(this._tokenRefreshTimeout);
      }
      _validateTokenValue(e) {
        const r = "string" == typeof e,
          s = !/^".*"$/.test(e),
          o = r && 3 === e.split(".").length;
        if (!s || !o) throw new t.CKEditorError("token-not-in-jwt-format", this);
      }
      _registerRefreshTokenTimeout() {
        const e = this._getTokenRefreshTimeoutTime();
        clearTimeout(this._tokenRefreshTimeout), this._tokenRefreshTimeout = setTimeout(() => {
          this.refreshToken();
        }, e);
      }
      _getTokenRefreshTimeoutTime() {
        try {
          const [, e] = this.value.split("."),
            {
              exp: t
            } = JSON.parse(atob(e));
          if (!t) return n;
          return Math.floor((1e3 * t - Date.now()) / 2);
        } catch (e) {
          return n;
        }
      }
      static create(e, t = {}) {
        return new i(e, t).init();
      }
    }
    const a = /^data:(\S*?);base64,/;
    class u extends (0, t.EmitterMixin)() {
      constructor(e, r, s) {
        if (super(), !e) throw new t.CKEditorError("fileuploader-missing-file", null);
        if (!r) throw new t.CKEditorError("fileuploader-missing-token", null);
        if (!s) throw new t.CKEditorError("fileuploader-missing-api-address", null);
        this.file = function (e) {
          if ("string" != typeof e) return !1;
          const t = e.match(a);
          return !(!t || !t.length);
        }(e) ? function (e, r = 512) {
          try {
            const t = e.match(a)[1],
              s = atob(e.replace(a, "")),
              o = [];
            for (let e = 0; e < s.length; e += r) {
              const t = s.slice(e, e + r),
                n = new Array(t.length);
              for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
              o.push(new Uint8Array(n));
            }
            return new Blob(o, {
              type: t
            });
          } catch (e) {
            throw new t.CKEditorError("fileuploader-decoding-image-data-error", null);
          }
        }(e) : e, this._token = r, this._apiAddress = s;
      }
      onProgress(e) {
        return this.on("progress", (t, r) => e(r)), this;
      }
      onError(e) {
        return this.once("error", (t, r) => e(r)), this;
      }
      abort() {
        this.xhr.abort();
      }
      send() {
        return this._prepareRequest(), this._attachXHRListeners(), this._sendRequest();
      }
      _prepareRequest() {
        const e = new XMLHttpRequest();
        e.open("POST", this._apiAddress), e.setRequestHeader("Authorization", this._token.value), e.responseType = "json", this.xhr = e;
      }
      _attachXHRListeners() {
        const e = this.xhr,
          t = e => () => this.fire("error", e);
        e.addEventListener("error", t("Network Error")), e.addEventListener("abort", t("Abort")), e.upload && e.upload.addEventListener("progress", e => {
          e.lengthComputable && this.fire("progress", {
            total: e.total,
            uploaded: e.loaded
          });
        }), e.addEventListener("load", () => {
          const t = e.status,
            r = e.response;
          if (t < 200 || t > 299) return this.fire("error", r.message || r.error);
        });
      }
      _sendRequest() {
        const e = new FormData(),
          r = this.xhr;
        return e.append("file", this.file), new Promise((s, o) => {
          r.addEventListener("load", () => {
            const e = r.status,
              n = r.response;
            return e < 200 || e > 299 ? n.message ? o(new t.CKEditorError("fileuploader-uploading-data-failed", this, {
              message: n.message
            })) : o(n.error) : s(n);
          }), r.addEventListener("error", () => o(new Error("Network Error"))), r.addEventListener("abort", () => o(new Error("Abort"))), r.send(e);
        });
      }
    }
    class l {
      constructor(e, r) {
        if (!e) throw new t.CKEditorError("uploadgateway-missing-token", null);
        if (!r) throw new t.CKEditorError("uploadgateway-missing-api-address", null);
        this._token = e, this._apiAddress = r;
      }
      upload(e) {
        return new u(e, this._token, this._apiAddress);
      }
    }
    class h extends e.ContextPlugin {
      static get pluginName() {
        return "CloudServicesCore";
      }
      createToken(e, t) {
        return new i(e, t);
      }
      createUploadGateway(e, t) {
        return new l(e, t);
      }
    }
    class d extends e.ContextPlugin {
      constructor() {
        super(...arguments), this.token = null, this._tokens = new Map();
      }
      static get pluginName() {
        return "CloudServices";
      }
      static get requires() {
        return [h];
      }
      init() {
        return __awaiter(this, void 0, void 0, function* () {
          const e = this.context.config.get("cloudServices") || {};
          for (const [t, r] of Object.entries(e)) this[t] = r;
          if (!this.tokenUrl) return void (this.token = null);
          const t = this.context.plugins.get("CloudServicesCore");
          this.token = yield t.createToken(this.tokenUrl).init(), this._tokens.set(this.tokenUrl, this.token);
        });
      }
      registerTokenUrl(e) {
        return __awaiter(this, void 0, void 0, function* () {
          if (this._tokens.has(e)) return this.getTokenFor(e);
          const t = this.context.plugins.get("CloudServicesCore"),
            r = yield t.createToken(e).init();
          return this._tokens.set(e, r), r;
        });
      }
      getTokenFor(e) {
        const r = this._tokens.get(e);
        if (!r) throw new t.CKEditorError("cloudservices-token-not-registered", this);
        return r;
      }
      destroy() {
        super.destroy();
        for (const e of this._tokens.values()) e.destroy();
      }
    }
  })(), (window.CKEditor5 = window.CKEditor5 || {}).cloudServices = s;
})();