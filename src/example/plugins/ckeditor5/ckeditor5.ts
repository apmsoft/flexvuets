/** ckeditor5 */
import {} from 'src/flexvue/plugins/ckeditor5/ckeditor.js';

const onReady = () : void =>
{
    // editor
    ClassicEditor.create( document.querySelector( '#description' ),{
        toolbar: {
            items: [
                'heading','|',
				'bold','italic','alignment','bulletedList','numberedList','fontColor','fontSize','fontBackgroundColor','fontFamily','|',
				'outdent','indent','|',
				'link','blockQuote','insertTable','mediaEmbed','undo','redo','|',
				'codeBlock','code','htmlEmbed'
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
    // @ts-ignore
    .then(editor => {
        editor = editor;
        editor.editing.view.focus();

        // $('.ck-editor').addClass('noSwipe');
    })
    // @ts-ignore
    .catch( error => {
        Log.e( error );
    });
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
