import AsyncTask from "../../flexvue/core/asynctask.class.js";
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
  // AsyncTask, 옵션 | 헤더
  new AsyncTask().execute('POST', 'http://test.com', post_params, {
    mode: 'cors' // no-cors, cors, *same-origin
    //redirect : 'follow'
  }, {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization-Access-Token': 'Y29tZmFuY3l1cHN'
  }).
  then((data) => {
    const resp = data;
    Log.d('strings >>> ', resp);
    // document.querySelector<HTMLDivElement>('#echo_contents')!.innerHTML = JSON.stringify(resp,null,2);
  }).
  catch((e) => {
    Log.e(e);
  });
  // AsyncTask , 헤더
  new AsyncTask().execute('GET', 'http://test.com', {}, {
    'Content-Type': 'text/plain'
  }).
  then((data) => {
    const resp = data;
    Log.d('numbers >>> ', resp);
  }).
  catch((e) => {
    Log.e(e);
  });
  // AsyncTask , 헤더+옵션
  new AsyncTask().execute('GET', 'http://test.com', {}, {
    mode: 'cors',
    'Content-Type': 'application/json',
    'Authorization-Access-Token': 'Y29tZmFuY3l1cHN'
  }).
  then((data) => {
    const resp = data;
    Log.d('numbers >>> ', resp);
  }).
  catch((e) => {
    Log.e(e);
  });
  new AsyncTask().doImport('../../v1/js/values/arrays.js').
  then((data) => {
    const resp = data;
    Log.d('arrays >>> ', resp);
  }).
  catch((e) => {
    Log.e(e);
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);