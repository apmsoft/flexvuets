import Forms from '@flexvue/forms';
import AsyncTask from '@flexvue/asynctask';
import {Response} from '@flexvue/types';

const onReady = () : void =>
{
    // config
    config.src8 = '';
    config.src = config.host+'/'+config.src8;

    // 앱 정보
    const app = new App();
    Log.i(App.browser, App.version, App.os, App.lang);

    // activity
    new Activity().onBackPressed((state)=>{
        Log.i('onBackPressed : '+state);
    });

    // progress init
    new ProgressBars();

    // show progress
    ProgressBars.show();

    // application
    if(typeof localStorage.getItem(config.app_name+'um') !== 'undefined'){
        document.querySelector<HTMLInputElement>('#userid')!.value = localStorage.getItem(config.app_name+'um') ?? '';
    }

    // focus
    document.querySelector<HTMLInputElement>('#userid')!.focus();

    // submit
    new Forms('#theLoginForm').doSubmit((form_params)=>
    {
        ProgressBars.show();

        let send_params : Record<string, any> = Object.assign({}, form_params);
        new AsyncTask().execute('POST',`${config.src}/member/login`, send_params,config._options_,config._headers_)
        .then((resp : Response)=>{
            // Log.d(resp);

            // reject
            if(resp.result == 'false'){
                throw resp;
            }

            // true
            return resp;
        })
        .then( resp =>{
            localStorage.setItem(config.app_name+'um', send_params.userid);
            const userinfo = JSON.stringify(resp.msg);
            localStorage.setItem(config.app_name+'ummsg', userinfo);

            // move
            window.location.href = `./index.html#/`;
        })
        .catch( e =>{
            localStorage.setItem(config.app_name+'um', send_params.userid);
            alert(e.msg);
            if(typeof e.fieldname !=='undefined'){
                document.querySelector<HTMLInputElement>(`#${e.fieldname}`)!.focus();
            }
        })
        .finally(()=>{
            // close progress
            ProgressBars.close();
        });
    });

    // 로그인버튼 활성화 체크
    let enable_submit_cnt = 0;
    document.querySelectorAll('input').forEach(function(el)
    {
        let _id = el.getAttribute('id');
        if(_id == 'userid' || _id == 'passwd')
        {
            el.addEventListener('keypress',function(e)
            {
                let _userid = document.querySelector<HTMLInputElement>('#userid')!.value;
                let _passwd = document.querySelector<HTMLInputElement>('#passwd')!.value;
                if((_userid && _userid !='') && (_passwd && _passwd !='')){
                    enable_submit_cnt = 2;
                }else{
                    enable_submit_cnt = 1;
                }

                if(enable_submit_cnt >= 2){
                    let b = document.querySelector<HTMLButtonElement>('button[type="submit"]')!;
                    b.removeAttribute('disabled');
                    b.classList.remove('opacity-25');
                }else{
                    let b = document.querySelector<HTMLButtonElement>('button[type="submit"]')!;
                    b.setAttribute('disabled','disabled');
                    b.classList.add('opacity-25');
                }
            });
        }
    });


    // close progress
    ProgressBars.close();
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);