import ClassicEditor from "../../../flexvue/plugins/@ckeditor/ckeditor5-editor-classic/src/index.js/ckeditor5-build-classic";
const onReady = () => {
  const editorPlaceholder = document.querySelector('#editor');
  ClassicEditor.create(editorPlaceholder, {
    toolbar: {
      items: ['heading', '|', 'bold', 'italic', 'alignment', 'bulletedList', 'numberedList', 'fontColor', 'fontSize', 'fontBackgroundColor', 'fontFamily', '|', 'outdent', 'indent', '|', 'link', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo', '|', 'codeBlock', 'code', 'htmlEmbed']
    },
    language: 'ko',
    image: {
      toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side']
    },
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
    }
  }).then(editor => {
    editor = editor;
    editor.editing.view.focus();
    // $('.ck-editor').addClass('noSwipe');
  }).catch(error => {
    Log.e('ck-editor error');
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);