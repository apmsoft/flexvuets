"use strict";

!function (e) {
  const i = e.en = e.en || {};
  i.dictionary = Object.assign(i.dictionary || {}, {
    "Could not insert image at the current position.": "Could not insert image at the current position.",
    "Could not obtain resized image URL.": "Could not obtain resized image URL.",
    "Insert image or file": "Insert image or file",
    "Inserting image failed": "Inserting image failed",
    "Selecting resized image failed": "Selecting resized image failed"
  });
}(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {})),
/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
(() => {
  var e = {
      704: (e, i, t) => {
        e.exports = t(79)("./src/core.js");
      },
      273: (e, i, t) => {
        e.exports = t(79)("./src/ui.js");
      },
      209: (e, i, t) => {
        e.exports = t(79)("./src/utils.js");
      },
      79: e => {
        "use strict";

        e.exports = CKEditor5.dll;
      }
    },
    i = {};
  function t(n) {
    var o = i[n];
    if (void 0 !== o) return o.exports;
    var r = i[n] = {
      exports: {}
    };
    return e[n](r, r.exports, t), r.exports;
  }
  t.d = (e, i) => {
    for (var n in i) t.o(i, n) && !t.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: i[n]
    });
  }, t.o = (e, i) => Object.prototype.hasOwnProperty.call(e, i), t.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  };
  var n = {};
  (() => {
    "use strict";

    t.r(n), t.d(n, {
      CKFinder: () => c,
      CKFinderEditing: () => d,
      CKFinderUI: () => o
    });
    var e = t(704),
      i = t(273);
    class o extends e.Plugin {
      static get pluginName() {
        return "CKFinderUI";
      }
      init() {
        const e = this.editor,
          t = e.ui.componentFactory,
          n = e.t;
        t.add("ckfinder", t => {
          const o = e.commands.get("ckfinder"),
            r = new i.ButtonView(t);
          return r.set({
            label: n("Insert image or file"),
            icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>',
            tooltip: !0
          }), r.bind("isEnabled").to(o), r.on("execute", () => {
            e.execute("ckfinder"), e.editing.view.focus();
          }), r;
        });
      }
    }
    var r = t(209);
    class s extends e.Command {
      constructor(e) {
        super(e), this.affectsData = !1, this.stopListening(this.editor.model.document, "change"), this.listenTo(this.editor.model.document, "change", () => this.refresh(), {
          priority: "low"
        });
      }
      refresh() {
        const e = this.editor.commands.get("insertImage"),
          i = this.editor.commands.get("link");
        this.isEnabled = e.isEnabled || i.isEnabled;
      }
      execute() {
        const e = this.editor,
          i = this.editor.config.get("ckfinder.openerMethod") || "modal";
        if ("popup" != i && "modal" != i) throw new r.CKEditorError("ckfinder-unknown-openermethod", e);
        const t = this.editor.config.get("ckfinder.options") || {};
        t.chooseFiles = !0;
        const n = t.onInit;
        t.language || (t.language = e.locale.uiLanguage), t.onInit = i => {
          n && n(i), i.on("files:choose", t => {
            const n = t.data.files.toArray(),
              o = n.filter(e => !e.isImage()),
              r = n.filter(e => e.isImage());
            for (const i of o) e.execute("link", i.getUrl());
            const s = [];
            for (const e of r) {
              const t = e.getUrl();
              s.push(t || i.request("file:getProxyUrl", {
                file: e
              }));
            }
            s.length && a(e, s);
          }), i.on("file:choose:resizedImage", i => {
            const t = i.data.resizedUrl;
            if (t) a(e, [t]);else {
              const i = e.plugins.get("Notification"),
                t = e.locale.t;
              i.showWarning(t("Could not obtain resized image URL."), {
                title: t("Selecting resized image failed"),
                namespace: "ckfinder"
              });
            }
          });
        }, window.CKFinder[i](t);
      }
    }
    function a(e, i) {
      if (e.commands.get("insertImage").isEnabled) e.execute("insertImage", {
        source: i
      });else {
        const i = e.plugins.get("Notification"),
          t = e.locale.t;
        i.showWarning(t("Could not insert image at the current position."), {
          title: t("Inserting image failed"),
          namespace: "ckfinder"
        });
      }
    }
    class d extends e.Plugin {
      static get pluginName() {
        return "CKFinderEditing";
      }
      static get requires() {
        return [i.Notification, "LinkEditing"];
      }
      init() {
        const e = this.editor;
        if (!e.plugins.has("ImageBlockEditing") && !e.plugins.has("ImageInlineEditing")) throw new r.CKEditorError("ckfinder-missing-image-plugin", e);
        e.commands.add("ckfinder", new s(e));
      }
    }
    class c extends e.Plugin {
      static get pluginName() {
        return "CKFinder";
      }
      static get requires() {
        return ["Link", "CKFinderUploadAdapter", d, o];
      }
    }
  })(), (window.CKEditor5 = window.CKEditor5 || {}).ckfinder = n;
})();