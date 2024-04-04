import AsyncTask from '@flexvue/asynctask';
import UrlManager from '@flexvue/urlmanager';
import {Response, Template} from '@flexvue/types';

export default class Navigation {
    private preNavigation : string | null;
    constructor(){
        this.preNavigation = null;
        this.onCreateView();
    }

    onCreateView ()
    {
        // Promise all
        new AsyncTask().doImport( new URL(`../nav/tpl/nav1${App.getLocale()}.js`, import.meta.url).href )
        .then( data =>
        {
            const template : Template = new data.Template();

            // set title
            document.querySelector<HTMLElement>('#left_title')!.innerText = window.Strings.app_name;

            // 네비게이션
            const outhtml_el = document.querySelector<HTMLElement>('#left-col-1')!.innerHTML = template.render( window.Arrays );

            // resolve
            return 'ok';

        })
        .then( ok =>
        {
            // 메뉴 활성화
            const urlManager = new UrlManager(window.location.href);
            if(typeof urlManager.hash !=='undefined' && urlManager.hash !=''){
                const path_pattern = /[\/](\w+)/gi;
                let path : string[] | null = urlManager.hash.match(path_pattern);
                if(path != null){
                    this.selectNav1(path[0]);
                }
            }
        })
        .catch( e =>{
            Log.e ( e );
        });
    }

    // 1차 메뉴 활설화
    selectNav1 (k : string)
    {
        let cur_parent = document.querySelectorAll<HTMLElement>('.navigation-icon');
        cur_parent.forEach( el =>
        {
            let cur_mid = el.dataset.id;

            const path_pattern = /[\/](\w+)/gi;
            let path : string[] | null = cur_mid!.match(path_pattern);
            if(path != null && this.preNavigation != null){
                if(this.preNavigation == path[0] || this.preNavigation == path[0]+'/'){
                    el.classList.remove('bg-blue-light','text-blue-dark');
                }
            }

            if((path != null) && (path[0] == k || path[0]+'/' == k)){
                el.classList.add('bg-blue-light','text-blue-dark');
            }
        });

        this.preNavigation = k;
    }

    // 2차 메뉴 (모듈별 메뉴 출력)
    selectNav2 (menu : object = {})
    {
        // config
        new AsyncTask().doImport( new URL(`../nav/tpl/nav2${App.getLocale()}.js`, import.meta.url).href )
        .then( data =>
        {
            const template : Template = new data.Template();

            // 네비게이션 서브
            const outhtml_el = document.querySelector<HTMLElement>('#left-col-2')!;
            outhtml_el.innerHTML = template.render( menu );

            // resolve
            return menu;
        })
        .then( menu =>
        {
            // 메뉴 접고/펼침
            if(document.querySelector<HTMLElement>("#btn-close-lm"))
            {
                // 메뉴 기본 설정에 따른 자동 열기/닫기
                if(typeof localStorage.getItem(config.app_name+'mco') !== 'undefined'){
                    if(localStorage.getItem(config.app_name+'mco') == 'open'){
                        document.querySelector<HTMLElement>("#lay-menu-title")!.style.display = '';
                        document.querySelector<HTMLElement>("#btn-open-lm")!.classList.add('hidden');
                        document.querySelector<HTMLElement>("#btn-close-lm")!!.classList.remove('hidden');
                    }else{
                        document.querySelector<HTMLElement>("#lay-menu-title")!.style.display = 'none';
                        document.querySelector<HTMLElement>("#btn-close-lm")!.classList.add('hidden');
                        document.querySelector<HTMLElement>("#btn-open-lm")!.classList.remove('hidden');
                    }
                }

                // 닫기
                document.querySelector<HTMLElement>("#btn-close-lm")!.addEventListener("click", () => {
                    document.querySelector<HTMLElement>("#lay-menu-title")!.style.display = 'none';
                    document.querySelector<HTMLElement>("#btn-close-lm")!.classList.add('hidden');
                    document.querySelector<HTMLElement>("#btn-open-lm")!.classList.remove('hidden');

                    // set storage
                    localStorage.setItem(config.app_name+'mco', 'close');
                }, false);

                // 열기
                document.querySelector<HTMLElement>("#btn-open-lm")!.addEventListener("click", () => {
                    document.querySelector<HTMLElement>("#lay-menu-title")!.style.display = '';
                    document.querySelector<HTMLElement>("#btn-open-lm")!.classList.add('hidden');
                    document.querySelector<HTMLElement>("#btn-close-lm")!.classList.remove('hidden');

                    // set storage
                    localStorage.setItem(config.app_name+'mco', 'open');
                }, false);
            }

            if(document.querySelector<HTMLElement>("#btn-close-window"))
            {
                // 전체 메뉴 열기/닫기 자동 설정
                if(typeof localStorage.getItem(config.app_name+'wco') !== 'undefined'){
                    if(localStorage.getItem(config.app_name+'wco') == 'close'){
                        document.querySelector<HTMLElement>("#left-col-1")!.style.display = 'none';
                        document.querySelector<HTMLElement>("#left-col-2")!.style.display = 'none';
                        document.querySelector<HTMLElement>("#btn-close-window")!.classList.add('hidden');
                        document.querySelector<HTMLElement>("#btn-open-window")!.classList.remove('hidden');
                    }else{
                        document.querySelector<HTMLElement>("#left-col-1")!.style.display = '';
                        document.querySelector<HTMLElement>("#left-col-2")!.style.display = '';
                        document.querySelector<HTMLElement>("#btn-open-window")!.classList.add('hidden');
                        document.querySelector<HTMLElement>("#btn-close-window")!.classList.remove('hidden');
                    }
                }

                // 닫기
                document.querySelector<HTMLElement>("#btn-close-window")!.addEventListener("click", () => { 
                    document.querySelector<HTMLElement>("#left-col-1")!.style.display = 'none';
                    document.querySelector<HTMLElement>("#left-col-2")!.style.display = 'none';
                    document.querySelector<HTMLElement>("#btn-close-window")!.classList.add('hidden');
                    document.querySelector<HTMLElement>("#btn-open-window")!.classList.remove('hidden');

                    // set storage
                    localStorage.setItem(config.app_name+'wco', 'close');
                }, false);

                // 열기
                document.querySelector<HTMLElement>("#btn-open-window")!.addEventListener("click", () => { 
                    document.querySelector<HTMLElement>("#left-col-1")!.style.display = '';
                    document.querySelector<HTMLElement>("#left-col-2")!.style.display = '';
                    document.querySelector<HTMLElement>("#btn-open-window")!.classList.add('hidden');
                    document.querySelector<HTMLElement>("#btn-close-window")!.classList.remove('hidden');

                    // set storage
                    localStorage.setItem(config.app_name+'wco', 'open');
                }, false);
            }
        })
        .catch( e =>{
            Log.e ( e );
        });
    }
}