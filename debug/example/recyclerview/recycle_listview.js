import { SimpleAdapter, RecyclerView } from "../../flexvue/core/recyclerview.class.js";
import AsyncTask from "../../flexvue/core/asynctask.class.js";
const onReady = () => {
  ProgressBars.show();
  // 데이터
  const data = [];
  for (let i = 0; i <= 100; i++) {
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
    const recyclerView = new RecyclerView('#listview', adapter, { itemCount: 2, scrollCapture: '#fvue--layout--main' });
    recyclerView.addEventListener('click', '.item', (el) => {
      const id = el.dataset.id;
      alert(id);
    });
    // 데이터 추가 예제
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', () => {
      const x = adapter.getItemCount() + 1;
      const newData = { id: x, gid: (x + 1) / 10, title: `Item ${x}` };
      Log.d('데이터 추가 됨', newData);
      adapter.appendData(newData);
      // 화면을 벗어 나면 스크롤할때 나타남
    });
    // 데이터 삭제 예제
    const removeButton = document.getElementById('removeButton');
    removeButton.addEventListener('click', () => {
      var _a;
      const positionToRemove = 1;
      adapter.removeData(positionToRemove);
      Log.d('데이터 삭제 됨', positionToRemove, adapter.getItemCount());
      (_a = document.querySelector(`[data-id=\"${positionToRemove}\"]`)) === null || _a === void 0 ? void 0 : _a.remove();
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