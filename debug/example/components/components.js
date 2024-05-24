import Forms from "../../flexvue/core/Forms.class.js";
import { ElementDiv, ElementTextArea, ElementInput, ElementButton, ElementSelect, ElementRadio, ElementCheckbox, ElementUL, ElementLi } from "../../flexvue/components/ElementsHtml.class.js";
const onReady = () => {
  class RadioView {
    // interface
    render(message = {}) {
      return `
            <div class="form-control">
                <label class="label cursor-pointer">
                <span class="label-text">${message.label}</span> 
                ${message.value}
                </label>
            </div>
            `;
    }
  }
  new ElementUL('#theForm').insert('prepend').id('#ul').classList('flex flex-col space-y-2 border bg-red-100 p-4').html('');
  new ElementLi('#ul').classList('border py-2 bg-white px-4').html('li 1');
  new ElementLi('#ul').insert('append').classList('border py-2 bg-white px-4').html('li 2');
  new ElementLi('#ul').insert('append').classList('border py-2 bg-white px-4').html('li 3');
  new ElementDiv('#fvue--layout--main').insert('append').id('#form-name').classList('border rounded-lg p-4').html('');
  new ElementDiv('#fvue--layout--main').insert('append').id('#form-passwd').classList('border rounded-lg p-4').html('');
  new ElementDiv('#fvue--layout--main').insert('append').id('#form-select').classList('border rounded-lg p-4').html('');
  new ElementDiv('#fvue--layout--main').insert('append').id('#form-radio').classList('border rounded-lg p-4').html('');
  new ElementDiv('#fvue--layout--main').insert('append').id('#form-checkbox').classList('border rounded-lg p-4').html('');
  new ElementDiv('#fvue--layout--main').insert('append').id('#form-toggle').classList('border rounded-lg p-4').html('');
  new ElementDiv('#fvue--layout--main').insert('append').classList('border rounded-lg p-4').html('<div class="flex flex-row space-x-2"><div id="form-range" class="flex-1"></div><div id="range-val" class="flex-1">40</div></div>');
  new ElementDiv('#fvue--layout--main').insert('append').id('#form-introduce').classList('border rounded-lg p-4').html('');
  new ElementInput('#form-name').
  id('#name').
  name('name').
  classList('input border border-gray-400 w-full').
  placeholder('이름을 입력하세요').
  html('홍길동').
  addEventListener('keypress', (el, value) => {
    Log.d(value);
  }).
  addEventListener('click', (el, value) => {el.classList.add('bg-red-300');}).
  addEventListener('blur', (el, value) => {
    Log.d(value);
    el.classList.remove('bg-red-300');
  });
  new ElementInput('#form-passwd').
  id('#passwd').
  name('passwd').
  type('password').
  classList('input border border-gray-400 w-full').
  placeholder('비밀번호 입력하세요').
  html('');
  new ElementSelect('#form-select').
  id('#category').
  name('category').
  classList('select border border-gray-400 w-full').
  html([
  { value: '', label: '선택하세요' },
  { value: '1', label: '라벨1' },
  { value: '2', label: '라벨2' }]
  ).
  selected('2').
  addEventListener('change', function (el, value) {
    Log.d('selected : ', value);
  });
  console.log('이미선택된 값 가져오기', new ElementSelect('#category').val());
  new ElementRadio('#form-radio').
  name('faverite').
  classList('radio radio-primary').
  html([
  { value: 'baseball', label: '야구' },
  { value: 'football', label: '축구' }],
  new RadioView()).
  checked('baseball').
  addEventListener('click', function (el, value) {
    Log.d('selected : ', value);
  });
  new ElementCheckbox('#form-checkbox').
  name('animals').
  classList('radio radio-primary').
  html([
  { value: 'c', label: '치킨' },
  { value: 'm', label: '마라탕' }],
  new RadioView()).
  checked(['c', 'm']).
  addEventListener('click', function (el, value) {
    Log.d('selected : ', value);
  });
  let is_toggle = true;
  new ElementRadio('#form-toggle').
  id('#toggle').
  name('toggle').
  classList('toggle').
  html([
  { value: 'baseball', label: '야구' }],
  new RadioView()).
  checked('baseball').
  addEventListener('chagne', function (el, value) {
    const _el = el;
    if (is_toggle) {
      _el.checked = false;
      is_toggle = false;
    } else
    {
      _el.checked = true;
      is_toggle = true;
    }
  });
  new ElementInput('#form-range').
  id('#rangeid').
  name('rangeid').
  type('range').
  classList('range').
  min(0).max(100).
  html('40').
  addEventListener('change', (el, value) => {
    Log.d(value);
    new ElementDiv('#range-val').html(value);
  });
  new ElementTextArea('#form-introduce').
  id('#introduce').
  name('introduce').
  classList('textarea textarea-bordered h- w-full').
  placeholder('자기소개를 입력하세요').
  html('');
  new ElementButton('#fvue--layout--main').
  type('submit').
  insert('append').
  classList('btn btn-primary w-full mt-4').
  html('전송');
  new Forms('#theForm').doSubmit((form_params) => {
    Log.d(form_params);
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);