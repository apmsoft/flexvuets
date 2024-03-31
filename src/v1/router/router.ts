import UrlManager from '@flexvue/urlmanager';
import AsyncTask from '@flexvue/asynctask';
import FastRouter from '@flexvue/fastrouter';


const onReady = () : void =>
{
    // 기본 클래스 선언
    new App();

    // 뒤로 가기 시 실행
    new Activity().onBackPressed( state =>{
        Log.clear();
        Log.i('onBackPressed : ',state);
    });

    // 라우터 테스트용 버튼 활성화
    document.querySelectorAll<HTMLButtonElement>('.btn-router').forEach((el : HTMLButtonElement) => {
        el.addEventListener('click', function(){
            const path : any = el.dataset.path;

            window.location.hash = `#${path}`;
        });
    });

    /**
     * router /===========================================>
     */
    const urlManager = new UrlManager(document.location.toString());

    // routes 경로 설정
    const routes : {[key:string]: any} = {
        '/'   : new URL('../js/dashboard.class.js', import.meta.url).href,
        '/bbs/faq': {
            '/list': new URL('../js/faq.class.js', import.meta.url).href ,
        }
    };

    // FastRouter
    const fastRouter = new FastRouter(routes);
    fastRouter.addRoute('/bbs/notice/list', 'doList', new URL('../js/notice.class.js', import.meta.url).href);
    fastRouter.addRoute('/bbs/notice/edit', 'doEdit', new URL('../js/notice.class.js', import.meta.url).href);
    fastRouter.addRoute('/bbs/faq/list', 'doList');
    fastRouter.addRoute('/bbs/faq/edit', 'doEdit', new URL('../js/faq.class.js', import.meta.url).href);

    // Router
    new Router(urlManager.hash).filter(function(pathinfo : PathInfo)
    {
        if(pathinfo.url ==''){
            return;
        }

        Log.d( 'pathinfo',pathinfo );

        // FastRouter
        fastRouter.listen(pathinfo.path, pathinfo.parse_query);
    });

};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
