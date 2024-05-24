import {Template} from '@flexvue/types';
import AsyncTask from '@flexvue/asynctask';
import Forms from '@flexvue/forms';
import {ElementDiv, ElementSelect} from '@flexvue/elementshtml';
const onReady = () : void =>
{
    new AsyncTask().doImport(new URL(`../components/tpl/form.template.js`, import.meta.url).href )
    .then( Module =>{
        const editView : Template = new Module.EditView();

        // output
        new ElementDiv('#fvue--layout--main').html( editView.render({}));
        return 'ok';
    })
    .then(ok => {
        // level select
        new ElementSelect('#level').selected('999').addEventListener('change', (el,value)=>{
            alert(value);
        });

        // form
        new Forms('#theManagerEditForm').doSubmit( form_params =>
        {
            Log.d( form_params );
        });
    });
};



// document ready
document.addEventListener("DOMContentLoaded",onReady);
