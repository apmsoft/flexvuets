import Forms from '@flexvue/forms';
import AsyncTask from '@flexvue/asynctask';
import {Response, Template} from '@flexvue/types';

// class
class ComponentActivity
{
    constructor(){
    }

    doList(params : object = {}){
        ProgressBars.show();

        const self = this;

        // send params
        let send_params = {};
        send_params = Object.assign(send_params, params);

        // panel
        Activity.onStart('#left');

        // multiout
        Promise.all([
            new AsyncTask().execute('POST',`${config.src}/manager/list`, send_params,config._options_,config._headers_),
            new AsyncTask().doImport( new URL(`../manager/tpl/list${App.getLocale()}.js`, import.meta.url).href )
        ]).then((data) => {
            const template : Template = new data[1].Template();
            const resp : Response = data[0];
            // Log.d(resp);

            // reject
            if(resp.result == 'false'){
                throw resp;
            }

            // result
            document.querySelector<HTMLDivElement>('#left_docs_contents')!.innerHTML = template.render(resp);
            return resp;
        })
        .then( resp =>
        {
            // scroll top
            document.querySelector<HTMLDivElement>('#left_docs_contents')!.scrollTo({top: 0, behavior: 'smooth'});

            // 체크박스 all
            document.querySelector<HTMLInputElement>('#chkall')!.addEventListener('click', function(){
                let _checked = this.checked;
                document.querySelectorAll<HTMLInputElement>('chkid').forEach((el) =>{
                    if(_checked){
                        el.checked = true;
                    }else{
                        el.checked = false;
                    }
                });
            },false);

            // 삭제
            document.querySelector<HTMLInputElement>('#btn-remove-data')!.addEventListener('click', function()
            {
                let chks : string[] = [];
                document.querySelectorAll<HTMLInputElement>('chkid')!.forEach((el) =>{
                    if(el.checked){
                        chks.push(el.value);
                    }
                });
                if(chks.length < 1){
                    alert(R.sysmsg.i_checkbox);
                    return false;
                }

                let cf = confirm(R.sysmsg.i_confirm_delete);
                if(cf)
                {
                    ProgressBars.show();
                    new AsyncTask().execute('DELETE',`${config.src}/manager/delete`, {chk : chks.join(",")}, config._options_,config._headers_)
                    .then((resp)=>{

                        // reject
                        if(resp.result == 'false'){
                            throw resp;
                        }

                        // doList
                        self.doList({page: 1});
                    }).catch(e =>{
                        alert(resp.msg);
                        window.observable.notify('exception',e);
                    })
                    .finally(()=>{ 
                        ProgressBars.close(); 
                    });
                }
            },false);

            // 수정
            document.querySelectorAll<HTMLButtonElement>('.btn-edit').forEach(function(el){
                el.addEventListener('click', function(){
                    let _id : string = el.dataset.id ?? '';

                    window.location.hash = `#/manager/edit?${new URLSearchParams({id : _id})}`;
                },false);
            });
        })
        .catch(e =>{
            alert(e.msg);
            window.observable.notify('exception',e);
        })
        .finally(()=>{ 
            ProgressBars.close(); 
        });
    }

    doPost(){
        ProgressBars.show();

        const self = this;

        // send params
        let send_params = {};
        send_params = Object.assign({}, send_params);

        // panel
        Activity.onStart('#left');

        // multiout
        new AsyncTask().doImport( new URL(`../manager/tpl/post${App.getLocale()}.js`, import.meta.url).href )
        .then(Module => 
        {
            const template = new Module.Template();
            document.querySelector<HTMLDivElement>('#left_docs_contents')!.innerHTML = template.render({});

            // submit
            new Forms('#theManagerPostForm').doSubmit((form_params)=>
            {
                ProgressBars.show();
                let send_params = Object.assign({}, form_params);
                new AsyncTask().execute('POST',`${config.src}/manager/insert`, send_params, config._options_,config._headers_)
                .then((resp)=>
                {
                    // Log.d(resp);

                    // reject
                    if(resp.result == 'false'){
                        throw resp;
                    }

                    // close window
                    history.go(-1);
                })
                .catch((e) => {
                    alert(e.msg);
                    window.observable.notify('exception',e);
                })
                .finally(()=>{ 
                    ProgressBars.close(); 
                });
            });
        })
        .catch((e) => {
            alert(e.msg);
            window.observable.notify('exception',e);
        })
        .finally(()=>{ 
            ProgressBars.close(); 
        });
    }

    doEdit(params : { id?: number } = {})
    {
        ProgressBars.show();

        // send params
        let send_params : object = {};
        send_params = Object.assign(send_params, params);

        // panel
        Activity.onStart('#left');

        Promise.all([
            new AsyncTask().execute('PATCH',`${config.src}/manager/edit/${params.id}`, send_params,config._options_,config._headers_), 
            new AsyncTask().doImport( new URL(`../manager/tpl/edit${App.getLocale()}.js`, import.meta.url).href )
        ]).then((data) => {
            const template = new data[1].Template();
            const resp = data[0];

            // reject
            if(resp.result == 'false'){
                throw resp;
            }

            document.querySelector<HTMLDivElement>('#left_docs_contents')!.innerHTML = template.render(resp);
            return resp;
        })
        .then(resp=>
        {
            // submit
            new Forms('#theManagerEditForm').doSubmit((form_params)=>
            {
                ProgressBars.show();

                let send_params = Object.assign(params, form_params);
                new AsyncTask().execute('PUT',`${config.src}/manager/update/${send_params.id}`, send_params,config._options_,config._headers_)
                .then((resp)=>
                {
                    Log.d(resp);

                    // result
                    if(resp.result == 'true'){
                        // callback();
                        history.go(-1);
                    }else{
                        ProgressBars.close();
                        alert(resp.msg);
                        if(typeof resp.fieldname !=='undefined'){
                            document.querySelector<HTMLInputElement>(`#${resp.fieldname}`)!.focus();
                        }
                    }
                }).catch((e) => {
                    alert(e.msg);
                    window.observable.notify('exception',e);
                })
                .finally(()=>{ 
                    ProgressBars.close(); 
                });
            });
        })
        .catch((e)=>{
            alert(e.msg);
            window.observable.notify('exception',e);
        })
        .finally(()=>{ ProgressBars.close(); } );
    }
}
export {ComponentActivity};