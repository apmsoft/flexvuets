import VanillaCalendar from "../../../plugins/vanilla-calendar-pro/build/vanilla-calendar.min.js";
import Forms from "../../../flexvue/core/Forms.class.js";
const onReady = () => {
  // date picker ==========================================
  const dateOptions = {
    input: true,
    actions: {
      changeToInput(e, self) {
        if (!self.HTMLInputElement)
        return;
        if (self.selectedDates[0]) {
          self.HTMLInputElement.value = self.selectedDates[0];
          self.hide();
        } else
        {
          self.HTMLInputElement.value = '';
        }
      }
    },
    settings: {
      visibility: {
        positionToInput: ["bottom", "left"],
        theme: 'light'
      },
      lang: App.lang,
      iso8601: false
    }
  };
  // start_date
  const datePicker = new VanillaCalendar('#date-input', dateOptions);
  datePicker.init();
  // time picker =========================================
  const timeOptions = {
    DOMTemplates: {
      default: `
            <#ControlTime />
            `
    },
    input: true,
    actions: {
      // clickDay(e, self) {
      //     // Log.d(self);
      //     if (!self.HTMLInputElement) return;
      //     if (self.selectedDates[0]) {
      //         // "selectedDates":["2024-03-22"],
      //         // "selectedHolidays":[],
      //         // "selectedMonth":2,
      //         // "selectedYear":2024,
      //         // "selectedHours":"09",
      //         // "selectedMinutes":"43",
      //         // "selectedTime":"09:43"
      //         self.HTMLInputElement.value = `${self.selectedDates[0]} ${self.selectedTime}`;
      //         self.hide();
      //     } else {
      //         self.HTMLInputElement.value = '';
      //     }
      // },
      initCalendar(self) {
        console.log(self);
        // reset css
        document.querySelectorAll('.' + self.CSSClasses.time).forEach((el) => {el.classList.add('!border-0', '!mt-0', '!pt-0');});
        // set time ranges
        document.querySelectorAll('.' + self.CSSClasses.timeRange + ' input[name="hours"]').forEach((el) => {
          el.min = "9";
          el.max = "18";
        });
      },
      changeTime(event, self) {
        Handler.post(() => {
          //@ts-ignore
          self.HTMLInputElement.value = self.selectedTime;
        }, 100);
      }
    },
    settings: {
      range: {
        disableAllDays: true
      },
      selection: {
        time: 24,
        controlTime: 'range',
        stepHours: 1,
        stepMinutes: 10
      },
      visibility: {
        positionToInput: ["bottom", "left"],
        theme: 'light'
      },
      lang: App.lang,
      iso8601: false,
      selected: {
        time: '12:30'
      }
    }
  };
  // start time
  const startTimePicker = new VanillaCalendar('#start_time', timeOptions);
  startTimePicker.init();
  // end time
  const endTimePicker = new VanillaCalendar('#end_time', timeOptions);
  endTimePicker.init();
  // form
  new Forms('#theForm').doSubmit((form_params) => {
    Log.d(form_params);
    document.querySelector('#echo_contents').innerHTML = JSON.stringify(form_params, null, 2);
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);