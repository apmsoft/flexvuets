import ScrollAgent from 'src/flexvue/core/scrollagent.class.js';

const onReady = () : void =>
{
    // 채널 등록
    new ScrollObserver(['notice','category','qna']);

    // vertical
    const noticeScrollAgent = new ScrollAgent('notice');
    const noticePreTopPos = noticeScrollAgent.getPos();
    noticeScrollAgent.addScrollListener('vertical', '#notice');
    noticeScrollAgent.scrollTo({top: noticePreTopPos});

    // scroll to bottom
    document.querySelector<HTMLButtonElement>('#btn_vbottom')?.addEventListener('click',function(e){
        noticeScrollAgent.scrollToBottom(1);
    });

    // scroll to top
    document.querySelector<HTMLButtonElement>('#btn_vtop')?.addEventListener('click',function(e){
        noticeScrollAgent.scrollTo({top:0},1);
    });

    // scroll get current position
    document.querySelector<HTMLButtonElement>('#btn_vgetpos')?.addEventListener('click',function(e){
        alert(noticeScrollAgent.getPos());
    });

    // 스크롤 비활성화
    document.querySelector<HTMLButtonElement>('#btn_vdiss')?.addEventListener('click',function(e){
        noticeScrollAgent.disableScroll();
        document.querySelector<HTMLDivElement>('#notice')!.style.backgroundColor = "#ddd";
    });

    // 스크롤 활성화
    document.querySelector<HTMLButtonElement>('#btn_venab')?.addEventListener('click',function(e){
        noticeScrollAgent.enableScroll();
        document.querySelector<HTMLDivElement>('#notice')!.style.backgroundColor = "#ffffff";
    });


    // horizontal -
    const horizontalScrollAgent = new ScrollAgent('category');
    const horizontalPreLeftPos = horizontalScrollAgent.getPos();
    horizontalScrollAgent.addScrollListener('horizontal', '#horizontal-category');
    horizontalScrollAgent.scrollToLeft({left: horizontalPreLeftPos});

    // horizontal scroll to left
    document.querySelector<HTMLButtonElement>('#btn_hsetpos')?.addEventListener('click', function(){
        horizontalScrollAgent.scrollToLeft({left:300},1);
    });
    document.querySelector<HTMLButtonElement>('#btn_hsetpos3')?.addEventListener('click', function(){
        horizontalScrollAgent.scrollToLeft({left:600},1);
    });
    document.querySelector<HTMLButtonElement>('#btn_hgetpos')?.addEventListener('click', function(){
        alert(horizontalScrollAgent.getPos());
    });
}

// document ready
document.addEventListener("DOMContentLoaded",onReady);
