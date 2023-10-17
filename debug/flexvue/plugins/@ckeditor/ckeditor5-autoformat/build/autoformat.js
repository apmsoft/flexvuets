"use strict";

/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
(() => {
  var t = {
      704: (t, e, o) => {
        t.exports = o(79)("./src/core.js");
      },
      492: (t, e, o) => {
        t.exports = o(79)("./src/engine.js");
      },
      181: (t, e, o) => {
        t.exports = o(79)("./src/typing.js");
      },
      209: (t, e, o) => {
        t.exports = o(79)("./src/utils.js");
      },
      79: t => {
        "use strict";

        t.exports = CKEditor5.dll;
      }
    },
    e = {};
  function o(i) {
    var s = e[i];
    if (void 0 !== s) return s.exports;
    var n = e[i] = {
      exports: {}
    };
    return t[i](n, n.exports, o), n.exports;
  }
  o.d = (t, e) => {
    for (var i in e) o.o(e, i) && !o.o(t, i) && Object.defineProperty(t, i, {
      enumerable: !0,
      get: e[i]
    });
  }, o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), o.r = t => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  };
  var i = {};
  (() => {
    "use strict";

    o.r(i), o.d(i, {
      Autoformat: () => c
    });
    var t = o(704),
      e = o(181),
      s = o(492),
      n = o(209);
    function r(t, e, o, i) {
      let r,
        d = null;
      "function" == typeof i ? r = i : (d = t.commands.get(i), r = () => {
        t.execute(i);
      }), t.model.document.on("change:data", (a, c) => {
        if (d && !d.isEnabled || !e.isEnabled) return;
        const l = (0, n.first)(t.model.document.selection.getRanges());
        if (!l.isCollapsed) return;
        if (c.isUndo || !c.isLocal) return;
        const u = Array.from(t.model.document.differ.getChanges()),
          h = u[0];
        if (1 != u.length || "insert" !== h.type || "$text" != h.name || 1 != h.length) return;
        const g = h.position.parent;
        if (g.is("element", "codeBlock")) return;
        if (g.is("element", "listItem") && "function" != typeof i && !["numberedList", "bulletedList", "todoList"].includes(i)) return;
        if (d && !0 === d.value) return;
        const m = g.getChild(0),
          f = t.model.createRangeOn(m);
        if (!f.containsRange(l) && !l.end.isEqual(f.end)) return;
        const p = o.exec(m.data.substr(0, l.end.offset));
        p && t.model.enqueueChange(e => {
          const o = e.createPositionAt(g, 0),
            i = e.createPositionAt(g, p[0].length),
            n = new s.LiveRange(o, i);
          if (!1 !== r({
            match: p
          })) {
            e.remove(n);
            const o = t.model.document.selection.getFirstRange(),
              i = e.createRangeIn(g);
            !g.isEmpty || i.isEqual(o) || i.containsRange(o, !0) || e.remove(g);
          }
          n.detach(), t.model.enqueueChange(() => {
            t.plugins.get("Delete").requestUndoOnBackspace();
          });
        });
      });
    }
    function d(t, e, o, i) {
      let s, n;
      o instanceof RegExp ? s = o : n = o, n = n || (t => {
        let e;
        const o = [],
          i = [];
        for (; null !== (e = s.exec(t)) && !(e && e.length < 4);) {
          let {
            index: t,
            1: s,
            2: n,
            3: r
          } = e;
          const d = s + n + r;
          t += e[0].length - d.length;
          const a = [t, t + s.length],
            c = [t + s.length + n.length, t + s.length + n.length + r.length];
          o.push(a), o.push(c), i.push([t + s.length, t + s.length + n.length]);
        }
        return {
          remove: o,
          format: i
        };
      }), t.model.document.on("change:data", (o, s) => {
        if (s.isUndo || !s.isLocal || !e.isEnabled) return;
        const r = t.model,
          d = r.document.selection;
        if (!d.isCollapsed) return;
        const c = Array.from(r.document.differ.getChanges()),
          l = c[0];
        if (1 != c.length || "insert" !== l.type || "$text" != l.name || 1 != l.length) return;
        const u = d.focus,
          h = u.parent,
          {
            text: g,
            range: m
          } = function (t, e) {
            let o = t.start;
            const i = Array.from(t.getItems()).reduce((t, i) => !i.is("$text") && !i.is("$textProxy") || i.getAttribute("code") ? (o = e.createPositionAfter(i), "") : t + i.data, "");
            return {
              text: i,
              range: e.createRange(o, t.end)
            };
          }(r.createRange(r.createPositionAt(h, 0), u), r),
          f = n(g),
          p = a(m.start, f.format, r),
          x = a(m.start, f.remove, r);
        p.length && x.length && r.enqueueChange(e => {
          if (!1 !== i(e, p)) {
            for (const t of x.reverse()) e.remove(t);
            r.enqueueChange(() => {
              t.plugins.get("Delete").requestUndoOnBackspace();
            });
          }
        });
      });
    }
    function a(t, e, o) {
      return e.filter(t => void 0 !== t[0] && void 0 !== t[1]).map(e => o.createRange(t.getShiftedBy(e[0]), t.getShiftedBy(e[1])));
    }
    class c extends t.Plugin {
      static get requires() {
        return [e.Delete];
      }
      static get pluginName() {
        return "Autoformat";
      }
      afterInit() {
        this._addListAutoformats(), this._addBasicStylesAutoformats(), this._addHeadingAutoformats(), this._addBlockQuoteAutoformats(), this._addCodeBlockAutoformats(), this._addHorizontalLineAutoformats();
      }
      _addListAutoformats() {
        const t = this.editor.commands;
        t.get("bulletedList") && r(this.editor, this, /^[*-]\s$/, "bulletedList"), t.get("numberedList") && r(this.editor, this, /^1[.|)]\s$/, "numberedList"), t.get("todoList") && r(this.editor, this, /^\[\s?\]\s$/, "todoList"), t.get("checkTodoList") && r(this.editor, this, /^\[\s?x\s?\]\s$/, () => {
          this.editor.execute("todoList"), this.editor.execute("checkTodoList");
        });
      }
      _addBasicStylesAutoformats() {
        const t = this.editor.commands;
        if (t.get("bold")) {
          const t = l(this.editor, "bold");
          d(this.editor, this, /(?:^|\s)(\*\*)([^*]+)(\*\*)$/g, t), d(this.editor, this, /(?:^|\s)(__)([^_]+)(__)$/g, t);
        }
        if (t.get("italic")) {
          const t = l(this.editor, "italic");
          d(this.editor, this, /(?:^|\s)(\*)([^*_]+)(\*)$/g, t), d(this.editor, this, /(?:^|\s)(_)([^_]+)(_)$/g, t);
        }
        if (t.get("code")) {
          const t = l(this.editor, "code");
          d(this.editor, this, /(`)([^`]+)(`)$/g, t);
        }
        if (t.get("strikethrough")) {
          const t = l(this.editor, "strikethrough");
          d(this.editor, this, /(~~)([^~]+)(~~)$/g, t);
        }
      }
      _addHeadingAutoformats() {
        const t = this.editor.commands.get("heading");
        t && t.modelElements.filter(t => t.match(/^heading[1-6]$/)).forEach(e => {
          const o = e[7],
            i = new RegExp(`^(#{${o}})\\s$`);
          r(this.editor, this, i, () => {
            if (!t.isEnabled || t.value === e) return !1;
            this.editor.execute("heading", {
              value: e
            });
          });
        });
      }
      _addBlockQuoteAutoformats() {
        this.editor.commands.get("blockQuote") && r(this.editor, this, /^>\s$/, "blockQuote");
      }
      _addCodeBlockAutoformats() {
        const t = this.editor,
          e = t.model.document.selection;
        t.commands.get("codeBlock") && r(t, this, /^```$/, () => {
          if (e.getFirstPosition().parent.is("element", "listItem")) return !1;
          this.editor.execute("codeBlock", {
            usePreviousLanguageChoice: !0
          });
        });
      }
      _addHorizontalLineAutoformats() {
        this.editor.commands.get("horizontalLine") && r(this.editor, this, /^---$/, "horizontalLine");
      }
    }
    function l(t, e) {
      return (o, i) => {
        if (!t.commands.get(e).isEnabled) return !1;
        const s = t.model.schema.getValidRanges(i, e);
        for (const t of s) o.setAttribute(e, !0, t);
        o.removeSelectionAttribute(e);
      };
    }
  })(), (window.CKEditor5 = window.CKEditor5 || {}).autoformat = i;
})();