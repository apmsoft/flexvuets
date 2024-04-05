import { SimpleAdapter, RecyclerView } from "../../flexvue/core/recyclerview.class.js";
const onReady = () => {
  // 데이터
  const data = [];
  for (let i = 0; i <= 1000; i++) {
    data.push({ id: i, name: `Item ${i}` });
  }
  // 템플릿
  const template = (data) => `<div class="item border" id="${data.id}">
        <span>${data.id}</span>: <span class="item-text"> ${data.name}</span>
    </div>`;
  // RecyclerView 인스턴스 생성 및 초기화
  const adapter = new SimpleAdapter(data, template, 'animate__animated animate__fadeInUp');
  const recyclerView = new RecyclerView('#recyclerView', adapter);
  // RecyclerView에 이벤트 리스너 추가
  recyclerView.addEventListener('click', '.item', (event) => {
    console.log('Item clicked');
    const target = event.target;
    alert(target.id);
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);