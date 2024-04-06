import { SimpleAdapter, RecyclerView } from "../../flexvue/core/recyclerview.class.js";
const onReady = () => {
  // 데이터
  const data = [];
  for (let i = 0; i <= 1000; i++) {
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
  // options: {
  //     itemCount: number; // 스크롤할때 마다 출력할 item 갯수 | 기본값 10개
  //     bottomBuffer: number; // bottom 스크롤 간격 조정 | 기본 값 -50
  //     prepend?: boolean; // 새 항목을 prepend할지 여부를 결정하는 옵션 기본 append | 기본 값 false
  // };
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