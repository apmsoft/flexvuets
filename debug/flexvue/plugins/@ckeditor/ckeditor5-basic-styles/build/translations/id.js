"use strict";

!function (i) {
  const r = i.id = i.id || {};
  r.dictionary = Object.assign(r.dictionary || {}, {
    Bold: "Tebal",
    Code: "Kode",
    Italic: "Miring",
    Strikethrough: "Coret",
    Subscript: "Subskrip",
    Superscript: "Superskrip",
    Underline: "Garis bawah"
  });
}(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));