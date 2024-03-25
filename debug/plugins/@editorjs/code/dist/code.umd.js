(function () {
  "use strict";

  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".ce-code__textarea{min-height:200px;font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#41314e;line-height:1.6em;font-size:12px;background:#f8f7fa;border:1px solid #f1f1f4;box-shadow:none;white-space:pre;word-wrap:normal;overflow-x:auto;resize:vertical}")), document.head.appendChild(e);
    }
  } catch (o) {
    console.error("vite-plugin-css-injected-by-js", o);
  }
})();
(function (o, i) {
  typeof exports == "object" && typeof module < "u" ? module.exports = i() : typeof define == "function" && define.amd ? define(i) : (o = typeof globalThis < "u" ? globalThis : o || self, o.CodeTool = i());
})(this, function () {
  "use strict";

  const o = "";
  function i(u, t) {
    let s = "";
    for (; s !== `
` && t > 0;) t = t - 1, s = u.substr(t, 1);
    return s === `
` && (t += 1), t;
  }
  const h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>'; /**
  * CodeTool for Editor.js
  *
  * @author CodeX (team@ifmo.su)
  * @copyright CodeX 2018
  * @license MIT
  * @version 2.0.0
  */
  class c {
    static get isReadOnlySupported() {
      return !0;
    }
    static get enableLineBreaks() {
      return !0;
    }
    constructor({
      data: t,
      config: e,
      api: s,
      readOnly: n
    }) {
      this.api = s, this.readOnly = n, this.placeholder = this.api.i18n.t(e.placeholder || c.DEFAULT_PLACEHOLDER), this.CSS = {
        baseClass: this.api.styles.block,
        input: this.api.styles.input,
        wrapper: "ce-code",
        textarea: "ce-code__textarea"
      }, this.nodes = {
        holder: null,
        textarea: null
      }, this.data = {
        code: t.code || ""
      }, this.nodes.holder = this.drawView();
    }
    drawView() {
      const t = document.createElement("div"),
        e = document.createElement("textarea");
      return t.classList.add(this.CSS.baseClass, this.CSS.wrapper), e.classList.add(this.CSS.textarea, this.CSS.input), e.textContent = this.data.code, e.placeholder = this.placeholder, this.readOnly && (e.disabled = !0), t.appendChild(e), e.addEventListener("keydown", (s) => {
        switch (s.code) {
          case "Tab":
            this.tabHandler(s);
            break;
        }
      }), this.nodes.textarea = e, t;
    }
    render() {
      return this.nodes.holder;
    }
    save(t) {
      return {
        code: t.querySelector("textarea").value
      };
    }
    onPaste(t) {
      const e = t.detail.data;
      this.data = {
        code: e.textContent
      };
    }
    get data() {
      return this._data;
    }
    set data(t) {
      this._data = t, this.nodes.textarea && (this.nodes.textarea.textContent = t.code);
    }
    static get toolbox() {
      return {
        icon: h,
        title: "Code"
      };
    }
    static get DEFAULT_PLACEHOLDER() {
      return "Enter a code";
    }
    static get pasteConfig() {
      return {
        tags: ["pre"]
      };
    }
    static get sanitize() {
      return {
        code: !0
      };
    }
    tabHandler(t) {
      t.stopPropagation(), t.preventDefault();
      const e = t.target,
        s = t.shiftKey,
        n = e.selectionStart,
        r = e.value,
        a = "  ";
      let d;
      if (!s) d = n + a.length, e.value = r.substring(0, n) + a + r.substring(n);else {
        const l = i(r, n);
        if (r.substr(l, a.length) !== a) return;
        e.value = r.substring(0, l) + r.substring(l + a.length), d = n - a.length;
      }
      e.setSelectionRange(d, d);
    }
  }
  return c;
});