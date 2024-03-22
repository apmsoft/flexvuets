import VanillaCalendar from 'vanilla-calendar-pro';
import { IOptions } from 'vanilla-calendar-pro/types';

import Forms from '@flexvue/core/forms.class.js';

const onReady = () : void =>
{
    const dateOptions: IOptions = {
        input: true,
        actions: {
            changeToInput(e, self) {
                if (!self.HTMLInputElement) return;
                if (self.selectedDates[0]) {
                    self.HTMLInputElement.value = self.selectedDates[0];
                    self.hide();
                } else {
                    self.HTMLInputElement.value = '';
                }
            },
        },
        settings: {
            visibility: {
                positionToInput: 'center',
            },
        },
    };

    // datepicker
    const datePicker = new VanillaCalendar('#date-input', dateOptions);
    datePicker.init();

    // datetime picker
    const dateTimeOptions: IOptions = {
        input: true,
        actions: {
            clickDay(e, self) {
                // Log.d(self);
                if (!self.HTMLInputElement) return;
                if (self.selectedDates[0]) {
                    // "selectedDates":["2024-03-22"],
                    // "selectedHolidays":[],
                    // "selectedMonth":2,
                    // "selectedYear":2024,
                    // "selectedHours":"09",
                    // "selectedMinutes":"43",
                    // "selectedTime":"09:43"
                    self.HTMLInputElement.value = `${self.selectedDates[0]} ${self.selectedTime}`;
                    self.hide();
                } else {
                    self.HTMLInputElement.value = '';
                }
            }
        },
        settings: {
            selection: {
                time: 24,
                controlTime: 'range',
                stepHours: 1,
                stepMinutes: 30,
            },
            visibility: {
                positionToInput: 'center',
            },
            // selected: {
            //     time: '03:30',
            // },
        }
    };
    
    const dateTimePicker = new VanillaCalendar('#datetime-input', dateTimeOptions);
    dateTimePicker.init();

    // form
    new Forms('#theForm').doSubmit( (form_params: { [key: string]: string }) =>
    {
        Log.d(form_params);

        document.querySelector<HTMLDivElement>('#echo_contents')!.innerHTML = JSON.stringify(form_params,null,2);
    });
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
