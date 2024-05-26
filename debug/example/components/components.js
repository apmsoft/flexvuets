import Forms from "../../flexvue/core/Forms.class.js";
import { CreateElDiv, CreateElTextArea, CreateElInput, CreateElButton, CreateElSelect, CreateElRadio, CreateElCheckbox, CreateElUL, CreateElLi } from "../../flexvue/components/ElementsCreate.class.js";
import { ElementDiv, ElementInput, ElementSelect, ElementRadio, ElementCheckbox, ElementUL, ElementLi } from "../../flexvue/components/ElementsManager.class.js";
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
  new ElementUL('#theForm').insert('prepend').html(new CreateElUL().id('#ul').classList('flex flex-col space-y-2 border bg-red-100 p-4').render(''));
  new ElementLi('#ul').html(new CreateElLi().classList('border py-2 bg-white px-4').render('li 1'));
  new ElementLi('#ul').insert('append').html(new CreateElLi().classList('border py-2 bg-white px-4').render('li 2'));
  new ElementLi('#ul').insert('append').html(new CreateElLi().classList('border py-2 bg-white px-4').render('li 3'));
  new ElementDiv('#fvue--layout--main').html(new CreateElDiv().id('#layout').classList('container mx-auto card flex flex-col p-4 my-4 space-y-4').render(''));
  new ElementDiv('#layout').insert('append').html(`<div class="flex flex-row space-x-2">
            <div class="flex-none w-[100px]">이름</div>
            <div class="flex-1">
                ${new CreateElInput().
  id('#name').
  name('name').
  classList('input border border-gray-400 w-full').
  placeholder('이름을 입력하세요').
  render('')}
            </div>
        </div>`);
  new ElementDiv('#layout').insert('append').html(`<div class="flex flex-row space-x-2">
            <div class="flex-none w-[100px]">아이디</div>
            <div class="flex-1">
                ${new CreateElInput().
  id('#userid').
  name('userid').
  type('email').
  readonly().
  classList('input border border-gray-400 w-full').
  placeholder('아이디를 입력하세요').
  render('apmsoft@gmail.com')}
            </div>
        </div>`);
  new ElementDiv('#layout').insert('append').html(`<div class="flex flex-row space-x-2">
            <div class="flex-none w-[100px]">카테고리</div>
            <div class="flex-1">
                ${new CreateElSelect().
  id('#category').
  name('category').
  classList('select border border-gray-400 w-full').
  render([
  { value: '', label: '선택하세요' },
  { value: '1', label: '라벨1' },
  { value: '2', label: '라벨2' }]
  )}
            </div>
        </div>`);
  new ElementDiv('#layout').insert('append').html(`<div class="flex flex-row space-x-2">
            <div class="flex-none w-[100px]">좋아하는 스포츠</div>
            <div class="flex-1">
                ${new CreateElRadio().
  name('sports').
  classList('radio radio-primary').
  render([
  { value: 'baseball', label: '야구' },
  { value: 'football', label: '축구' }],
  new RadioView())}
            </div>
        </div>`);
  new ElementDiv('#layout').insert('append').html(`<div class="flex flex-row space-x-2">
            <div class="flex-none w-[100px]">좋아하는 음식</div>
            <div class="flex-1">
                ${new CreateElCheckbox().
  name('food').
  classList('checkbox checkbox-primary').
  render([
  { value: 'c', label: '치킨' },
  { value: 'm', label: '마라탕' }],
  new RadioView())}
            </div>
        </div>`);
  new ElementDiv('#layout').insert('append').html(`<div class="flex flex-row space-x-2">
            <div class="flex-none w-[100px]">알람 수신</div>
            <div class="flex-1">
                ${new CreateElRadio().
  id('#toggle').
  name('toggle').
  classList('toggle').
  render([
  { value: 'y', label: '수신' }],
  new RadioView())}
            </div>
        </div>`);
  new ElementDiv('#layout').insert('append').html(`<div class="flex flex-row space-x-2">
            <div class="flex-none w-[100px]">수신률(%)</div>
            <div class="flex-1">
                ${new CreateElInput().
  id('#rangeid').
  type('range').
  classList('range').
  min(0).max(100).
  render('40')}
            </div>
            <div class="flex-none w-24" id="range-val">40</div>
        </div>`);
  new ElementDiv('#layout').insert('append').html(`<div class="flex flex-row space-x-2">
            <div class="flex-none w-[100px]">자기소개</div>
            <div class="flex-1">${new CreateElTextArea().
  id('#introduce').
  name('introduce').
  classList('textarea textarea-bordered h- w-full').
  placeholder('자기소개를 입력하세요').
  render('')}</div>
        </div>`);
  new ElementDiv('#layout').insert('append').html(new CreateElButton().
  type('submit').
  classList('btn btn-primary w-full mt-4').
  render('전송'));
  // event
  new ElementInput('#name').
  attr('dateset-id', "1").
  attr('dateset-name', "ddd").
  addEventListener('keypress', (el, value) => {
    Log.d(value);
  }).
  addEventListener('click', (el, value) => {el.classList.add('bg-red-300');}).
  addEventListener('blur', (el, value) => {
    Log.d(value);
    el.classList.remove('bg-red-300');
  });
  new ElementInput('#userid').
  rmAttr('readonly');
  new ElementSelect('#category').
  selected('2').
  addEventListener('change', function (el, value) {
    Log.d('selected : ', value);
  });
  console.log('이미선택된 값 가져오기', new ElementSelect('#category').val());
  new ElementRadio('sports').
  checked('baseball').
  addEventListener('click', function (el, value) {
    Log.d('selected : ', value);
  });
  new ElementCheckbox('food').
  checked(['c', 'm']).
  addEventListener('click', function (el, value) {
    Log.d('selected : ', value);
  });
  new ElementRadio('#toggle').
  checked('y').
  addEventListener('chagne', function (el, value) {
    Log.d(value);
  });
  new ElementInput('#rangeid').
  addEventListener('change', (el, value) => {
    Log.d(value);
    new ElementDiv('#range-val').html(value);
  });
  new Forms('#theForm').doSubmit((form_params) => {
    Log.d(form_params);
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);