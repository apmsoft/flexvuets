(function () {
  "use strict";

  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}")), document.head.appendChild(t);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
(function (s, o) {
  typeof exports == "object" && typeof module < "u" ? module.exports = o() : typeof define == "function" && define.amd ? define(o) : (s = typeof globalThis < "u" ? globalThis : s || self, s.Quote = o());
})(this, function () {
  "use strict";

  const s = "",
    o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>',
    c = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>',
    l = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>';
  class i {
    static get isReadOnlySupported() {
      return !0;
    }
    static get toolbox() {
      return {
        icon: l,
        title: "Quote"
      };
    }
    static get contentless() {
      return !0;
    }
    static get enableLineBreaks() {
      return !0;
    }
    static get DEFAULT_QUOTE_PLACEHOLDER() {
      return "Enter a quote";
    }
    static get DEFAULT_CAPTION_PLACEHOLDER() {
      return "Enter a caption";
    }
    static get ALIGNMENTS() {
      return {
        left: "left",
        center: "center"
      };
    }
    static get DEFAULT_ALIGNMENT() {
      return i.ALIGNMENTS.left;
    }
    static get conversionConfig() {
      return {
        import: "text",
        export: function (t) {
          return t.caption ? `${t.text} — ${t.caption}` : t.text;
        }
      };
    }
    get CSS() {
      return {
        baseClass: this.api.styles.block,
        wrapper: "cdx-quote",
        text: "cdx-quote__text",
        input: this.api.styles.input,
        caption: "cdx-quote__caption"
      };
    }
    get settings() {
      return [{
        name: "left",
        icon: c
      }, {
        name: "center",
        icon: o
      }];
    }
    constructor({
      data: t,
      config: e,
      api: n,
      readOnly: r
    }) {
      const {
        ALIGNMENTS: a,
        DEFAULT_ALIGNMENT: d
      } = i;
      this.api = n, this.readOnly = r, this.quotePlaceholder = e.quotePlaceholder || i.DEFAULT_QUOTE_PLACEHOLDER, this.captionPlaceholder = e.captionPlaceholder || i.DEFAULT_CAPTION_PLACEHOLDER, this.data = {
        text: t.text || "",
        caption: t.caption || "",
        alignment: Object.values(a).includes(t.alignment) && t.alignment || e.defaultAlignment || d
      };
    }
    render() {
      const t = this._make("blockquote", [this.CSS.baseClass, this.CSS.wrapper]),
        e = this._make("div", [this.CSS.input, this.CSS.text], {
          contentEditable: !this.readOnly,
          innerHTML: this.data.text
        }),
        n = this._make("div", [this.CSS.input, this.CSS.caption], {
          contentEditable: !this.readOnly,
          innerHTML: this.data.caption
        });
      return e.dataset.placeholder = this.quotePlaceholder, n.dataset.placeholder = this.captionPlaceholder, t.appendChild(e), t.appendChild(n), t;
    }
    save(t) {
      const e = t.querySelector(`.${this.CSS.text}`),
        n = t.querySelector(`.${this.CSS.caption}`);
      return Object.assign(this.data, {
        text: e.innerHTML,
        caption: n.innerHTML
      });
    }
    static get sanitize() {
      return {
        text: {
          br: !0
        },
        caption: {
          br: !0
        },
        alignment: {}
      };
    }
    renderSettings() {
      const t = e => e[0].toUpperCase() + e.substr(1);
      return this.settings.map(e => ({
        icon: e.icon,
        label: this.api.i18n.t(`Align ${t(e.name)}`),
        onActivate: () => this._toggleTune(e.name),
        isActive: this.data.alignment === e.name,
        closeOnActivate: !0
      }));
    }
    _toggleTune(t) {
      this.data.alignment = t;
    }
    _make(t, e = null, n = {}) {
      const r = document.createElement(t);
      Array.isArray(e) ? r.classList.add(...e) : e && r.classList.add(e);
      for (const a in n) r[a] = n[a];
      return r;
    }
  }
  return i;
});