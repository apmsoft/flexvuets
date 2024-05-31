import ScrollAgent from '@flexvue/scrollagent';
import {ElementButton,ElementDiv} from '@flexvue/elements/manager';

const onReady = () : void =>
{
    // 채널 등록
    new ScrollObserver(['notice','category','qna']);

    // vertical
    const noticeScrollAgent = new ScrollAgent('notice');
    const noticePreTopPos = noticeScrollAgent.getPos();
    noticeScrollAgent.addScrollListener('vertical', '#notice', function(pos : GLfloat = 0){
        Log.d('current',pos);
    });
    noticeScrollAgent.scrollTo({top: noticePreTopPos});

    // scroll to bottom
    new ElementButton('#btn_vbottom')?.addEventListener('click',function(e){
        noticeScrollAgent.scrollToBottom(1);
    });

    // scroll to top
    new ElementButton('#btn_vtop')?.addEventListener('click',function(e){
        noticeScrollAgent.scrollTo({top:0},1);
    });

    // scroll get current position
    new ElementButton('#btn_vgetpos')?.addEventListener('click',function(e){
        alert(noticeScrollAgent.getPos());
    });

    // 스크롤 비활성화
    new ElementButton('#btn_vdiss')?.addEventListener('click',function(e){
        noticeScrollAgent.disableScroll();
        new ElementDiv('#notice').style('backgroundColor',"#ddd");
    });

    // 스크롤 활성화
    new ElementButton('#btn_venab')?.addEventListener('click',function(e){
        noticeScrollAgent.enableScroll();
        new ElementDiv('#notice').style('backgroundColor',"#ffffff");
    });


    // horizontal -
    const horizontalScrollAgent = new ScrollAgent('category');
    const horizontalPreLeftPos = horizontalScrollAgent.getPos();
    horizontalScrollAgent.addScrollListener('horizontal', '#horizontal-category');
    horizontalScrollAgent.scrollToLeft({left: horizontalPreLeftPos});

    // horizontal scroll to left
    new ElementButton('#btn_hsetpos')?.addEventListener('click', function(){
        horizontalScrollAgent.scrollToLeft({left:300},1);
    });
    new ElementButton('#btn_hsetpos3')?.addEventListener('click', function(){
        horizontalScrollAgent.scrollToLeft({left:600},1);
    });
    new ElementButton('#btn_hgetpos')?.addEventListener('click', function(){
        alert(horizontalScrollAgent.getPos());
    });
}

//setLanguages = ['en','ja','ko'];
(new App()).setLanguages([]).setResoures(import.meta.url).run(onReady);
