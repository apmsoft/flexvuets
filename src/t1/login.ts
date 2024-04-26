import Forms from '@flexvue/forms';
import AsyncTask from '@flexvue/asynctask';
import {Response} from '@flexvue/types';
import CryptoES from 'crypto-es';
import {CacheLocalStorage} from '@flexvue/caches';

const onReady = () : void =>
{
    // config
    config.src = config.host+'/'+config.src9;

    // 앱 정보
    Log.i(App.browser, App.version, App.os, App.lang);

    // activity
    new Activity().onBackPressed((state)=>{
        Log.i('onBackPressed : '+state);
        // history.go(-1);
    });

    // progress init
    new ProgressBars();

    // show progress
    ProgressBars.show();

    // cache
    window.cacheStorage = new CacheLocalStorage( config.app_name+"am" );

    // check cache
    const input_userid = document.querySelector<HTMLInputElement>('#userid')!;
    input_userid.value = window.cacheStorage._get('amid') ?? '';
    input_userid.focus();

    // submit
    new Forms('#theAdminLoginForm').doSubmit((form_params)=>
    {
        ProgressBars.show();

        let send_params : Record<string, any> = Object.assign({}, form_params);

        new AsyncTask().execute('POST',`${config.src}/manager/gettokens`, {userid : send_params.userid},config._options_,config._headers_)
        .then((resp : Response)=>
        {
            // Log.d(resp);

            // reject
            if(resp.result == 'false'){
                throw resp;
            }

            const secret_key   = resp.secret_key;
            const iv           = CryptoES.SHA256(resp.iv).toString(CryptoES.enc.Hex).substring(0, 16);
            send_params.passwd = CryptoES.AES.encrypt(send_params.passwd, secret_key, { iv: CryptoES.enc.Hex.parse(iv), mode: CryptoES.mode.CBC }).toString();

            // true
            return 'ok';
        })
        .then(ok =>
        {
            new AsyncTask().execute('POST',`${config.src}/manager/login`, send_params,config._options_,config._headers_)
            .then((resp : Response)=>{
                // Log.d(resp);

                // reject
                if(resp.result == 'false'){
                    throw resp;
                }

                window.cacheStorage._set('amid',send_params.userid,0);
                window.cacheStorage._set('aminfo',CryptoES.AES.encrypt(JSON.stringify(resp.msg), config.app_name).toString(),60*60);

                // move
                window.location.href = `./index.html#/`;
            })
            .catch( e =>{
                window.cacheStorage._clear();
                alert(e.msg);
                if(typeof e.fieldname !=='undefined'){
                    document.querySelector<HTMLInputElement>(`#${e.fieldname}`)!.focus();
                }
            })
            .finally(()=>{
                ProgressBars.close();
            });
        })
        .catch( e =>{
            alert(e.msg);
        })
        .finally(()=>{
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
document.addEventListener("DOMContentLoaded", () => {
    // 지원언어 설정
    // config.surport_langs = ['en'];

    // R 클래스 초기화 후에 DOMContentLoaded 이벤트 발생
    R.__init({
        sysmsg : new URL(`./js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
        arrays : new URL(`./js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
        strings: new URL(`./js/values/strings${App.getLocale()}.js`, import.meta.url).href
    }).then(() => {
        onReady();
    }).catch(err => {
        Log.e("Error initializing R:", err);
    });
});