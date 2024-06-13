import DatePicker from "../../../plugins/@cevad-tokatli/date-picker/js/date-picker.esm.js";
import Forms from "../../../flexvue/core/Forms.class.js";
const onReady = () => {
  DatePicker.createLanguage('ko', {
    DAYS_ABBR: ['', '월', '화', '수', '목', '금', '토', '일'],
    MONTHS: ['', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    MONTHS_ABBR: ['', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    AM_PM: ['오전', '오후'],
    BUTTONS: ['CANCEL', 'OK'],
    INVALID_DATE: '잘못된 날짜'
  });
  const startDatePicker = new DatePicker({
    el: '#startDatePicker',
    toggleEl: '#start_date',
    inputEl: '#start_date',
    dateType: "YYYY/MM/DD",
    // type: 'DATEHOUR',
    type: 'DATE',
    lang: 'ko'
    // hourType: '24', // '12' or '24'
  });
  startDatePicker.el.addEventListener('wdp.close', (d) => {
    Log.d('close', startDatePicker.get());
    const values = startDatePicker.get().value.split('/');
    startDatePicker.inputEl.value = values[2] + '-' + values[1] + '-' + values[0];
  });
  /**
   * 시간 타입은 강추
   * 캘린더는 바닐라캘린더가 더 좋음
   */
  const startTime = new DatePicker({
    el: '#startTimePicker',
    toggleEl: '#start_time',
    inputEl: '#start_time',
    type: 'HOUR',
    hourType: '24', // '12' or '24'
    value: '13:00',
    lang: 'ko'
  });
  // 날짜표시 감추기
  startTime.el.addEventListener('wdp.open', () => {
    document.querySelectorAll('.wdp-header > span').forEach((el) => {
      el.classList.add('invisible');
    });
  });
  startTime.el.addEventListener('wdp.close', (d) => {
    Log.d('close', startTime.get());
    const startTimeValue = startTime.get().value + ':00';
    Log.d('start_time', startTimeValue);
    startTime.inputEl.value = startTimeValue;
  });
  // form
  new Forms('#theForm').doSubmit((form_params) => {
    Log.d(form_params);
    document.querySelector('#echo_contents').innerHTML = JSON.stringify(form_params, null, 2);
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);