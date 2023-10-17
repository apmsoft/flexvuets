"use strict";

/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
(() => {
  var e = {
      945: (e, r, t) => {
        e.exports = t(79)("./src/clipboard.js");
      },
      704: (e, r, t) => {
        e.exports = t(79)("./src/core.js");
      },
      331: (e, r, t) => {
        e.exports = t(79)("./src/enter.js");
      },
      468: (e, r, t) => {
        e.exports = t(79)("./src/select-all.js");
      },
      181: (e, r, t) => {
        e.exports = t(79)("./src/typing.js");
      },
      254: (e, r, t) => {
        e.exports = t(79)("./src/undo.js");
      },
      79: e => {
        "use strict";

        e.exports = CKEditor5.dll;
      }
    },
    r = {};
  function t(s) {
    var o = r[s];
    if (void 0 !== o) return o.exports;
    var n = r[s] = {
      exports: {}
    };
    return e[s](n, n.exports, t), n.exports;
  }
  t.d = (e, r) => {
    for (var s in r) t.o(r, s) && !t.o(e, s) && Object.defineProperty(e, s, {
      enumerable: !0,
      get: r[s]
    });
  }, t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), t.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  };
  var s = {};
  (() => {
    "use strict";

    t.r(s), t.d(s, {
      Essentials: () => a
    });
    var e = t(704),
      r = t(945),
      o = t(331),
      n = t(468),
      i = t(181),
      l = t(254);
    class a extends e.Plugin {
      static get requires() {
        return [r.Clipboard, o.Enter, n.SelectAll, o.ShiftEnter, i.Typing, l.Undo];
      }
      static get pluginName() {
        return "Essentials";
      }
    }
  })(), (window.CKEditor5 = window.CKEditor5 || {}).essentials = s;
})();