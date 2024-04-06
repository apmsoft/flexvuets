import { SimpleAdapter, RecyclerView } from "../../flexvue/core/recyclerview.class.js";
const onReady = () => {
  // 데이터
  const data = [];
  for (let i = 0; i <= 100; i++) {
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
  const recyclerView = new RecyclerView('#left', adapter, { itemCount: 3 });
  recyclerView.addEventListener('click', '.item', (el) => {
    // 애니메이션 클래스 추가
    el.classList.add('animate__animated', 'animate__bounce');
    // alert
    alert(el.id + ' ' + el.dataset.name);
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);