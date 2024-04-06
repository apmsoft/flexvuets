import { SimpleAdapter, RecyclerView } from "../../flexvue/core/recyclerview.class.js";
import AsyncTask from "../../flexvue/core/asynctask.class.js";
const onReady = () => {
  ProgressBars.show();
  // 데이터
  const data = [];
  for (let i = 0; i <= 1000; i++) {
    data.push({ id: i, gid: (i + 1) / 10, title: `Item ${i}` });
  }
  Promise.all([
  new AsyncTask().doImport(new URL(`../recyclerview/tpl/layout_list.js`, import.meta.url).href),
  new AsyncTask().doImport(new URL(`../recyclerview/tpl/listview.js`, import.meta.url).href)]
  ).
  then((data) => {
    const layout = new data[0].Layout();
    const listView = new data[1].ListView();
    // 출력
    document.querySelector('#left').innerHTML = layout.render({});
    return listView;
  }).
  then((listView) => {
    // RecyclerView 인스턴스 생성 및 초기화
    const adapter = new SimpleAdapter(data, listView);
    const recyclerView = new RecyclerView('#listview', adapter, { itemCount: 1, scrollCapture: '#fvue--layout--main' });
    recyclerView.addEventListener('click', '.item', (el) => {
      const id = el.dataset.id;
      alert(id);
    });
  }).
  catch((e) => {
    alert(e.msg);
  }).
  finally(() => {
    ProgressBars.close();
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);