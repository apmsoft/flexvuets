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
!function (e) {
  const t = e.en = e.en || {};
  t.dictionary = Object.assign(t.dictionary || {}, {
    "Cannot access default workspace.": "Cannot access default workspace.",
    "Cannot determine a category for the uploaded file.": "Cannot determine a category for the uploaded file.",
    "Open file manager": "Open file manager"
  });
}(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {})),
/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
(() => {
  var e = {
      704: (e, t, i) => {
        e.exports = i(79)("./src/core.js");
      },
      492: (e, t, i) => {
        e.exports = i(79)("./src/engine.js");
      },
      273: (e, t, i) => {
        e.exports = i(79)("./src/ui.js");
      },
      448: (e, t, i) => {
        e.exports = i(79)("./src/upload.js");
      },
      209: (e, t, i) => {
        e.exports = i(79)("./src/utils.js");
      },
      79: e => {
        "use strict";

        e.exports = CKEditor5.dll;
      }
    },
    t = {};
  function i(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var r = t[o] = {
      exports: {}
    };
    return e[o](r, r.exports, i), r.exports;
  }
  i.d = (e, t) => {
    for (var o in t) i.o(t, o) && !i.o(e, o) && Object.defineProperty(e, o, {
      enumerable: !0,
      get: t[o]
    });
  }, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  };
  var o = {};
  (() => {
    "use strict";

    i.r(o), i.d(o, {
      CKBox: () => x,
      CKBoxEditing: () => b,
      CKBoxUI: () => n
    });
    var e = i(704),
      t = i(273);
    class n extends e.Plugin {
      static get pluginName() {
        return "CKBoxUI";
      }
      afterInit() {
        const e = this.editor,
          i = e.commands.get("ckbox");
        if (!i) return;
        const o = e.t;
        e.ui.componentFactory.add("ckbox", n => {
          const r = new t.ButtonView(n);
          return r.set({
            label: o("Open file manager"),
            icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>',
            tooltip: !0
          }), r.bind("isOn", "isEnabled").to(i, "value", "isEnabled"), r.on("execute", () => {
            e.execute("ckbox");
          }), r;
        });
      }
    }
    var r = i(492),
      s = i(209);
    function a(e) {
      const t = [];
      let i = 0;
      for (const o in e) {
        const n = parseInt(o, 10);
        isNaN(n) || (n > i && (i = n), t.push(`${e[o]} ${o}w`));
      }
      const o = [{
        srcset: t.join(","),
        sizes: `(max-width: ${i}px) 100vw, ${i}px`,
        type: "image/webp"
      }];
      return {
        imageFallbackUrl: e.default,
        imageSources: o
      };
    }
    class c extends e.Command {
      constructor(e) {
        super(e), this._chosenAssets = new Set(), this._wrapper = null, this._initListeners();
      }
      refresh() {
        this.value = this._getValue(), this.isEnabled = this._checkEnabled();
      }
      execute() {
        this.fire("ckbox:open");
      }
      _getValue() {
        return null !== this._wrapper;
      }
      _checkEnabled() {
        const e = this.editor.commands.get("insertImage"),
          t = this.editor.commands.get("link");
        return !(!e.isEnabled && !t.isEnabled);
      }
      _prepareOptions() {
        const e = this.editor.config.get("ckbox");
        return {
          theme: e.theme,
          language: e.language,
          tokenUrl: e.tokenUrl,
          serviceOrigin: e.serviceOrigin,
          dialog: {
            onClose: () => this.fire("ckbox:close")
          },
          assets: {
            onChoose: e => this.fire("ckbox:choose", e)
          }
        };
      }
      _initListeners() {
        const e = this.editor,
          t = e.model,
          i = !e.config.get("ckbox.ignoreDataId");
        this.on("ckbox", () => {
          this.refresh();
        }, {
          priority: "low"
        }), this.on("ckbox:open", () => {
          this.isEnabled && !this.value && (this._wrapper = (0, s.createElement)(document, "div", {
            class: "ck ckbox-wrapper"
          }), document.body.appendChild(this._wrapper), window.CKBox.mount(this._wrapper, this._prepareOptions()));
        }), this.on("ckbox:close", () => {
          this.value && (this._wrapper.remove(), this._wrapper = null);
        }), this.on("ckbox:choose", (o, n) => {
          if (!this.isEnabled) return;
          const r = e.commands.get("insertImage"),
            s = e.commands.get("link"),
            a = function ({
              assets: e,
              isImageAllowed: t,
              isLinkAllowed: i
            }) {
              return e.map(e => function (e) {
                const t = e.data.metadata;
                if (!t) return !1;
                return t.width && t.height;
              }(e) ? {
                id: e.data.id,
                type: "image",
                attributes: l(e)
              } : {
                id: e.data.id,
                type: "link",
                attributes: d(e)
              }).filter(e => "image" === e.type ? t : i);
            }({
              assets: n,
              isImageAllowed: r.isEnabled,
              isLinkAllowed: s.isEnabled
            });
          0 !== a.length && t.change(e => {
            for (const t of a) {
              const o = t === a[a.length - 1];
              this._insertAsset(t, o, e), i && (setTimeout(() => this._chosenAssets.delete(t), 1e3), this._chosenAssets.add(t));
            }
          });
        }), this.listenTo(e, "destroy", () => {
          this.fire("ckbox:close"), this._chosenAssets.clear();
        });
      }
      _insertAsset(e, t, i) {
        const o = this.editor.model.document.selection;
        i.removeSelectionAttribute("linkHref"), "image" === e.type ? this._insertImage(e) : this._insertLink(e, i), t || i.setSelection(o.getLastPosition());
      }
      _insertImage(e) {
        const t = this.editor,
          {
            imageFallbackUrl: i,
            imageSources: o,
            imageTextAlternative: n
          } = e.attributes;
        t.execute("insertImage", {
          source: {
            src: i,
            sources: o,
            alt: n
          }
        });
      }
      _insertLink(e, t) {
        const i = this.editor,
          o = i.model,
          n = o.document.selection,
          {
            linkName: r,
            linkHref: a
          } = e.attributes;
        if (n.isCollapsed) {
          const e = (0, s.toMap)(n.getAttributes()),
            i = t.createText(r, e),
            a = o.insertContent(i);
          t.setSelection(a);
        }
        i.execute("link", a);
      }
    }
    function l(e) {
      const {
        imageFallbackUrl: t,
        imageSources: i
      } = a(e.data.imageUrls);
      return {
        imageFallbackUrl: t,
        imageSources: i,
        imageTextAlternative: e.data.metadata.description || ""
      };
    }
    function d(e) {
      return {
        linkName: e.data.name,
        linkHref: u(e)
      };
    }
    function u(e) {
      const t = new URL(e.data.url);
      return t.searchParams.set("download", "true"), t.toString();
    }
    var g = i(448);
    class m extends e.Plugin {
      static get requires() {
        return ["ImageUploadEditing", "ImageUploadProgress", g.FileRepository, b];
      }
      static get pluginName() {
        return "CKBoxUploadAdapter";
      }
      afterInit() {
        return __awaiter(this, void 0, void 0, function* () {
          const e = this.editor,
            t = !!e.config.get("ckbox"),
            i = !!window.CKBox;
          if (!t && !i) return;
          const o = e.plugins.get(g.FileRepository),
            n = e.plugins.get(b);
          o.createUploadAdapter = t => new h(t, n.getToken(), e);
          const r = !e.config.get("ckbox.ignoreDataId"),
            s = e.plugins.get("ImageUploadEditing");
          r && s.on("uploadComplete", (t, {
            imageElement: i,
            data: o
          }) => {
            e.model.change(e => {
              e.setAttribute("ckboxImageId", o.ckboxImageId, i);
            });
          });
        });
      }
    }
    class h {
      constructor(e, t, i) {
        this.loader = e, this.token = t, this.editor = i, this.controller = new AbortController(), this.serviceOrigin = i.config.get("ckbox.serviceOrigin");
      }
      getWorkspaceId() {
        const e = (0, this.editor.t)("Cannot access default workspace."),
          t = this.editor.config.get("ckbox.defaultUploadWorkspaceId"),
          i = function (e, t) {
            const [, i] = e.value.split("."),
              o = JSON.parse(atob(i)),
              n = o.auth && o.auth.ckbox && o.auth.ckbox.workspaces || [o.aud];
            return t ? "superadmin" == (o.auth && o.auth.ckbox && o.auth.ckbox.role) || n.includes(t) ? t : null : n[0];
          }(this.token, t);
        if (null == i) throw (0, s.logError)("ckbox-access-default-workspace-error"), e;
        return i;
      }
      getAvailableCategories(e = 0) {
        return __awaiter(this, void 0, void 0, function* () {
          const t = new URL("categories", this.serviceOrigin);
          return t.searchParams.set("limit", 50..toString()), t.searchParams.set("offset", e.toString()), t.searchParams.set("workspaceId", this.getWorkspaceId()), this._sendHttpRequest({
            url: t
          }).then(t => __awaiter(this, void 0, void 0, function* () {
            if (t.totalCount - (e + 50) > 0) {
              const i = yield this.getAvailableCategories(e + 50);
              return [...t.items, ...i];
            }
            return t.items;
          })).catch(() => {
            this.controller.signal.throwIfAborted(), (0, s.logError)("ckbox-fetch-category-http-error");
          });
        });
      }
      getCategoryIdForFile(e) {
        return __awaiter(this, void 0, void 0, function* () {
          const t = function (e) {
              const t = /\.(?<ext>[^.]+)$/;
              return e.match(t).groups.ext.toLowerCase();
            }(e.name),
            i = yield this.getAvailableCategories();
          if (!i) return null;
          const o = this.editor.config.get("ckbox.defaultUploadCategories");
          if (o) {
            const e = Object.keys(o).find(e => o[e].find(e => e.toLowerCase() == t));
            if (e) {
              const t = i.find(t => t.id === e || t.name === e);
              return t ? t.id : null;
            }
          }
          const n = i.find(e => e.extensions.find(e => e.toLowerCase() == t));
          return n ? n.id : null;
        });
      }
      upload() {
        return __awaiter(this, void 0, void 0, function* () {
          const e = this.editor.t,
            t = e("Cannot determine a category for the uploaded file."),
            i = yield this.loader.file,
            o = yield this.getCategoryIdForFile(i);
          if (!o) return Promise.reject(t);
          const n = new URL("assets", this.serviceOrigin),
            r = new FormData();
          n.searchParams.set("workspaceId", this.getWorkspaceId()), r.append("categoryId", o), r.append("file", i);
          const s = {
            method: "POST",
            url: n,
            data: r,
            onUploadProgress: e => {
              e.lengthComputable && (this.loader.uploadTotal = e.total, this.loader.uploaded = e.loaded);
            }
          };
          return this._sendHttpRequest(s).then(e => __awaiter(this, void 0, void 0, function* () {
            const t = a(e.imageUrls);
            return {
              ckboxImageId: e.id,
              default: t.imageFallbackUrl,
              sources: t.imageSources
            };
          })).catch(() => {
            const t = e("Cannot upload file:") + ` ${i.name}.`;
            return Promise.reject(t);
          });
        });
      }
      abort() {
        this.controller.abort();
      }
      _sendHttpRequest({
        url: e,
        method: t = "GET",
        data: i,
        onUploadProgress: o
      }) {
        const n = this.controller.signal,
          r = new XMLHttpRequest();
        r.open(t, e.toString(), !0), r.setRequestHeader("Authorization", this.token.value), r.setRequestHeader("CKBox-Version", "CKEditor 5"), r.responseType = "json";
        const s = () => {
          r.abort();
        };
        return new Promise((e, t) => {
          n.addEventListener("abort", s), r.addEventListener("loadstart", () => {
            n.addEventListener("abort", s);
          }), r.addEventListener("loadend", () => {
            n.removeEventListener("abort", s);
          }), r.addEventListener("error", () => {
            t();
          }), r.addEventListener("abort", () => {
            t();
          }), r.addEventListener("load", () => __awaiter(this, void 0, void 0, function* () {
            const i = r.response;
            return !i || i.statusCode >= 400 ? t(i && i.message) : e(i);
          })), o && r.upload.addEventListener("progress", e => {
            o(e);
          }), r.send(i);
        });
      }
    }
    class b extends e.Plugin {
      static get pluginName() {
        return "CKBoxEditing";
      }
      static get requires() {
        return ["CloudServices", "LinkEditing", "PictureEditing", m];
      }
      init() {
        return __awaiter(this, void 0, void 0, function* () {
          const e = this.editor,
            t = !!e.config.get("ckbox"),
            i = !!window.CKBox;
          if (!t && !i) return;
          this._initConfig();
          const o = e.plugins.get("CloudServicesCore"),
            n = e.config.get("ckbox.tokenUrl");
          if (n === e.config.get("cloudServices.tokenUrl")) {
            const t = e.plugins.get("CloudServices");
            this._token = t.token;
          } else this._token = yield o.createToken(n).init();
          e.config.get("ckbox.ignoreDataId") || (this._initSchema(), this._initConversion(), this._initFixers()), i && e.commands.add("ckbox", new c(e));
        });
      }
      getToken() {
        return this._token;
      }
      _initConfig() {
        const e = this.editor;
        e.config.define("ckbox", {
          serviceOrigin: "https://api.ckbox.io",
          defaultUploadCategories: null,
          ignoreDataId: !1,
          language: e.locale.uiLanguage,
          theme: "default",
          tokenUrl: e.config.get("cloudServices.tokenUrl")
        });
        if (!e.config.get("ckbox.tokenUrl")) throw new s.CKEditorError("ckbox-plugin-missing-token-url", this);
        e.plugins.has("ImageBlockEditing") || e.plugins.has("ImageInlineEditing") || (0, s.logError)("ckbox-plugin-image-feature-missing", e);
      }
      _initSchema() {
        const e = this.editor.model.schema;
        e.extend("$text", {
          allowAttributes: "ckboxLinkId"
        }), e.isRegistered("imageBlock") && e.extend("imageBlock", {
          allowAttributes: ["ckboxImageId", "ckboxLinkId"]
        }), e.isRegistered("imageInline") && e.extend("imageInline", {
          allowAttributes: ["ckboxImageId", "ckboxLinkId"]
        }), e.addAttributeCheck((e, t) => {
          if (!!!e.last.getAttribute("linkHref") && "ckboxLinkId" === t) return !1;
        });
      }
      _initConversion() {
        const e = this.editor;
        e.conversion.for("downcast").add(e => {
          e.on("attribute:ckboxLinkId:imageBlock", (e, t, i) => {
            const {
              writer: o,
              mapper: n,
              consumable: r
            } = i;
            if (!r.consume(t.item, e.name)) return;
            const s = [...n.toViewElement(t.item).getChildren()].find(e => "a" === e.name);
            s && (t.item.hasAttribute("ckboxLinkId") ? o.setAttribute("data-ckbox-resource-id", t.item.getAttribute("ckboxLinkId"), s) : o.removeAttribute("data-ckbox-resource-id", s));
          }, {
            priority: "low"
          }), e.on("attribute:ckboxLinkId", (e, t, i) => {
            const {
              writer: o,
              mapper: n,
              consumable: r
            } = i;
            if (r.consume(t.item, e.name)) {
              if (t.attributeOldValue) {
                const e = k(o, t.attributeOldValue);
                o.unwrap(n.toViewRange(t.range), e);
              }
              if (t.attributeNewValue) {
                const e = k(o, t.attributeNewValue);
                if (t.item.is("selection")) {
                  const t = o.document.selection;
                  o.wrap(t.getFirstRange(), e);
                } else o.wrap(n.toViewRange(t.range), e);
              }
            }
          }, {
            priority: "low"
          });
        }), e.conversion.for("upcast").add(e => {
          e.on("element:a", (e, t, i) => {
            const {
              writer: o,
              consumable: n
            } = i;
            if (!t.viewItem.getAttribute("href")) return;
            if (!n.consume(t.viewItem, {
              attributes: ["data-ckbox-resource-id"]
            })) return;
            const r = t.viewItem.getAttribute("data-ckbox-resource-id");
            if (r) if (t.modelRange) for (let e of t.modelRange.getItems()) e.is("$textProxy") && (e = e.textNode), f(e) && o.setAttribute("ckboxLinkId", r, e);else {
              const e = t.modelCursor.nodeBefore || t.modelCursor.parent;
              o.setAttribute("ckboxLinkId", r, e);
            }
          }, {
            priority: "low"
          });
        }), e.conversion.for("downcast").attributeToAttribute({
          model: "ckboxImageId",
          view: "data-ckbox-resource-id"
        }), e.conversion.for("upcast").elementToAttribute({
          model: {
            key: "ckboxImageId",
            value: e => e.getAttribute("data-ckbox-resource-id")
          },
          view: {
            attributes: {
              "data-ckbox-resource-id": /[\s\S]+/
            }
          }
        });
      }
      _initFixers() {
        const e = this.editor,
          t = e.model,
          i = t.document.selection;
        t.document.registerPostFixer(function (e) {
          return t => {
            let i = !1;
            const o = e.model,
              n = e.commands.get("ckbox");
            if (!n) return i;
            for (const e of o.document.differ.getChanges()) {
              if ("insert" !== e.type && "attribute" !== e.type) continue;
              const o = "insert" === e.type ? new r.Range(e.position, e.position.getShiftedBy(e.length)) : e.range,
                s = "attribute" === e.type && "linkHref" === e.attributeKey && null === e.attributeNewValue;
              for (const e of o.getItems()) {
                if (s && e.hasAttribute("ckboxLinkId")) {
                  t.removeAttribute("ckboxLinkId", e), i = !0;
                  continue;
                }
                const o = p(e, n._chosenAssets);
                for (const n of o) {
                  const o = "image" === n.type ? "ckboxImageId" : "ckboxLinkId";
                  n.id !== e.getAttribute(o) && (t.setAttribute(o, n.id, e), i = !0);
                }
              }
            }
            return i;
          };
        }(e)), t.document.registerPostFixer(function (e) {
          return t => !(e.hasAttribute("linkHref") || !e.hasAttribute("ckboxLinkId")) && (t.removeSelectionAttribute("ckboxLinkId"), !0);
        }(i));
      }
    }
    function p(e, t) {
      const i = e.is("element", "imageInline") || e.is("element", "imageBlock"),
        o = e.hasAttribute("linkHref");
      return [...t].filter(t => "image" === t.type && i ? t.attributes.imageFallbackUrl === e.getAttribute("src") : "link" === t.type && o ? t.attributes.linkHref === e.getAttribute("linkHref") : void 0);
    }
    function k(e, t) {
      const i = e.createAttributeElement("a", {
        "data-ckbox-resource-id": t
      }, {
        priority: 5
      });
      return e.setCustomProperty("link", !0, i), i;
    }
    function f(e) {
      return !!e.is("$text") || !(!e.is("element", "imageInline") && !e.is("element", "imageBlock"));
    }
    class x extends e.Plugin {
      static get pluginName() {
        return "CKBox";
      }
      static get requires() {
        return [b, n];
      }
    }
  })(), (window.CKEditor5 = window.CKEditor5 || {}).ckbox = o;
})();