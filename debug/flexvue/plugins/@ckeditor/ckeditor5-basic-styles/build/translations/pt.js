"use strict";

!function (i) {
  const o = i.pt = i.pt || {};
  o.dictionary = Object.assign(o.dictionary || {}, {
    Bold: "Negrito",
    Code: "Código",
    Italic: "Itálico",
    Strikethrough: "Riscado",
    Subscript: "Subscrito",
    Superscript: "Sobrescrito",
    Underline: "Sublinhado"
  });
}(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));