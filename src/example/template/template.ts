import AsyncTask from 'src/flexvue/core/asynctask.class.js';
import {DataTypeInterface} from './datatype.interface.js';

const onReady = () : void =>
{
    ProgressBars.show();

    new AsyncTask().doImport( new URL(`../template/tpl/test.tpl.js`, import.meta.url).href )
    .then( (data : any) =>
    {
        // 데이터 설정
        const resp : DataTypeInterface = {
            name : '홍길동', age : 20, msg : [{name : '-홍'}]
        };

        Log.d(resp);
        const template = new data.Template();

        // 출력
        const outhtml_el = document.querySelector<HTMLDivElement>('#echo_contents');
        outhtml_el!.innerHTML = template.render( resp );

    })
    .finally(()=>{
        // close progress
        ProgressBars.close();
    });
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);