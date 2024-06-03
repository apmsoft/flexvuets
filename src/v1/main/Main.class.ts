import AsyncTask from '@flexvue/asynctask';
import Swiper from 'swiper/bundle';
import {Template} from '@flexvue/types';

class ComponentActivity {
    private TAG : string;
    constructor(){
        this.TAG = 'MainActivity';
    }

    run(params : any | object = {}) : void {

        ProgressBars.show();

        const self = this;

        // send params
        let send_params = {};
        send_params = Object.assign(send_params, params);

        // multiout
        Promise.all([
            new AsyncTask().doImport( new URL(`../main/tpl/Main.template${App.getLocale()}.js`, import.meta.url).href )
        ]).then((data) => {
            const mainView : Template = new data[0].MainView();

            document.querySelector<HTMLDivElement>('#left-content-container')!.innerHTML = mainView.render({});
            return 'ok';
        })
        .then(ok=>
        {
            // scroll top
            document.querySelector<HTMLDivElement>('#left-layout--main')!.scrollTo({top: 0, behavior: 'smooth'});

            const swiper = new Swiper('.mySwiper', 
            {
                grabCursor: true,
                effect: "creative",
                creativeEffect: {
                    prev: {
                        shadow: true,
                        translate: ["-120%", 0, -500],
                    },
                    next: {
                        shadow: true,
                        translate: ["120%", 0, -500],
                    },
                },
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                // Optional parameters
                direction: 'horizontal',
                loop: true,

                // If we need pagination
                pagination: {
                  el: '.swiper-pagination',
                },

                // Navigation arrows
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },

                // And if we need scrollbar
                scrollbar: {
                  el: '.swiper-scrollbar',
                },
              });
        })
        .catch(e =>{
            window.observable.notify('exception',e);
        })
        .finally(()=>{
            ProgressBars.close();
        });

    }
}

export {ComponentActivity};