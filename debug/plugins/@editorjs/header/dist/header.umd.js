(function () {
  "use strict";

  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}.ce-header[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;display:none;cursor:text}.ce-header[contentEditable=true][data-placeholder]:empty:before{display:block}.ce-header[contentEditable=true][data-placeholder]:empty:focus:before{display:none}")), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
(function (n, r) {
  typeof exports == "object" && typeof module < "u" ? module.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self, n.Header = r());
})(this, function () {
  "use strict";

  const n = "",
    r = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>',
    o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>',
    a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>',
    h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>',
    d = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>',
    u = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>',
    g = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>'; /**
                                                                                                                                                                                                                                           * Header block for the Editor.js.
                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                           * @author CodeX (team@ifmo.su)
                                                                                                                                                                                                                                           * @copyright CodeX 2018
                                                                                                                                                                                                                                           * @license MIT
                                                                                                                                                                                                                                           * @version 2.0.0
                                                                                                                                                                                                                                           */
  class c {
    constructor({
      data: e,
      config: t,
      api: s,
      readOnly: i
    }) {
      this.api = s, this.readOnly = i, this._CSS = {
        block: this.api.styles.block,
        wrapper: "ce-header"
      }, this._settings = t, this._data = this.normalizeData(e), this._element = this.getTag();
    }
    normalizeData(e) {
      const t = {};
      return typeof e != "object" && (e = {}), t.text = e.text || "", t.level = parseInt(e.level) || this.defaultLevel.number, t;
    }
    render() {
      return this._element;
    }
    renderSettings() {
      return this.levels.map(e => ({
        icon: e.svg,
        label: this.api.i18n.t(`Heading ${e.number}`),
        onActivate: () => this.setLevel(e.number),
        closeOnActivate: !0,
        isActive: this.currentLevel.number === e.number
      }));
    }
    setLevel(e) {
      this.data = {
        level: e,
        text: this.data.text
      };
    }
    merge(e) {
      const t = {
        text: this.data.text + e.text,
        level: this.data.level
      };
      this.data = t;
    }
    validate(e) {
      return e.text.trim() !== "";
    }
    save(e) {
      return {
        text: e.innerHTML,
        level: this.currentLevel.number
      };
    }
    static get conversionConfig() {
      return {
        export: "text",
        import: "text"
      };
    }
    static get sanitize() {
      return {
        level: !1,
        text: {}
      };
    }
    static get isReadOnlySupported() {
      return !0;
    }
    get data() {
      return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
    }
    set data(e) {
      if (this._data = this.normalizeData(e), e.level !== void 0 && this._element.parentNode) {
        const t = this.getTag();
        t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
      }
      e.text !== void 0 && (this._element.innerHTML = this._data.text || "");
    }
    getTag() {
      const e = document.createElement(this.currentLevel.tag);
      return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", e.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e;
    }
    get currentLevel() {
      let e = this.levels.find(t => t.number === this._data.level);
      return e || (e = this.defaultLevel), e;
    }
    get defaultLevel() {
      if (this._settings.defaultLevel) {
        const e = this.levels.find(t => t.number === this._settings.defaultLevel);
        if (e) return e;
        console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels");
      }
      return this.levels[1];
    }
    get levels() {
      const e = [{
        number: 1,
        tag: "H1",
        svg: r
      }, {
        number: 2,
        tag: "H2",
        svg: o
      }, {
        number: 3,
        tag: "H3",
        svg: a
      }, {
        number: 4,
        tag: "H4",
        svg: h
      }, {
        number: 5,
        tag: "H5",
        svg: d
      }, {
        number: 6,
        tag: "H6",
        svg: u
      }];
      return this._settings.levels ? e.filter(t => this._settings.levels.includes(t.number)) : e;
    }
    onPaste(e) {
      const t = e.detail.data;
      let s = this.defaultLevel.number;
      switch (t.tagName) {
        case "H1":
          s = 1;
          break;
        case "H2":
          s = 2;
          break;
        case "H3":
          s = 3;
          break;
        case "H4":
          s = 4;
          break;
        case "H5":
          s = 5;
          break;
        case "H6":
          s = 6;
          break;
      }
      this._settings.levels && (s = this._settings.levels.reduce((i, l) => Math.abs(l - s) < Math.abs(i - s) ? l : i)), this.data = {
        level: s,
        text: t.innerHTML
      };
    }
    static get pasteConfig() {
      return {
        tags: ["H1", "H2", "H3", "H4", "H5", "H6"]
      };
    }
    static get toolbox() {
      return {
        icon: g,
        title: "Heading"
      };
    }
  }
  return c;
});