import {Template} from '@flexvue/types';
import AsyncTask from '@flexvue/asynctask';
import Forms from '@flexvue/forms';
import {ElementDiv, ElementInput, ElementSelect} from '@flexvue/elements/manager';
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

        new ElementInput('#name')
            .addEventListener('change', (el,value)=>{
                Log.d('name ',value);
            })
            .addEventListener('focus', (el,value)=>{
                el.classList.add('!bg-blue-200')
            })
            .addEventListener('focusout', (el,value)=>{
                el.classList.remove('!bg-blue-200')
            });

        // form
        new Forms('#theManagerEditForm').doSubmit( form_params =>
        {
            Log.d( form_params );
        });
    });
};



// document ready
(new App()).setLanguages([]).setResoures({
    sysmsg : new URL(`./js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
    arrays : new URL(`./js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
    strings: new URL(`./js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(onReady);
