const onReady = () => {
    ClassicEditor.create(document.querySelector('#description'), {
        toolbar: {
            items: [
                'heading', '|',
                'bold', 'italic', 'alignment', 'bulletedList', 'numberedList', 'fontColor', 'fontSize', 'fontBackgroundColor', 'fontFamily', '|',
                'outdent', 'indent', '|',
                'link', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo', '|',
                'codeBlock', 'code', 'htmlEmbed'
            ]
        },
        language: 'ko',
        image: {
            toolbar: [
                'imageTextAlternative',
                'imageStyle:full',
                'imageStyle:side'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells'
            ]
        },
    })
        .then(editor => {
        editor = editor;
        editor.editing.view.focus();
        // $('.ck-editor').addClass('noSwipe');
    })
        .catch(error => {
          console.log(error);
        Log.e('ck-editor error');
    });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
export {};
