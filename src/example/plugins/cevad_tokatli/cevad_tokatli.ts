import DatePicker from '@cevad-tokatli/date-picker';

import Forms from '@flexvue/forms';

const onReady = () : void =>
{
    new DatePicker({
        el: '#startDatePicker',
        toggleEl: '#start_date',
        inputEl: '#start_date',
        dateType: 'YYYY-MM-DD',
        // type: 'DATEHOUR',
        type: 'DATE',
        // hourType: '24', // '12' or '24'
    });

    new DatePicker({
        el: '#startTimePicker',
        toggleEl: '#start_time',
        inputEl: '#start_time',
        type: 'HOUR',
        hourType: '24', // '12' or '24'
        value: '13:00',
    });

    // form
    new Forms('#theForm').doSubmit( (form_params: { [key: string]: string }) =>
    {
        Log.d(form_params);

        document.querySelector<HTMLDivElement>('#echo_contents')!.innerHTML = JSON.stringify(form_params,null,2);
    });
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
