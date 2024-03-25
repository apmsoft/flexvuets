import AsyncTask from '@flexvue/core/asynctask.class.js';
import Template from '@flexvue/core/template.class.js';
import {DataTypeInterface} from './datatype.interface.js';

const onReady = () : void =>
{
    ProgressBars.show();

    new Template().readFile( new URL(`../template_html/tpl/test.tpl.html`, import.meta.url).href )
    .then( (template : any) =>
    {
        // 데이터 설정
        const resp : DataTypeInterface = {
            name : '홍길동', age : 20, msg : [{name : '-홍'}]
        };

        // 출력
        const outhtml_el = document.querySelector<HTMLDivElement>('#echo_contents');
        outhtml_el!.innerHTML = new Template().render( template, {message: resp} );

    })
    .finally(()=>{
        // close progress
        ProgressBars.close();
    });
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);