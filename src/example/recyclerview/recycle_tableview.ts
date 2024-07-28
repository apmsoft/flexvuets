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

    let page : number = 1;

    function doList(page : number)
    {
        // 데이터
        const tableData : DataItem[]= [];
        for (let i = 0; i <9; i++) {
            tableData.push({ id: i, gid: ((i+1)/10), title: `Item${page} ${i}` });
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

            // response
            const reponse : { data : any[], view : Template} = {data: Array.isArray(tableData) ? tableData : [tableData], view : tableView};
            return reponse;
        })
        .then(reponse =>{

            // RecyclerView 인스턴스 생성 및 초기화
            const adapter = new SimpleAdapter(reponse.data, reponse.view);
            const recyclerView = new RecyclerView('#tableview', adapter,{itemCount:10, clientRectHeight:50, scrollCapture: '#fvue--layout--main'});
            recyclerView.addEventListener('click', '.item', (el) =>
            {
                const id = el.dataset.id;
                alert(id);
            });

            recyclerView.addEventListener('click', '.btn-edit', (el) =>
            {
                const id = el.dataset.id;
                alert(id);
            });

            // 스크롤 포지션 캡쳐
            recyclerView.onChangedScrollPosition(function(pos : number, render_count : number){
                Log.d('scroll pos', pos, 'rendered_count', render_count,'total item count',adapter.getItemCount());
            });
        })
        .catch( e =>{
            alert(e.msg);
        })
        .finally(()=>{
            ProgressBars.close();
        });
    }

    doList(page);
};

//setLanguages = ['en','ja','ko'];
(new App()).setLanguages([]).setResoures({
    sysmsg : new URL(`../js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
    arrays : new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
    strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(onReady);
