import {SimpleAdapter, RecyclerView} from '@flexvue/recyclerview';
import AsyncTask from '@flexvue/asynctask';
import {Template} from '@flexvue/types';

const onReady = () : void =>
{
    ProgressBars.show();

    interface DataItem {
        id: number;
        title: string;
    }
    // 데이터
    const listData : DataItem[]= [];
    for (let i = 0; i <= 100; i++) {
        listData.push({ id: i, title: `Title ${i}` });
    }

    Promise.all([
        new AsyncTask().doImport(new URL(`../recyclerview/tpl/layout_table.js`, import.meta.url).href ),
        new AsyncTask().doImport(new URL(`../recyclerview/tpl/tableview.js`, import.meta.url).href ),
    ])
    .then(data=>{
        const layout : Template = new data[0].Layout();
        const tableView : Template = new data[1].TableView;

        // 출력
        document.querySelector<HTMLDivElement>('#left')!.innerHTML = layout.render( {} );
        return tableView;
    })
    .then(tableView =>{

        // RecyclerView 인스턴스 생성 및 초기화
        const adapter = new SimpleAdapter(listData, tableView, 'w-full text-center');
        const recyclerView = new RecyclerView('#tableview', adapter,
        {
            itemCount : 2
        });
        recyclerView.addEventListener('click', '.item', (el) =>
        {
            const id = el.dataset.id;
            alert(id);
        });
    })
    .catch( e =>{
        Log.e(e);
    })
    .finally(()=>{
        ProgressBars.close();
    });
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
