import {SimpleAdapter, RecyclerView} from '@flexvue/recyclerview';
import AsyncTask from '@flexvue/asynctask';
import {Template} from '@flexvue/types';

const onReady = () : void =>
{
    ProgressBars.show();

    interface DataItem {
        id: number;
        gid: number;
        title: string;
    }
    // 데이터
    const gridData : DataItem[]= [];
    for (let i = 0; i <= 100; i++) {
        gridData.push({ id: i, gid: 100, title: `Title ${i}` });
    }

    Promise.all([
        new AsyncTask().doImport(new URL(`../recyclerview/tpl/layout_grid.js`, import.meta.url).href ),
        new AsyncTask().doImport(new URL(`../recyclerview/tpl/gridview.js`, import.meta.url).href ),
    ])
    .then(data=>{
        const layout : Template = new data[0].Layout();
        const gridView : Template = new data[1].GridView;

        // 출력
        document.querySelector<HTMLDivElement>('#left')!.innerHTML = layout.render( {} );
        return gridView;
    })
    .then(gridView =>{

        // RecyclerView 인스턴스 생성 및 초기화
        const adapter = new SimpleAdapter(gridData, gridView);
        const recyclerView = new RecyclerView('#gridview', adapter,
        {
            itemCount : 0,
            scrollCapture: '#fvue--layout--main', 
            response: { 0: 1, 480:2, 768:3, 1024:4, 1280:4, 1536:6}
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
