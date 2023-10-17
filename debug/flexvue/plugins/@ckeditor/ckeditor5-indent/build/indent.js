"use strict";

!function (t) {
  const e = t.en = t.en || {};
  e.dictionary = Object.assign(e.dictionary || {}, {
    "Decrease indent": "Decrease indent",
    "Increase indent": "Increase indent"
  });
}(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {})),
/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
(() => {
  var t = {
      704: (t, e, n) => {
        t.exports = n(79)("./src/core.js");
      },
      492: (t, e, n) => {
        t.exports = n(79)("./src/engine.js");
      },
      273: (t, e, n) => {
        t.exports = n(79)("./src/ui.js");
      },
      209: (t, e, n) => {
        t.exports = n(79)("./src/utils.js");
      },
      79: t => {
        "use strict";

        t.exports = CKEditor5.dll;
      }
    },
    e = {};
  function n(s) {
    var i = e[s];
    if (void 0 !== i) return i.exports;
    var o = e[s] = {
      exports: {}
    };
    return t[s](o, o.exports, n), o.exports;
  }
  n.d = (t, e) => {
    for (var s in e) n.o(e, s) && !n.o(t, s) && Object.defineProperty(t, s, {
      enumerable: !0,
      get: e[s]
    });
  }, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  };
  var s = {};
  (() => {
    "use strict";

    n.r(s), n.d(s, {
      Indent: () => a,
      IndentBlock: () => f,
      IndentEditing: () => e,
      IndentUI: () => d
    });
    var t = n(704);
    class e extends t.Plugin {
      static get pluginName() {
        return "IndentEditing";
      }
      init() {
        const e = this.editor;
        e.commands.add("indent", new t.MultiCommand(e)), e.commands.add("outdent", new t.MultiCommand(e));
      }
    }
    var i = n(273);
    const o = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"/></svg>',
      r = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"/></svg>';
    class d extends t.Plugin {
      static get pluginName() {
        return "IndentUI";
      }
      init() {
        const t = this.editor,
          e = t.locale,
          n = t.t,
          s = "ltr" == e.uiLanguageDirection ? o : r,
          i = "ltr" == e.uiLanguageDirection ? r : o;
        this._defineButton("indent", n("Increase indent"), s), this._defineButton("outdent", n("Decrease indent"), i);
      }
      _defineButton(t, e, n) {
        const s = this.editor;
        s.ui.componentFactory.add(t, o => {
          const r = s.commands.get(t),
            d = new i.ButtonView(o);
          return d.set({
            label: e,
            icon: n,
            tooltip: !0
          }), d.bind("isEnabled").to(r, "isEnabled"), this.listenTo(d, "execute", () => {
            s.execute(t), s.editing.view.focus();
          }), d;
        });
      }
    }
    class a extends t.Plugin {
      static get pluginName() {
        return "Indent";
      }
      static get requires() {
        return [e, d];
      }
    }
    var c = n(492),
      l = n(209);
    class u extends t.Command {
      constructor(t, e) {
        super(t), this._indentBehavior = e;
      }
      refresh() {
        const t = this.editor.model,
          e = (0, l.first)(t.document.selection.getSelectedBlocks());
        e && this._isIndentationChangeAllowed(e) ? this.isEnabled = this._indentBehavior.checkEnabled(e.getAttribute("blockIndent")) : this.isEnabled = !1;
      }
      execute() {
        const t = this.editor.model,
          e = this._getBlocksToChange();
        t.change(t => {
          for (const n of e) {
            const e = n.getAttribute("blockIndent"),
              s = this._indentBehavior.getNextIndent(e);
            s ? t.setAttribute("blockIndent", s, n) : t.removeAttribute("blockIndent", n);
          }
        });
      }
      _getBlocksToChange() {
        const t = this.editor.model.document.selection;
        return Array.from(t.getSelectedBlocks()).filter(t => this._isIndentationChangeAllowed(t));
      }
      _isIndentationChangeAllowed(t) {
        const e = this.editor;
        if (!e.model.schema.checkAttribute(t, "blockIndent")) return !1;
        if (!e.plugins.has("DocumentListUtils")) return !0;
        if (!this._indentBehavior.isForward) return !0;
        return !e.plugins.get("DocumentListUtils").isListItemBlock(t);
      }
    }
    class h {
      constructor(t) {
        this.isForward = "forward" === t.direction, this.offset = t.offset, this.unit = t.unit;
      }
      checkEnabled(t) {
        const e = parseFloat(t || "0");
        return this.isForward || e > 0;
      }
      getNextIndent(t) {
        const e = parseFloat(t || "0");
        if (!(!t || t.endsWith(this.unit))) return this.isForward ? this.offset + this.unit : void 0;
        const n = e + (this.isForward ? this.offset : -this.offset);
        return n > 0 ? n + this.unit : void 0;
      }
    }
    class g {
      constructor(t) {
        this.isForward = "forward" === t.direction, this.classes = t.classes;
      }
      checkEnabled(t) {
        const e = this.classes.indexOf(t);
        return this.isForward ? e < this.classes.length - 1 : e >= 0;
      }
      getNextIndent(t) {
        const e = this.classes.indexOf(t),
          n = this.isForward ? 1 : -1;
        return this.classes[e + n];
      }
    }
    const m = ["paragraph", "heading1", "heading2", "heading3", "heading4", "heading5", "heading6"];
    class f extends t.Plugin {
      constructor(t) {
        super(t), t.config.define("indentBlock", {
          offset: 40,
          unit: "px"
        });
      }
      static get pluginName() {
        return "IndentBlock";
      }
      init() {
        const t = this.editor,
          e = t.config.get("indentBlock");
        e.classes && e.classes.length ? (this._setupConversionUsingClasses(e.classes), t.commands.add("indentBlock", new u(t, new g({
          direction: "forward",
          classes: e.classes
        }))), t.commands.add("outdentBlock", new u(t, new g({
          direction: "backward",
          classes: e.classes
        })))) : (t.data.addStyleProcessorRules(c.addMarginRules), this._setupConversionUsingOffset(), t.commands.add("indentBlock", new u(t, new h({
          direction: "forward",
          offset: e.offset,
          unit: e.unit
        }))), t.commands.add("outdentBlock", new u(t, new h({
          direction: "backward",
          offset: e.offset,
          unit: e.unit
        }))));
      }
      afterInit() {
        const t = this.editor,
          e = t.model.schema,
          n = t.commands.get("indent"),
          s = t.commands.get("outdent"),
          i = t.config.get("heading.options");
        (i && i.map(t => t.model) || m).forEach(t => {
          e.isRegistered(t) && e.extend(t, {
            allowAttributes: "blockIndent"
          });
        }), e.setAttributeProperties("blockIndent", {
          isFormatting: !0
        }), n.registerChildCommand(t.commands.get("indentBlock")), s.registerChildCommand(t.commands.get("outdentBlock"));
      }
      _setupConversionUsingOffset() {
        const t = this.editor.conversion,
          e = "rtl" === this.editor.locale.contentLanguageDirection ? "margin-right" : "margin-left";
        t.for("upcast").attributeToAttribute({
          view: {
            styles: {
              [e]: /[\s\S]+/
            }
          },
          model: {
            key: "blockIndent",
            value: t => {
              if (!t.is("element", "li")) return t.getStyle(e);
            }
          }
        }), t.for("downcast").attributeToAttribute({
          model: "blockIndent",
          view: t => ({
            key: "style",
            value: {
              [e]: t
            }
          })
        });
      }
      _setupConversionUsingClasses(t) {
        const e = {
          model: {
            key: "blockIndent",
            values: []
          },
          view: {}
        };
        for (const n of t) e.model.values.push(n), e.view[n] = {
          key: "class",
          value: [n]
        };
        this.editor.conversion.attributeToAttribute(e);
      }
    }
  })(), (window.CKEditor5 = window.CKEditor5 || {}).indent = s;
})();