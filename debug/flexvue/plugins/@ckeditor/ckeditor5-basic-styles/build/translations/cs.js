"use strict";

!function (n) {
  const i = n.cs = n.cs || {};
  i.dictionary = Object.assign(i.dictionary || {}, {
    Bold: "Tučné",
    Code: "Kódový blok",
    Italic: "Kurzíva",
    Strikethrough: "Přeškrtnuté",
    Subscript: "Dolní index",
    Superscript: "Horní index",
    Underline: "Podtržené"
  });
}(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));