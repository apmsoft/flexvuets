class MyException {
  constructor() {
    this.TAG = 'MyException';
    this.onenter = false;
  }
  // ** notify update
  update(e = {}) {
    Log.d(`${this.TAG} :: ${e}`);
    if (typeof e.fieldname !== 'undefined') {
      document.querySelector(e.fieldname).focus();
    }
    if (typeof e.msg_code !== 'undefined') {
      if (e.msg_code == 'w_not_have_permission' || e.msg_code == 'e_usernotfound') {
        if (typeof window.flutter_inappwebview !== 'undefined') {
          window.location.href = "./login.html";
        } else
        {
          window.location.href = "./login.html";
        }
        return;
      } else
      if (e.msg_code == 'w_stay_logged_in') {
        window.location.href = "index.html#/";
        return;
      }
    }
  }
}
export { MyException };