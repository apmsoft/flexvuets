"use strict";

!function (n) {
  const i = n.nb = n.nb || {};
  i.dictionary = Object.assign(i.dictionary || {}, {
    Bold: "Fet",
    Code: "Kode",
    Italic: "Kursiv",
    Strikethrough: "Gjennomstreking",
    Subscript: "",
    Superscript: "",
    Underline: "Understreking"
  });
}(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));