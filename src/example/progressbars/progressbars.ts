
const onReady = () : void =>
{
    new ProgressBars();

    document.querySelector<HTMLButtonElement>('#btn_show')?.addEventListener('click', function(){
        ProgressBars.show();
    });

    document.querySelector<HTMLButtonElement>('#btn_close')?.addEventListener('click', function(){
        ProgressBars.close();
    });
};

//setLanguages = ['en','ja','ko'];
(new App()).setLanguages([]).setResoures({
    sysmsg : new URL(`../js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
    arrays : new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
    strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(onReady);
