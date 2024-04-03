import Forms from "../flexvue/core/forms.class.js";
import AsyncTask from "../flexvue/core/asynctask.class.js";
const onReady = () => {
  var _a;
  // config
  config.src = config.host + '/' + config.src9;
  // 앱 정보
  const app = new App();
  Log.i(App.browser, App.version, App.os, App.lang);
  // activity
  new Activity().onBackPressed((state) => {
    Log.i('onBackPressed : ' + state);
    // history.go(-1);
  });
  // progress init
  new ProgressBars();
  // show progress
  ProgressBars.show();
  // application
  if (typeof localStorage.getItem(config.app_name + 'am') !== 'undefined') {
    document.querySelector('#userid').value = (_a = localStorage.getItem(config.app_name + 'am')) !== null && _a !== void 0 ? _a : '';
  }
  // focus
  document.querySelector('#userid').focus();
  // submit
  new Forms('#theAdminLoginForm').doSubmit((form_params) => {
    ProgressBars.show();
    let send_params = Object.assign({}, form_params);
    new AsyncTask().execute('POST', `${config.src}/manager/login`, send_params, config._options_, config._headers_).
    then((resp) => {
      // Log.d(resp);
      // reject
      if (resp.result == 'false') {
        throw resp;
      }
      // true
      return resp;
    }).
    then((resp) => {
      localStorage.setItem(config.app_name + 'am', send_params.userid);
      const userinfo = JSON.stringify(resp.msg);
      localStorage.setItem(config.app_name + 'mngmsg', userinfo);
      // move
      window.location.href = `./index.html#/manager/list`;
    }).
    catch((e) => {
      localStorage.setItem(config.app_name + 'am', send_params.userid);
      alert(e.msg);
      if (typeof e.fieldname !== 'undefined') {
        document.querySelector(`#${e.fieldname}`).focus();
      }
    }).
    finally(() => {
      // close progress
      ProgressBars.close();
    });
  });
  // 로그인버튼 활성화 체크
  let enable_submit_cnt = 0;
  document.querySelectorAll('input').forEach(function (el) {
    let _id = el.getAttribute('id');
    if (_id == 'userid' || _id == 'passwd') {
      el.addEventListener('keypress', function (e) {
        let _userid = document.querySelector('#userid').value;
        let _passwd = document.querySelector('#passwd').value;
        if (_userid && _userid != '' && _passwd && _passwd != '') {
          enable_submit_cnt = 2;
        } else
        {
          enable_submit_cnt = 1;
        }
        if (enable_submit_cnt >= 2) {
          let b = document.querySelector('button[type="submit"]');
          b.removeAttribute('disabled');
          b.classList.remove('opacity-25');
        } else
        {
          let b = document.querySelector('button[type="submit"]');
          b.setAttribute('disabled', 'disabled');
          b.classList.add('opacity-25');
        }
      });
    }
  });
  // close progress
  ProgressBars.close();
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);