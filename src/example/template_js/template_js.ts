import AsyncTask from '@flexvue/asynctask';
import {Template} from '@flexvue/types';

const onReady = () : void =>
{
    ProgressBars.show();

    new AsyncTask().doImport( new URL(`../template_js/tpl/test.tpl.js`, import.meta.url).href )
    .then( (data) =>
    {
        const template : Template = new data.Template();

        // 출력
        const outhtml_el = document.querySelector<HTMLDivElement>('#echo_contents')!.innerHTML = template.render( {
            name : "홍길동",
            age : 17,
            msg : [
                {
                    name : "유관순"
                }
            ]
        } );

    })
    .finally(()=>{
        // close progress
        ProgressBars.close();
    });
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);