(function () {
  "use strict";

  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__caption,.image-tool--loading .image-tool__caption{display:none}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--loading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--loading .image-tool__image-picture,.image-tool--loading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')), document.head.appendChild(o);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
(function (_, O) {
  typeof exports == "object" && typeof module < "u" ? module.exports = O() : typeof define == "function" && define.amd ? define(O) : (_ = typeof globalThis < "u" ? globalThis : _ || self, _.ImageTool = O());
})(this, function () {
  "use strict";

  const _ = "",
    O = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>',
    D = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>',
    R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>',
    x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
  function M(E, a = null, i = {}) {
    const c = document.createElement(E);
    Array.isArray(a) ? c.classList.add(...a) : a && c.classList.add(a);
    for (const r in i) c[r] = i[r];
    return c;
  }
  class T {
    constructor({
      api: a,
      config: i,
      onSelectFile: c,
      readOnly: r
    }) {
      this.api = a, this.config = i, this.onSelectFile = c, this.readOnly = r, this.nodes = {
        wrapper: M("div", [this.CSS.baseClass, this.CSS.wrapper]),
        imageContainer: M("div", [this.CSS.imageContainer]),
        fileButton: this.createFileButton(),
        imageEl: void 0,
        imagePreloader: M("div", this.CSS.imagePreloader),
        caption: M("div", [this.CSS.input, this.CSS.caption], {
          contentEditable: !this.readOnly
        })
      }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
    }
    get CSS() {
      return {
        baseClass: this.api.styles.block,
        loading: this.api.styles.loader,
        input: this.api.styles.input,
        button: this.api.styles.button,
        wrapper: "image-tool",
        imageContainer: "image-tool__image",
        imagePreloader: "image-tool__image-preloader",
        imageEl: "image-tool__image-picture",
        caption: "image-tool__caption"
      };
    }
    static get status() {
      return {
        EMPTY: "empty",
        UPLOADING: "loading",
        FILLED: "filled"
      };
    }
    render(a) {
      return !a.file || Object.keys(a.file).length === 0 ? this.toggleStatus(T.status.EMPTY) : this.toggleStatus(T.status.UPLOADING), this.nodes.wrapper;
    }
    createFileButton() {
      const a = M("div", [this.CSS.button]);
      return a.innerHTML = this.config.buttonContent || `${R} ${this.api.i18n.t("Select an Image")}`, a.addEventListener("click", () => {
        this.onSelectFile();
      }), a;
    }
    showPreloader(a) {
      this.nodes.imagePreloader.style.backgroundImage = `url(${a})`, this.toggleStatus(T.status.UPLOADING);
    }
    hidePreloader() {
      this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(T.status.EMPTY);
    }
    fillImage(a) {
      const i = /\.mp4$/.test(a) ? "VIDEO" : "IMG",
        c = {
          src: a
        };
      let r = "load";
      i === "VIDEO" && (c.autoplay = !0, c.loop = !0, c.muted = !0, c.playsinline = !0, r = "loadeddata"), this.nodes.imageEl = M(i, this.CSS.imageEl, c), this.nodes.imageEl.addEventListener(r, () => {
        this.toggleStatus(T.status.FILLED), this.nodes.imagePreloader && (this.nodes.imagePreloader.style.backgroundImage = "");
      }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
    }
    fillCaption(a) {
      this.nodes.caption && (this.nodes.caption.innerHTML = a);
    }
    toggleStatus(a) {
      for (const i in T.status) Object.prototype.hasOwnProperty.call(T.status, i) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${T.status[i]}`, a === T.status[i]);
    }
    applyTune(a, i) {
      this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${a}`, i);
    }
  }
  function U(E) {
    return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
  }
  var H = {
    exports: {}
  };
  (function (E, a) {
    (function (i, c) {
      E.exports = c();
    })(window, function () {
      return function (i) {
        var c = {};
        function r(n) {
          if (c[n]) return c[n].exports;
          var o = c[n] = {
            i: n,
            l: !1,
            exports: {}
          };
          return i[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
        }
        return r.m = i, r.c = c, r.d = function (n, o, d) {
          r.o(n, o) || Object.defineProperty(n, o, {
            enumerable: !0,
            get: d
          });
        }, r.r = function (n) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(n, "__esModule", {
            value: !0
          });
        }, r.t = function (n, o) {
          if (1 & o && (n = r(n)), 8 & o || 4 & o && typeof n == "object" && n && n.__esModule) return n;
          var d = Object.create(null);
          if (r.r(d), Object.defineProperty(d, "default", {
            enumerable: !0,
            value: n
          }), 2 & o && typeof n != "string") for (var b in n) r.d(d, b, function (u) {
            return n[u];
          }.bind(null, b));
          return d;
        }, r.n = function (n) {
          var o = n && n.__esModule ? function () {
            return n.default;
          } : function () {
            return n;
          };
          return r.d(o, "a", o), o;
        }, r.o = function (n, o) {
          return Object.prototype.hasOwnProperty.call(n, o);
        }, r.p = "", r(r.s = 3);
      }([function (i, c) {
        var r;
        r = function () {
          return this;
        }();
        try {
          r = r || new Function("return this")();
        } catch {
          typeof window == "object" && (r = window);
        }
        i.exports = r;
      }, function (i, c, r) {
        (function (n) {
          var o = r(2),
            d = setTimeout;
          function b() {}
          function u(e) {
            if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
            if (typeof e != "function") throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(e, this);
          }
          function p(e, l) {
            for (; e._state === 3;) e = e._value;
            e._state !== 0 ? (e._handled = !0, u._immediateFn(function () {
              var s = e._state === 1 ? l.onFulfilled : l.onRejected;
              if (s !== null) {
                var g;
                try {
                  g = s(e._value);
                } catch (m) {
                  return void y(l.promise, m);
                }
                f(l.promise, g);
              } else (e._state === 1 ? f : y)(l.promise, e._value);
            })) : e._deferreds.push(l);
          }
          function f(e, l) {
            try {
              if (l === e) throw new TypeError("A promise cannot be resolved with itself.");
              if (l && (typeof l == "object" || typeof l == "function")) {
                var s = l.then;
                if (l instanceof u) return e._state = 3, e._value = l, void w(e);
                if (typeof s == "function") return void t((g = s, m = l, function () {
                  g.apply(m, arguments);
                }), e);
              }
              e._state = 1, e._value = l, w(e);
            } catch (h) {
              y(e, h);
            }
            var g, m;
          }
          function y(e, l) {
            e._state = 2, e._value = l, w(e);
          }
          function w(e) {
            e._state === 2 && e._deferreds.length === 0 && u._immediateFn(function () {
              e._handled || u._unhandledRejectionFn(e._value);
            });
            for (var l = 0, s = e._deferreds.length; l < s; l++) p(e, e._deferreds[l]);
            e._deferreds = null;
          }
          function v(e, l, s) {
            this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof l == "function" ? l : null, this.promise = s;
          }
          function t(e, l) {
            var s = !1;
            try {
              e(function (g) {
                s || (s = !0, f(l, g));
              }, function (g) {
                s || (s = !0, y(l, g));
              });
            } catch (g) {
              if (s) return;
              s = !0, y(l, g);
            }
          }
          u.prototype.catch = function (e) {
            return this.then(null, e);
          }, u.prototype.then = function (e, l) {
            var s = new this.constructor(b);
            return p(this, new v(e, l, s)), s;
          }, u.prototype.finally = o.a, u.all = function (e) {
            return new u(function (l, s) {
              if (!e || e.length === void 0) throw new TypeError("Promise.all accepts an array");
              var g = Array.prototype.slice.call(e);
              if (g.length === 0) return l([]);
              var m = g.length;
              function h(S, C) {
                try {
                  if (C && (typeof C == "object" || typeof C == "function")) {
                    var j = C.then;
                    if (typeof j == "function") return void j.call(C, function (I) {
                      h(S, I);
                    }, s);
                  }
                  g[S] = C, --m == 0 && l(g);
                } catch (I) {
                  s(I);
                }
              }
              for (var k = 0; k < g.length; k++) h(k, g[k]);
            });
          }, u.resolve = function (e) {
            return e && typeof e == "object" && e.constructor === u ? e : new u(function (l) {
              l(e);
            });
          }, u.reject = function (e) {
            return new u(function (l, s) {
              s(e);
            });
          }, u.race = function (e) {
            return new u(function (l, s) {
              for (var g = 0, m = e.length; g < m; g++) e[g].then(l, s);
            });
          }, u._immediateFn = typeof n == "function" && function (e) {
            n(e);
          } || function (e) {
            d(e, 0);
          }, u._unhandledRejectionFn = function (e) {
            typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", e);
          }, c.a = u;
        }).call(this, r(5).setImmediate);
      }, function (i, c, r) {
        c.a = function (n) {
          var o = this.constructor;
          return this.then(function (d) {
            return o.resolve(n()).then(function () {
              return d;
            });
          }, function (d) {
            return o.resolve(n()).then(function () {
              return o.reject(d);
            });
          });
        };
      }, function (i, c, r) {
        function n(t) {
          return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
            return typeof e;
          } : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          })(t);
        }
        r(4);
        var o,
          d,
          b,
          u,
          p,
          f,
          y,
          w = r(8),
          v = (d = function (t) {
            return new Promise(function (e, l) {
              t = u(t), (t = p(t)).beforeSend && t.beforeSend();
              var s = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
              s.open(t.method, t.url), s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function (m) {
                var h = t.headers[m];
                s.setRequestHeader(m, h);
              });
              var g = t.ratio;
              s.upload.addEventListener("progress", function (m) {
                var h = Math.round(m.loaded / m.total * 100),
                  k = Math.ceil(h * g / 100);
                t.progress(Math.min(k, 100));
              }, !1), s.addEventListener("progress", function (m) {
                var h = Math.round(m.loaded / m.total * 100),
                  k = Math.ceil(h * (100 - g) / 100) + g;
                t.progress(Math.min(k, 100));
              }, !1), s.onreadystatechange = function () {
                if (s.readyState === 4) {
                  var m = s.response;
                  try {
                    m = JSON.parse(m);
                  } catch {}
                  var h = w.parseHeaders(s.getAllResponseHeaders()),
                    k = {
                      body: m,
                      code: s.status,
                      headers: h
                    };
                  y(s.status) ? e(k) : l(k);
                }
              }, s.send(t.data);
            });
          }, b = function (t) {
            return t.method = "POST", d(t);
          }, u = function () {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (t.url && typeof t.url != "string") throw new Error("Url must be a string");
            if (t.url = t.url || "", t.method && typeof t.method != "string") throw new Error("`method` must be a string or null");
            if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && n(t.headers) !== "object") throw new Error("`headers` must be an object or null");
            if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(o).includes(t.type))) throw new Error("`type` must be taken from module's «contentType» library");
            if (t.progress && typeof t.progress != "function") throw new Error("`progress` must be a function or null");
            if (t.progress = t.progress || function (e) {}, t.beforeSend = t.beforeSend || function (e) {}, t.ratio && typeof t.ratio != "number") throw new Error("`ratio` must be a number");
            if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
            if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
            if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean") throw new Error("`multiple` must be a true or false");
            if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string") throw new Error("`fieldName` must be a string");
            return t.fieldName = t.fieldName || "files", t;
          }, p = function (t) {
            switch (t.method) {
              case "GET":
                var e = f(t.data, o.URLENCODED);
                delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e;
                break;
              case "POST":
              case "PUT":
              case "DELETE":
              case "UPDATE":
                var l = function () {
                  return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || o.JSON;
                }(t);
                (w.isFormData(t.data) || w.isFormElement(t.data)) && (l = o.FORM), t.data = f(t.data, l), l !== v.contentType.FORM && (t.headers["content-type"] = l);
            }
            return t;
          }, f = function () {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            switch (arguments.length > 1 ? arguments[1] : void 0) {
              case o.URLENCODED:
                return w.urlEncode(t);
              case o.JSON:
                return w.jsonEncode(t);
              case o.FORM:
                return w.formEncode(t);
              default:
                return t;
            }
          }, y = function (t) {
            return t >= 200 && t < 300;
          }, {
            contentType: o = {
              URLENCODED: "application/x-www-form-urlencoded; charset=utf-8",
              FORM: "multipart/form-data",
              JSON: "application/json; charset=utf-8"
            },
            request: d,
            get: function (t) {
              return t.method = "GET", d(t);
            },
            post: b,
            transport: function (t) {
              return t = u(t), w.selectFiles(t).then(function (e) {
                for (var l = new FormData(), s = 0; s < e.length; s++) l.append(t.fieldName, e[s], e[s].name);
                w.isObject(t.data) && Object.keys(t.data).forEach(function (m) {
                  var h = t.data[m];
                  l.append(m, h);
                });
                var g = t.beforeSend;
                return t.beforeSend = function () {
                  return g(e);
                }, t.data = l, b(t);
              });
            },
            selectFiles: function (t) {
              return delete (t = u(t)).beforeSend, w.selectFiles(t);
            }
          });
        i.exports = v;
      }, function (i, c, r) {
        r.r(c);
        var n = r(1);
        window.Promise = window.Promise || n.a;
      }, function (i, c, r) {
        (function (n) {
          var o = n !== void 0 && n || typeof self < "u" && self || window,
            d = Function.prototype.apply;
          function b(u, p) {
            this._id = u, this._clearFn = p;
          }
          c.setTimeout = function () {
            return new b(d.call(setTimeout, o, arguments), clearTimeout);
          }, c.setInterval = function () {
            return new b(d.call(setInterval, o, arguments), clearInterval);
          }, c.clearTimeout = c.clearInterval = function (u) {
            u && u.close();
          }, b.prototype.unref = b.prototype.ref = function () {}, b.prototype.close = function () {
            this._clearFn.call(o, this._id);
          }, c.enroll = function (u, p) {
            clearTimeout(u._idleTimeoutId), u._idleTimeout = p;
          }, c.unenroll = function (u) {
            clearTimeout(u._idleTimeoutId), u._idleTimeout = -1;
          }, c._unrefActive = c.active = function (u) {
            clearTimeout(u._idleTimeoutId);
            var p = u._idleTimeout;
            p >= 0 && (u._idleTimeoutId = setTimeout(function () {
              u._onTimeout && u._onTimeout();
            }, p));
          }, r(6), c.setImmediate = typeof self < "u" && self.setImmediate || n !== void 0 && n.setImmediate || this && this.setImmediate, c.clearImmediate = typeof self < "u" && self.clearImmediate || n !== void 0 && n.clearImmediate || this && this.clearImmediate;
        }).call(this, r(0));
      }, function (i, c, r) {
        (function (n, o) {
          (function (d, b) {
            if (!d.setImmediate) {
              var u,
                p,
                f,
                y,
                w,
                v = 1,
                t = {},
                e = !1,
                l = d.document,
                s = Object.getPrototypeOf && Object.getPrototypeOf(d);
              s = s && s.setTimeout ? s : d, {}.toString.call(d.process) === "[object process]" ? u = function (h) {
                o.nextTick(function () {
                  m(h);
                });
              } : function () {
                if (d.postMessage && !d.importScripts) {
                  var h = !0,
                    k = d.onmessage;
                  return d.onmessage = function () {
                    h = !1;
                  }, d.postMessage("", "*"), d.onmessage = k, h;
                }
              }() ? (y = "setImmediate$" + Math.random() + "$", w = function (h) {
                h.source === d && typeof h.data == "string" && h.data.indexOf(y) === 0 && m(+h.data.slice(y.length));
              }, d.addEventListener ? d.addEventListener("message", w, !1) : d.attachEvent("onmessage", w), u = function (h) {
                d.postMessage(y + h, "*");
              }) : d.MessageChannel ? ((f = new MessageChannel()).port1.onmessage = function (h) {
                m(h.data);
              }, u = function (h) {
                f.port2.postMessage(h);
              }) : l && "onreadystatechange" in l.createElement("script") ? (p = l.documentElement, u = function (h) {
                var k = l.createElement("script");
                k.onreadystatechange = function () {
                  m(h), k.onreadystatechange = null, p.removeChild(k), k = null;
                }, p.appendChild(k);
              }) : u = function (h) {
                setTimeout(m, 0, h);
              }, s.setImmediate = function (h) {
                typeof h != "function" && (h = new Function("" + h));
                for (var k = new Array(arguments.length - 1), S = 0; S < k.length; S++) k[S] = arguments[S + 1];
                var C = {
                  callback: h,
                  args: k
                };
                return t[v] = C, u(v), v++;
              }, s.clearImmediate = g;
            }
            function g(h) {
              delete t[h];
            }
            function m(h) {
              if (e) setTimeout(m, 0, h);else {
                var k = t[h];
                if (k) {
                  e = !0;
                  try {
                    (function (S) {
                      var C = S.callback,
                        j = S.args;
                      switch (j.length) {
                        case 0:
                          C();
                          break;
                        case 1:
                          C(j[0]);
                          break;
                        case 2:
                          C(j[0], j[1]);
                          break;
                        case 3:
                          C(j[0], j[1], j[2]);
                          break;
                        default:
                          C.apply(b, j);
                      }
                    })(k);
                  } finally {
                    g(h), e = !1;
                  }
                }
              }
            }
          })(typeof self > "u" ? n === void 0 ? this : n : self);
        }).call(this, r(0), r(7));
      }, function (i, c) {
        var r,
          n,
          o = i.exports = {};
        function d() {
          throw new Error("setTimeout has not been defined");
        }
        function b() {
          throw new Error("clearTimeout has not been defined");
        }
        function u(s) {
          if (r === setTimeout) return setTimeout(s, 0);
          if ((r === d || !r) && setTimeout) return r = setTimeout, setTimeout(s, 0);
          try {
            return r(s, 0);
          } catch {
            try {
              return r.call(null, s, 0);
            } catch {
              return r.call(this, s, 0);
            }
          }
        }
        (function () {
          try {
            r = typeof setTimeout == "function" ? setTimeout : d;
          } catch {
            r = d;
          }
          try {
            n = typeof clearTimeout == "function" ? clearTimeout : b;
          } catch {
            n = b;
          }
        })();
        var p,
          f = [],
          y = !1,
          w = -1;
        function v() {
          y && p && (y = !1, p.length ? f = p.concat(f) : w = -1, f.length && t());
        }
        function t() {
          if (!y) {
            var s = u(v);
            y = !0;
            for (var g = f.length; g;) {
              for (p = f, f = []; ++w < g;) p && p[w].run();
              w = -1, g = f.length;
            }
            p = null, y = !1, function (m) {
              if (n === clearTimeout) return clearTimeout(m);
              if ((n === b || !n) && clearTimeout) return n = clearTimeout, clearTimeout(m);
              try {
                n(m);
              } catch {
                try {
                  return n.call(null, m);
                } catch {
                  return n.call(this, m);
                }
              }
            }(s);
          }
        }
        function e(s, g) {
          this.fun = s, this.array = g;
        }
        function l() {}
        o.nextTick = function (s) {
          var g = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var m = 1; m < arguments.length; m++) g[m - 1] = arguments[m];
          f.push(new e(s, g)), f.length !== 1 || y || u(t);
        }, e.prototype.run = function () {
          this.fun.apply(null, this.array);
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = l, o.addListener = l, o.once = l, o.off = l, o.removeListener = l, o.removeAllListeners = l, o.emit = l, o.prependListener = l, o.prependOnceListener = l, o.listeners = function (s) {
          return [];
        }, o.binding = function (s) {
          throw new Error("process.binding is not supported");
        }, o.cwd = function () {
          return "/";
        }, o.chdir = function (s) {
          throw new Error("process.chdir is not supported");
        }, o.umask = function () {
          return 0;
        };
      }, function (i, c, r) {
        function n(d, b) {
          for (var u = 0; u < b.length; u++) {
            var p = b[u];
            p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(d, p.key, p);
          }
        }
        var o = r(9);
        i.exports = function () {
          function d() {
            (function (f, y) {
              if (!(f instanceof y)) throw new TypeError("Cannot call a class as a function");
            })(this, d);
          }
          var b, u, p;
          return b = d, p = [{
            key: "urlEncode",
            value: function (f) {
              return o(f);
            }
          }, {
            key: "jsonEncode",
            value: function (f) {
              return JSON.stringify(f);
            }
          }, {
            key: "formEncode",
            value: function (f) {
              if (this.isFormData(f)) return f;
              if (this.isFormElement(f)) return new FormData(f);
              if (this.isObject(f)) {
                var y = new FormData();
                return Object.keys(f).forEach(function (w) {
                  var v = f[w];
                  y.append(w, v);
                }), y;
              }
              throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
            }
          }, {
            key: "isObject",
            value: function (f) {
              return Object.prototype.toString.call(f) === "[object Object]";
            }
          }, {
            key: "isFormData",
            value: function (f) {
              return f instanceof FormData;
            }
          }, {
            key: "isFormElement",
            value: function (f) {
              return f instanceof HTMLFormElement;
            }
          }, {
            key: "selectFiles",
            value: function () {
              var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              return new Promise(function (y, w) {
                var v = document.createElement("INPUT");
                v.type = "file", f.multiple && v.setAttribute("multiple", "multiple"), f.accept && v.setAttribute("accept", f.accept), v.style.display = "none", document.body.appendChild(v), v.addEventListener("change", function (t) {
                  var e = t.target.files;
                  y(e), document.body.removeChild(v);
                }, !1), v.click();
              });
            }
          }, {
            key: "parseHeaders",
            value: function (f) {
              var y = f.trim().split(/[\r\n]+/),
                w = {};
              return y.forEach(function (v) {
                var t = v.split(": "),
                  e = t.shift(),
                  l = t.join(": ");
                e && (w[e] = l);
              }), w;
            }
          }], (u = null) && n(b.prototype, u), p && n(b, p), d;
        }();
      }, function (i, c) {
        var r = function (o) {
            return encodeURIComponent(o).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
          },
          n = function (o, d, b, u) {
            return d = d || null, b = b || "&", u = u || null, o ? function (p) {
              for (var f = new Array(), y = 0; y < p.length; y++) p[y] && f.push(p[y]);
              return f;
            }(Object.keys(o).map(function (p) {
              var f,
                y,
                w = p;
              if (u && (w = u + "[" + w + "]"), typeof o[p] == "object" && o[p] !== null) f = n(o[p], null, b, w);else {
                d && (y = w, w = !isNaN(parseFloat(y)) && isFinite(y) ? d + Number(w) : w);
                var v = o[p];
                v = (v = (v = (v = v === !0 ? "1" : v) === !1 ? "0" : v) === 0 ? "0" : v) || "", f = r(w) + "=" + r(v);
              }
              return f;
            })).join(b).replace(/[!'()*]/g, "") : "";
          };
        i.exports = n;
      }]);
    });
  })(H);
  var B = H.exports;
  const F = U(B);
  function L(E) {
    return E && typeof E.then == "function";
  }
  class A {
    constructor({
      config: a,
      onUpload: i,
      onError: c
    }) {
      this.config = a, this.onUpload = i, this.onError = c;
    }
    uploadSelectedFile({
      onPreview: a
    }) {
      const i = function (r) {
        const n = new FileReader();
        n.readAsDataURL(r), n.onload = (o) => {
          a(o.target.result);
        };
      };
      let c;
      this.config.uploader && typeof this.config.uploader.uploadByFile == "function" ? c = F.selectFiles({
        accept: this.config.types
      }).then((r) => {
        i(r[0]);
        const n = this.config.uploader.uploadByFile(r[0]);
        return L(n) || console.warn("Custom uploader method uploadByFile should return a Promise"), n;
      }) : c = F.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types,
        headers: this.config.additionalRequestHeaders,
        beforeSend: (r) => {
          i(r[0]);
        },
        fieldName: this.config.field
      }).then((r) => r.body), c.then((r) => {
        this.onUpload(r);
      }).catch((r) => {
        this.onError(r);
      });
    }
    uploadByUrl(a) {
      let i;
      this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (i = this.config.uploader.uploadByUrl(a), L(i) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : i = F.post({
        url: this.config.endpoints.byUrl,
        data: Object.assign({
          url: a
        }, this.config.additionalRequestData),
        type: F.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((c) => c.body), i.then((c) => {
        this.onUpload(c);
      }).catch((c) => {
        this.onError(c);
      });
    }
    uploadByFile(a, {
      onPreview: i
    }) {
      const c = new FileReader();
      c.readAsDataURL(a), c.onload = (n) => {
        i(n.target.result);
      };
      let r;
      if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") r = this.config.uploader.uploadByFile(a), L(r) || console.warn("Custom uploader method uploadByFile should return a Promise");else {
        const n = new FormData();
        n.append(this.config.field, a), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([o, d]) => {
          n.append(o, d);
        }), r = F.post({
          url: this.config.endpoints.byFile,
          data: n,
          type: F.contentType.JSON,
          headers: this.config.additionalRequestHeaders
        }).then((o) => o.body);
      }
      r.then((n) => {
        this.onUpload(n);
      }).catch((n) => {
        this.onError(n);
      });
    }
  } /**
  * Image Tool for the Editor.js
  *
  * @author CodeX <team@codex.so>
  * @license MIT
  * @see {@link https://github.com/editor-js/image}
  *
  * To developers.
  * To simplify Tool structure, we split it to 4 parts:
  *  1) index.js — main Tool's interface, public API and methods for working with data
  *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
  *  3) ui.js — module for UI manipulations: render, showing preloader, etc
  *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
  *
  * For debug purposes there is a testing server
  * that can save uploaded files and return a Response {@link UploadResponseFormat}
  *
  *       $ node dev/server.js
  *
  * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
  *
  * image: {
  *   class: ImageTool,
  *   config: {
  *     endpoints: {
  *       byFile: 'http://localhost:8008/uploadFile',
  *       byUrl: 'http://localhost:8008/fetchUrl',
  *     }
  *   },
  * },
  */
  class P {
    static get isReadOnlySupported() {
      return !0;
    }
    static get toolbox() {
      return {
        icon: R,
        title: "Image"
      };
    }
    static get tunes() {
      return [{
        name: "withBorder",
        icon: D,
        title: "With border",
        toggle: !0
      }, {
        name: "stretched",
        icon: x,
        title: "Stretch image",
        toggle: !0
      }, {
        name: "withBackground",
        icon: O,
        title: "With background",
        toggle: !0
      }];
    }
    constructor({
      data: a,
      config: i,
      api: c,
      readOnly: r,
      block: n
    }) {
      this.api = c, this.readOnly = r, this.block = n, this.config = {
        endpoints: i.endpoints || "",
        additionalRequestData: i.additionalRequestData || {},
        additionalRequestHeaders: i.additionalRequestHeaders || {},
        field: i.field || "image",
        types: i.types || "image/*",
        captionPlaceholder: this.api.i18n.t(i.captionPlaceholder || "Caption"),
        buttonContent: i.buttonContent || "",
        uploader: i.uploader || void 0,
        actions: i.actions || []
      }, this.uploader = new A({
        config: this.config,
        onUpload: (o) => this.onUpload(o),
        onError: (o) => this.uploadingFailed(o)
      }), this.ui = new T({
        api: c,
        config: this.config,
        onSelectFile: () => {
          this.uploader.uploadSelectedFile({
            onPreview: (o) => {
              this.ui.showPreloader(o);
            }
          });
        },
        readOnly: r
      }), this._data = {}, this.data = a;
    }
    render() {
      return this.ui.render(this.data);
    }
    validate(a) {
      return a.file && a.file.url;
    }
    save() {
      const a = this.ui.nodes.caption;
      return this._data.caption = a.innerHTML, this.data;
    }
    renderSettings() {
      return P.tunes.concat(this.config.actions).map((i) => ({
        icon: i.icon,
        label: this.api.i18n.t(i.title),
        name: i.name,
        toggle: i.toggle,
        isActive: this.data[i.name],
        onActivate: () => {
          if (typeof i.action == "function") {
            i.action(i.name);
            return;
          }
          this.tuneToggled(i.name);
        }
      }));
    }
    appendCallback() {
      this.ui.nodes.fileButton.click();
    }
    static get pasteConfig() {
      return {
        tags: [{
          img: {
            src: !0
          }
        }],
        patterns: {
          image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
        },
        files: {
          mimeTypes: ["image/*"]
        }
      };
    }
    async onPaste(a) {
      switch (a.type) {
        case "tag":
          {
            const i = a.detail.data;
            if (/^blob:/.test(i.src)) {
              const r = await (await fetch(i.src)).blob();
              this.uploadFile(r);
              break;
            }
            this.uploadUrl(i.src);
            break;
          }
        case "pattern":
          {
            const i = a.detail.data;
            this.uploadUrl(i);
            break;
          }
        case "file":
          {
            const i = a.detail.file;
            this.uploadFile(i);
            break;
          }
      }
    }
    set data(a) {
      this.image = a.file, this._data.caption = a.caption || "", this.ui.fillCaption(this._data.caption), P.tunes.forEach(({
        name: i
      }) => {
        const c = typeof a[i] < "u" ? a[i] === !0 || a[i] === "true" : !1;
        this.setTune(i, c);
      });
    }
    get data() {
      return this._data;
    }
    set image(a) {
      this._data.file = a || {}, a && a.url && this.ui.fillImage(a.url);
    }
    onUpload(a) {
      a.success && a.file ? this.image = a.file : this.uploadingFailed("incorrect response: " + JSON.stringify(a));
    }
    uploadingFailed(a) {
      console.log("Image Tool: uploading failed because of", a), this.api.notifier.show({
        message: this.api.i18n.t("Couldn’t upload image. Please try another."),
        style: "error"
      }), this.ui.hidePreloader();
    }
    tuneToggled(a) {
      this.setTune(a, !this._data[a]);
    }
    setTune(a, i) {
      this._data[a] = i, this.ui.applyTune(a, i), a === "stretched" && Promise.resolve().then(() => {
        this.block.stretched = i;
      }).catch((c) => {
        console.error(c);
      });
    }
    uploadFile(a) {
      this.uploader.uploadByFile(a, {
        onPreview: (i) => {
          this.ui.showPreloader(i);
        }
      });
    }
    uploadUrl(a) {
      this.ui.showPreloader(a), this.uploader.uploadByUrl(a);
    }
  }
  return P;
});