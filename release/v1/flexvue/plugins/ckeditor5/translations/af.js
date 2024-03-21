"use strict";

(function (e) {
  var r = e["af"] = e["af"] || {};
  r.dictionary = Object.assign(r.dictionary || {}, {
    "%0 of %1": "%0 van %1",
    "Block quote": "Verwysingsaanhaling",
    Bold: "Vet",
    Cancel: "Kanselleer",
    Code: "Bronkode",
    "Insert code block": "Voeg bronkodeblok in",
    Italic: "Kursief",
    "Plain text": "Gewone skrif",
    "Remove color": "Verwyder kleur",
    "Restore default": "Herstel verstek",
    Save: "Stoor",
    "Show more items": "Wys meer items",
    Strikethrough: "Deurstreep",
    Subscript: "Onderskrif",
    Underline: "Onderstreep"
  });
  r.getPluralForm = function (e) {
    return e != 1;
  };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
//# sourceMappingURL=af.js.map