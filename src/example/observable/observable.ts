import {Notice} from '@path/example/observable/notice.class.js';
import {Faq} from '@path/example/observable/faq.class.js';
import Forms from '@flexvue/forms';

const onReady = () : void =>
{
    const _n = new Notice();
    const _f = new Faq();


    window.observable = new Observable(['public','sub']);
    // public 채널 구독
    window.observable.subscribe('public', _n);
    window.observable.subscribe('public', _f);

    window.observable.notify('public', 'PUBLIC message 테스트');
    window.observable.notify('public', 'SUB message 테스트');

    new Forms('#theMessageForm').doSubmit( (form_params: { [key: string]: string }) =>
    {
        Log.clear();
        Log.d(form_params);

        window.observable.notify('public', form_params.message?? '-' );
    });
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
