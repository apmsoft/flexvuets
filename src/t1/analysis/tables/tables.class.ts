import AsyncTask from '@flexvue/asynctask';
import {Response, Template} from '@flexvue/types';

class ComponentActivity {
    constructor(){
    }

    do(params : Record<string,any> = {}){
        ProgressBars.show();

        // send params
        let send_params = {};
        send_params = Object.assign(send_params, params);

        // panel
        Activity.onStart('#left');

        // multiout
        Promise.all([
            new AsyncTask().execute('POST',`${config.src}/analysis/tables`,{},config._options_,config._headers_), 
            new AsyncTask().doImport( new URL(`../tables/tpl/list${App.getLocale()}.js`, import.meta.url).href )
        ])
        .then((data) => {
            const template : Template = new data[1].Template();
            const resp : Response= data[0];

            // reject
            if(resp.result == 'false'){
                throw resp;
            }

            document.querySelector<HTMLDivElement>('#left_docs_contents')!.innerHTML = template.render(resp);
            return resp;
        })
        .then(resp=>{
            // scroll top
            document.querySelector<HTMLDivElement>('#left-col-3')!.scrollTo({top: 0, behavior: 'smooth'});
        })
        .catch(err=>{
            window.observable.notify('exception',err);
        })
        .finally(()=>{ 
            ProgressBars.close(); 
        });
    }
}
export {ComponentActivity};