import { Notice } from '../observable/notice.class.js';
import { Faq } from '../observable/faq.class.js';
import Forms from '../../flexvue/core/forms.class.js';
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
    });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
