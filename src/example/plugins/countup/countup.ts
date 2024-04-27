import { CountUp } from 'countup.js';

const onReady = () : void =>
{
    // example1
    const countUp = new CountUp('countupjs', 2000, {duration : 3, useEasing:true, prefix:"$", suffix:""});
    countUp.start(() => Log.d('1 Complete!'));

        // reset
        document.querySelector<HTMLButtonElement>('#btn-reset')!.addEventListener('click',(e)=>{
            countUp.reset();
        });

        // update
        document.querySelector<HTMLButtonElement>('#btn-update')!.addEventListener('click',(e)=>{
            countUp.update(989);
        });
        document.querySelector<HTMLButtonElement>('#btn-update2')!.addEventListener('click',(e)=>{
            countUp.update(2000);
        });

    // example 2
    const countUp2 = new CountUp('countupjs2', 30000, {prefix:"&#x20a9;",suffix:"<small class=\"text-xs\">원</small>" });
    countUp2.start(() => Log.d('2 Complete!'));
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);