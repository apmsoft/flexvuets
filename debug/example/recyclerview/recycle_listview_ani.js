import { SimpleAdapter, RecyclerView } from "../../flexvue/core/RecyclerView.class.js";
const onReady = () => {
  // 데이터
  const data = [];
  for (let i = 0; i <= 6000; i++) {
    data.push({ id: i, name: `Item ${i}` });
  }
  // 템플릿
  class ListView {
    constructor() {
    }
    render(message = {}) {
      return String.raw`<div class="item border" id="${message.id}" data-name="n${message.id}">
                <span>${message.id}</span>: <span class="item-text"> ${message.name}</span>
            </div>`;
    }
  }
  const listView = new ListView();
  // RecyclerView 인스턴스 생성 및 초기화
  const adapter = new SimpleAdapter(data, listView, 'animate__animated animate__fadeInUp');
  const recyclerView = new RecyclerView('#left', adapter, { itemCount: 10 });
  recyclerView.addEventListener('click', '.item', (el) => {
    // 애니메이션 클래스 추가
    el.classList.add('animate__animated', 'animate__bounce');
    // alert
    alert(el.id + ' ' + el.dataset.name);
  });
};
//setLanguages = ['en','ja','ko'];
new App().setLanguages([]).setResoures({
  sysmsg: new URL(`../js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
  arrays: new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
  strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(onReady);