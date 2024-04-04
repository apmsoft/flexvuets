import AsyncTask from '@flexvue/asynctask';
import ScrollAgent from '@flexvue/scrollagent';
import {Template} from '@flexvue/types';

class ComponentActivity {
    private TAG : string;
    constructor(){
        this.TAG = 'Menu3Activity';
    }

    doList (params : any | object = {}) {

        ProgressBars.show();

        const self = this;

        // send params
        let send_params = {};
        send_params = Object.assign(send_params, params);

        // panel
        Activity.onStart('#left');

        // multiout
        Promise.all([
            new AsyncTask().doImport( new URL(`../menu3/tpl/list${App.getLocale()}.js`, import.meta.url).href )
        ]).then(data => {
            const template : Template = new data[0].Template();


            document.querySelector<HTMLDivElement>('#left-content-container')!.innerHTML = template.render({});
            return 'ok';
        })
        .then(resp=>
        {
            // 스크롤포지션 vertical
            const scrollAgent = new ScrollAgent('menu3');
            const preTopPos = scrollAgent.getPos();
            scrollAgent.addScrollListener('vertical', '#left-layout--main');
            scrollAgent.scrollTo({top: preTopPos});
        })
        .catch(e =>{
            window.observable.notify('exception',e);
        })
        .finally(()=>{ 
            ProgressBars.close(); 
        });
    }
}

export {ComponentActivity};