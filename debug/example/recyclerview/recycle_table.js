import { SimpleAdapter, RecyclerView } from "../../flexvue/core/recyclerview.class.js";
import AsyncTask from "../../flexvue/core/asynctask.class.js";
const onReady = () => {
  ProgressBars.show();
  // 데이터
  const listData = [];
  for (let i = 0; i <= 100; i++) {
    listData.push({ id: i, title: `Title ${i}` });
  }
  Promise.all([
  new AsyncTask().doImport(new URL(`../recyclerview/tpl/layout_table.js`, import.meta.url).href),
  new AsyncTask().doImport(new URL(`../recyclerview/tpl/tableview.js`, import.meta.url).href)]
  ).
  then((data) => {
    const layout = new data[0].Layout();
    const tableView = new data[1].TableView();
    // 출력
    document.querySelector('#left').innerHTML = layout.render({});
    return tableView;
  }).
  then((tableView) => {
    // RecyclerView 인스턴스 생성 및 초기화
    const adapter = new SimpleAdapter(listData, tableView, 'w-full block border-b border-gray-100 dark:border-gray-600 hover:bg-gray-light dark:hover:bg-gray-800 text-gray-default dark:text-gray-300 text-center');
    const recyclerView = new RecyclerView('#tableview', adapter, {
      itemCount: 2
    });
    recyclerView.addEventListener('click', '.item', (el) => {
      const id = el.dataset.id;
      alert(id);
    });
  }).
  catch((e) => {
    Log.e(e);
  }).
  finally(() => {
    ProgressBars.close();
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);