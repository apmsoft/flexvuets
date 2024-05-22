import { Notice } from "./notice.class.js";
import { Faq } from "./faq.class.js";
import Forms from "../../flexvue/core/Forms.class.js";
const onReady = () => {
  const _n = new Notice();
  const _f = new Faq();
  window.observable = new Observable(['public', 'sub']);
  // public 채널 구독
  window.observable.subscribe('public', _n);
  window.observable.subscribe('public', _f);
  window.observable.notify('public', 'PUBLIC message 테스트');
  window.observable.notify('public', 'SUB message 테스트');
  new Forms('#theMessageForm').doSubmit((form_params) => {
    var _a;
    Log.clear();
    Log.d(form_params);
    window.observable.notify('public', (_a = form_params.message) !== null && _a !== void 0 ? _a : '-');
    // window.observable.notify('public', form_params.message?? '-' ).then(()=> Log.d('모든 update 완료'));
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);