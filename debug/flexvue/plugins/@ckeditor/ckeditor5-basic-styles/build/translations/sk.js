"use strict";

!function (n) {
  const i = n.sk = n.sk || {};
  i.dictionary = Object.assign(i.dictionary || {}, {
    Bold: "Tučné",
    Code: "Kód",
    Italic: "Kurzíva",
    Strikethrough: "Preškrtnuté",
    Subscript: "Dolný index",
    Superscript: "Horný index",
    Underline: "Podčiarknuté"
  });
}(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));