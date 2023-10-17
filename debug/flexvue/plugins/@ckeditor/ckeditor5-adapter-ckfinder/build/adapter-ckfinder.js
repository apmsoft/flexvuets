"use strict";

/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
(() => {
  var e = {
      704: (e, t, r) => {
        e.exports = r(79)("./src/core.js");
      },
      448: (e, t, r) => {
        e.exports = r(79)("./src/upload.js");
      },
      79: e => {
        "use strict";

        e.exports = CKEditor5.dll;
      }
    },
    t = {};
  function r(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var s = t[o] = {
      exports: {}
    };
    return e[o](s, s.exports, r), s.exports;
  }
  r.d = (e, t) => {
    for (var o in t) r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, {
      enumerable: !0,
      get: t[o]
    });
  }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  };
  var o = {};
  (() => {
    "use strict";

    r.r(o), r.d(o, {
      UploadAdapter: () => d
    });
    var e = r(704),
      t = r(448);
    const n = "ckCsrfToken",
      s = "abcdefghijklmnopqrstuvwxyz0123456789";
    function i() {
      let e = function (e) {
        e = e.toLowerCase();
        const t = document.cookie.split(";");
        for (const r of t) {
          const t = r.split("=");
          if (decodeURIComponent(t[0].trim().toLowerCase()) === e) return decodeURIComponent(t[1]);
        }
        return null;
      }(n);
      var t, r;
      return e && 40 == e.length || (e = function (e) {
        let t = "";
        const r = new Uint8Array(e);
        window.crypto.getRandomValues(r);
        for (let e = 0; e < r.length; e++) {
          const o = s.charAt(r[e] % s.length);
          t += Math.random() > .5 ? o.toUpperCase() : o;
        }
        return t;
      }(40), t = n, r = e, document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(r) + ";path=/"), e;
    }
    class d extends e.Plugin {
      static get requires() {
        return [t.FileRepository];
      }
      static get pluginName() {
        return "CKFinderUploadAdapter";
      }
      init() {
        const e = this.editor.config.get("ckfinder.uploadUrl");
        e && (this.editor.plugins.get(t.FileRepository).createUploadAdapter = t => new a(t, e, this.editor.t));
      }
    }
    class a {
      constructor(e, t, r) {
        this.loader = e, this.url = t, this.t = r;
      }
      upload() {
        return this.loader.file.then(e => new Promise((t, r) => {
          this._initRequest(), this._initListeners(t, r, e), this._sendRequest(e);
        }));
      }
      abort() {
        this.xhr && this.xhr.abort();
      }
      _initRequest() {
        const e = this.xhr = new XMLHttpRequest();
        e.open("POST", this.url, !0), e.responseType = "json";
      }
      _initListeners(e, t, r) {
        const o = this.xhr,
          n = this.loader,
          s = (0, this.t)("Cannot upload file:") + ` ${r.name}.`;
        o.addEventListener("error", () => t(s)), o.addEventListener("abort", () => t()), o.addEventListener("load", () => {
          const r = o.response;
          if (!r || !r.uploaded) return t(r && r.error && r.error.message ? r.error.message : s);
          e({
            default: r.url
          });
        }), o.upload && o.upload.addEventListener("progress", e => {
          e.lengthComputable && (n.uploadTotal = e.total, n.uploaded = e.loaded);
        });
      }
      _sendRequest(e) {
        const t = new FormData();
        t.append("upload", e), t.append("ckCsrfToken", i()), this.xhr.send(t);
      }
    }
  })(), (window.CKEditor5 = window.CKEditor5 || {}).adapterCkfinder = o;
})();