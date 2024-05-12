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
        const data : DataItem[]= [];
        for (let i = 0; i <= 6000; i++) {
            data.push({ id: i, gid: ((i+1)/10), title: `Item${page} ${i}` });
        }

        Promise.all([
            new AsyncTask().doImport(new URL(`../recyclerview/tpl/layout_list.js`, import.meta.url).href ),
            new AsyncTask().doImport(new URL(`../recyclerview/tpl/listview.js`, import.meta.url).href ),
        ])
        .then(data=>{
            const layout : Template = new data[0].Layout();
            const listView : Template = new data[1].ListView;

            // 출력
            document.querySelector<HTMLDivElement>('#left')!.innerHTML = layout.render( {} );
            return listView;
        })
        .then(listView =>{

            // RecyclerView 인스턴스 생성 및 초기화
            const adapter = new SimpleAdapter(data, listView);
            const recyclerView = new RecyclerView('#listview', adapter,{itemCount:10, scrollCapture: '#fvue--layout--main'});
            recyclerView.addEventListener('click', '.item', (el) =>
            {
                const id = el.dataset.id;
                alert(id);
            });

            // 스크롤 포지션 캡쳐
            recyclerView.onChangedScrollPosition(function(pos : number, render_count : number){
                Log.d('scroll pos', pos, 'rendered_count', render_count,'total item count',adapter.getItemCount());
            });

            // recall
            const btnReset = document.querySelector<HTMLButtonElement>('#reset')!;
            btnReset.addEventListener('click', ()=>{
                // 비우기
                adapter.clearData();
                recyclerView.clear();

                // run
                doList(page + 1);
            });

            // 데이터 추가 예제
            const addButton = document.getElementById('addButton')! as HTMLButtonElement;
            addButton.addEventListener('click', () => {
                const x = adapter.getItemCount() + 1;
                const newData = { id: x, gid: ((x+1)/10), title: `Item ${x}` };
                Log.d('데이터 추가 됨',newData);
                adapter.appendData(newData);

                // 화면을 벗어 나면 스크롤할때 나타남
            });

            // 데이터 삭제 예제
            const removeButton = document.getElementById('removeButton')! as HTMLButtonElement;
            removeButton.addEventListener('click', () => {
                const positionToRemove = 1;
                adapter.removeData(positionToRemove);
                Log.d('데이터 삭제 됨',positionToRemove, adapter.getItemCount());
                document.querySelector(`[data-id=\"${positionToRemove}\"]`)?.remove();
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

// document ready
document.addEventListener("DOMContentLoaded",onReady);
