import AsyncAjax from '../../flexvue/core/asyncajax.class.js';
{
const onReady = () : void =>
{
    // json
    const json_params = {
        page: 1,
        q:encodeURIComponent('테스트')
    };

    new AsyncAjax().execute('GET','../../res/values/strings.json'
        ,json_params
        ,{
            dataType : "json",
            cache:false,
            crossOrigin: true
        }
        ,{
            beforeSend: function(xhr : JQuery.jqXHR<any>) {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
                xhr.setRequestHeader('Access-Control-Allow-Methods', '*');
                xhr.setRequestHeader('Authorization-Access-Token', 'Y29tZmFu');
            }
        }
    )
        .then( resp =>{
            Log.d('resp >>> ',resp);
            document.querySelector<HTMLDivElement>('#echo_contents')!.innerHTML = JSON.stringify(resp, null, 2);
        }).catch(e =>{
            Log.e('error =>',e);
        });;
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
}