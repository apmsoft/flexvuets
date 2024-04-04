import AsyncTask from '@flexvue/asynctask';
import {Template} from '@flexvue/types';
class ComponentActivity {
    constructor(){
    }

    doGreeting (params : any | object = {}) : void {

        ProgressBars.show();

        const self = this;

        // panel
        Activity.onStart('#left');

        // multiout
        new AsyncTask().doImport( new URL(`../menu1/tpl/greeting${App.getLocale()}.js`, import.meta.url).href )
        .then(Module => {
            const template : Template = new Module.Template();

            document.querySelector<HTMLDivElement>('#left-content-container')!.innerHTML = template.render({});
            return 'ok';
        })
        .then(resp=>
        {
            // scroll top
            document.querySelector<HTMLDivElement>('#left-layout--main')!.scrollTo({top: 0, behavior: 'smooth'});
        })
        .finally(()=>{ 
            ProgressBars.close(); 
        });
    }

    doLocation (params : any | object = {}) : void {

        ProgressBars.show();

        const self = this;

        // panel
        Activity.onStart('#left');

        // multiout
        new AsyncTask().doImport( new URL(`../menu1/tpl/location${App.getLocale()}.js`, import.meta.url).href )
        .then(Module => {
            const template : Template = new Module.Template();

            document.querySelector<HTMLDivElement>('#left-content-container')!.innerHTML = template.render({});
            return 'ok';
        })
        .then(resp=>
        {
            // scroll top
            document.querySelector<HTMLDivElement>('#left-layout--main')!.scrollTo({top: 0, behavior: 'smooth'});
        })
        .finally(()=>{
            ProgressBars.close();
        });
    }
}

export {ComponentActivity};