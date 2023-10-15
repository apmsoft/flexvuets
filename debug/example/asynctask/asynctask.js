import AsyncTask from '../../flexvue/core/asynctask.class.js';
const onReady = () => {
    // application/json
    const json_params = JSON.stringify({
        page: 1,
        q: encodeURIComponent('테스트')
    });
    const formData = new FormData();
    formData.append("name", "홍길동");
    const post_params = new URLSearchParams();
    formData.forEach((value, key) => {
        post_params.append(key, value);
    });
    // AsyncTask
    new AsyncTask().execute('GET', '../../res/values/strings.json', post_params, {
        mode: 'no-cors', // no-cors, cors, *same-origin
        //redirect : 'follow'
    }, {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization-Access-Token': 'Y29tZmFuY3l1cHN'
    })
        .then(resp => {
        Log.d('resp >>> ', resp);
        document.querySelector('#echo_contents').innerHTML = JSON.stringify(resp, null, 2);
    })
        .catch(e => {
        Log.e(e);
    });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
