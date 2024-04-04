{
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

    // document ready
    document.addEventListener("DOMContentLoaded",onReady);
}