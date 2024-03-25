import AsyncTask from '@flexvue/asynctask';


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

    // AsyncTask
    new AsyncTask().execute('GET','../js/values/strings.js'
        ,post_params
        ,{
            mode : 'cors', // no-cors, cors, *same-origin
            //redirect : 'follow'
        }
        ,{
            'Content-Type' : 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization-Access-Token':'Y29tZmFuY3l1cHN'
        }
    )
    .then( resp =>{
        Log.d('resp >>> ',resp);
        document.querySelector<HTMLDivElement>('#echo_contents')!.innerHTML = JSON.stringify(resp,null,2);
    })
    .catch(e =>{
        Log.e(e);
    });
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
