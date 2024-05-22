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
        new AsyncTask().doImport( new URL(`../menu1/tpl/Greeting.template${App.getLocale()}.js`, import.meta.url).href )
        .then(Module => {
            const greetingView : Template = new Module.GreetingView();

            document.querySelector<HTMLDivElement>('#left-content-container')!.innerHTML = greetingView.render({});
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
        new AsyncTask().doImport( new URL(`../menu1/tpl/Location.template${App.getLocale()}.js`, import.meta.url).href )
        .then(Module => {
            const locationView : Template = new Module.LocationView();

            document.querySelector<HTMLDivElement>('#left-content-container')!.innerHTML = locationView.render({});
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