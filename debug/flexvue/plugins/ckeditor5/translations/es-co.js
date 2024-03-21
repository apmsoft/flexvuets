"use strict";

(function (e) {
  var o = e["es-co"] = e["es-co"] || {};
  o.dictionary = Object.assign(o.dictionary || {}, {
    "%0 of %1": "%0 de %1",
    "Block quote": "Cita de bloque",
    Bold: "Negrita",
    Cancel: "Cancelar",
    Code: "Código",
    "Insert code block": "Insertar bloque de código",
    Italic: "Cursiva",
    "Plain text": "Texto plano",
    "Remove color": "Quitar color",
    "Restore default": "Restaurar valores predeterminados",
    Save: "Guardar",
    "Show more items": "Mostrar más elementos",
    Strikethrough: "Tachado",
    Subscript: "Subíndice",
    Underline: "Subrayado",
    "Upload in progress": "Carga en progreso"
  });
  o.getPluralForm = function (e) {
    return e == 1 ? 0 : e != 0 && e % 1e6 == 0 ? 1 : 2;
  };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));