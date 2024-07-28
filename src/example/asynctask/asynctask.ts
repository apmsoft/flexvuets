import AsyncTask from '@flexvue/asynctask';
import {Response} from '@flexvue/types';

const onReady = () : void =>
{
    // application/json
    const json_params = JSON.stringify({
        page:1,
        q:encodeURIComponent('테스트')
    });

    // get
    // test.php?new URLSearchParams({page:1,q:encodeURIComponent('테스트')}).toString();

    // application/x-www-form-urlencoded
    type formData = Record<string, any>;
    const formData = new FormData();
    formData.append("name", "홍길동");

    const post_params = new URLSearchParams();
    formData.forEach((value, key) => {
        post_params.append(key, value as string);
    });

    // POST, 옵션+헤더
    new AsyncTask().execute('POST','http://127.0.0.1:5500/test/list',post_params,{
            mode : 'cors', // no-cors, cors, *same-origin
            redirect : 'follow',
            // 'Content-Type' : 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization-Access-Token':'Y29tZmFuY3l1cHN'
        }
    )
    .then( data =>{
        const resp : Response = data;
        Log.d('strings >>> ',resp);
        // document.querySelector<HTMLDivElement>('#echo_contents')!.innerHTML = JSON.stringify(resp,null,2);
    })
    .catch(e =>{
        Log.e(e);
    });


    // POST , 옵션, 헤더
    new AsyncTask().execute('POST','http://127.0.0.1:5500/ddd/list',{a:1,b:2},
        {'mode':'origin',},
        {
            'Content-Type' : 'application/json',
            'Access-Token' : 'ddddd'
        }
    )
    .then( data =>{
        const resp : Response = data;
        Log.d('arrays >>> ',resp);
    })
    .catch(e =>{
        Log.e(e);
    });

    // GET , 헤더+옵션
    new AsyncTask().execute('GET','http://127.0.0.1:5500/ddd/view/1',{
            mode : 'cors',
            'Content-Type' : 'application/json'
        }
    )
    .then( data =>{
        const resp : Response = data;
        Log.d('numbers >>> ',resp);
    })
    .catch(e =>{
        Log.e(e);
    });


    // // import js
    new AsyncTask().doImport('../../v1/js/values/arrays.js')
    .then( data =>{
        const resp = data;
        Log.d('arrays >>> ',resp);
    })
    .catch(e =>{
        Log.e(e);
    });
};

// document ready
(new App()).setLanguages([]).setResoures({
    sysmsg : new URL(`../js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
    arrays : new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
    strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(onReady);
