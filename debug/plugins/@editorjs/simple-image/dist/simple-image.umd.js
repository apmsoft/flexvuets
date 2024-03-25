(function () {
  "use strict";

  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".cdx-simple-image .cdx-loader{min-height:200px}.cdx-simple-image .cdx-input{margin-top:10px}.cdx-simple-image img{max-width:100%;vertical-align:bottom}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-simple-image__picture--with-background{background:#eff2f5;padding:10px}.cdx-simple-image__picture--with-background img{display:block;max-width:60%;margin:0 auto}.cdx-simple-image__picture--with-border{border:1px solid #e8e8eb;padding:1px}.cdx-simple-image__picture--stretched img{max-width:none;width:100%}")), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
(function (s, n) {
  typeof exports == "object" && typeof module < "u" ? module.exports = n() : typeof define == "function" && define.amd ? define(n) : (s = typeof globalThis < "u" ? globalThis : s || self, s.SimpleImage = n());
})(this, function () {
  "use strict";

  const s = "",
    n = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>',
    a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>',
    d = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
  class l {
    constructor({
      data: e,
      config: t,
      api: r,
      readOnly: i
    }) {
      this.api = r, this.readOnly = i, this.blockIndex = this.api.blocks.getCurrentBlockIndex() + 1, this.CSS = {
        baseClass: this.api.styles.block,
        loading: this.api.styles.loader,
        input: this.api.styles.input,
        wrapper: "cdx-simple-image",
        imageHolder: "cdx-simple-image__picture",
        caption: "cdx-simple-image__caption"
      }, this.nodes = {
        wrapper: null,
        imageHolder: null,
        image: null,
        caption: null
      }, this.data = {
        url: e.url || "",
        caption: e.caption || "",
        withBorder: e.withBorder !== void 0 ? e.withBorder : !1,
        withBackground: e.withBackground !== void 0 ? e.withBackground : !1,
        stretched: e.stretched !== void 0 ? e.stretched : !1
      }, this.tunes = [{
        name: "withBorder",
        label: "Add Border",
        icon: a
      }, {
        name: "stretched",
        label: "Stretch Image",
        icon: d
      }, {
        name: "withBackground",
        label: "Add Background",
        icon: n
      }];
    }
    render() {
      const e = this._make("div", [this.CSS.baseClass, this.CSS.wrapper]),
        t = this._make("div", this.CSS.loading),
        r = this._make("div", this.CSS.imageHolder),
        i = this._make("img"),
        o = this._make("div", [this.CSS.input, this.CSS.caption], {
          contentEditable: !this.readOnly,
          innerHTML: this.data.caption || ""
        });
      return o.dataset.placeholder = "Enter a caption", e.appendChild(t), this.data.url && (i.src = this.data.url), i.onload = () => {
        e.classList.remove(this.CSS.loading), r.appendChild(i), e.appendChild(r), e.appendChild(o), t.remove(), this._acceptTuneView();
      }, i.onerror = (h) => {
        console.log("Failed to load an image", h);
      }, this.nodes.imageHolder = r, this.nodes.wrapper = e, this.nodes.image = i, this.nodes.caption = o, e;
    }
    save(e) {
      const t = e.querySelector("img"),
        r = e.querySelector("." + this.CSS.input);
      return t ? Object.assign(this.data, {
        url: t.src,
        caption: r.innerHTML
      }) : this.data;
    }
    static get sanitize() {
      return {
        url: {},
        withBorder: {},
        withBackground: {},
        stretched: {},
        caption: {
          br: !0
        }
      };
    }
    static get isReadOnlySupported() {
      return !0;
    }
    onDropHandler(e) {
      const t = new FileReader();
      return t.readAsDataURL(e), new Promise((r) => {
        t.onload = (i) => {
          r({
            url: i.target.result,
            caption: e.name
          });
        };
      });
    }
    onPaste(e) {
      switch (e.type) {
        case "tag":
          {
            const t = e.detail.data;
            this.data = {
              url: t.src
            };
            break;
          }
        case "pattern":
          {
            const {
              data: t
            } = e.detail;
            this.data = {
              url: t
            };
            break;
          }
        case "file":
          {
            const {
              file: t
            } = e.detail;
            this.onDropHandler(t).then((r) => {
              this.data = r;
            });
            break;
          }
      }
    }
    get data() {
      return this._data;
    }
    set data(e) {
      this._data = Object.assign({}, this.data, e), this.nodes.image && (this.nodes.image.src = this.data.url), this.nodes.caption && (this.nodes.caption.innerHTML = this.data.caption);
    }
    static get pasteConfig() {
      return {
        patterns: {
          image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|webp)$/i
        },
        tags: [{
          img: {
            src: !0
          }
        }],
        files: {
          mimeTypes: ["image/*"]
        }
      };
    }
    renderSettings() {
      return this.tunes.map((e) => ({
        ...e,
        label: this.api.i18n.t(e.label),
        toggle: !0,
        onActivate: () => this._toggleTune(e.name),
        isActive: !!this.data[e.name]
      }));
    }
    _make(e, t = null, r = {}) {
      const i = document.createElement(e);
      Array.isArray(t) ? i.classList.add(...t) : t && i.classList.add(t);
      for (const o in r) i[o] = r[o];
      return i;
    }
    _toggleTune(e) {
      this.data[e] = !this.data[e], this._acceptTuneView();
    }
    _acceptTuneView() {
      this.tunes.forEach((e) => {
        this.nodes.imageHolder.classList.toggle(this.CSS.imageHolder + "--" + e.name.replace(/([A-Z])/g, (t) => `-${t[0].toLowerCase()}`), !!this.data[e.name]), e.name === "stretched" && this.api.blocks.stretchBlock(this.blockIndex, !!this.data.stretched);
      });
    }
  }
  return l;
});