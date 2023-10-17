const onReady = () : void =>
{
    document.querySelectorAll<HTMLElement>('.uk-hidden').forEach((el,idx) => {
        console.log(idx);
        let closestTrObj = el.closest(`tr`);
        console.log(closestTrObj);
        if(closestTrObj){
            let elPrice = closestTrObj.querySelector<HTMLElement>('.price')!;
            console.log(elPrice.textContent);
        }
    });
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
