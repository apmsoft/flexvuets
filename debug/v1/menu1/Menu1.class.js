import AsyncTask from '@flexvue/asynctask';
class ComponentActivity {
    constructor() {
    }
    doGreeting(params = {}) {
        ProgressBars.show();
        const self = this;
        // panel
        // Activity.onStart('#left');
        // multiout
        new AsyncTask().doImport(new URL(`../menu1/tpl/Greeting.template${App.getLocale()}.js`, import.meta.url).href)
            .then(Module => {
            const greetingView = new Module.GreetingView();
            document.querySelector('#left-content-container').innerHTML = greetingView.render({});
            return 'ok';
        })
            .then(resp => {
            // scroll top
            document.querySelector('#left-layout--main').scrollTo({ top: 0, behavior: 'smooth' });
        })
            .finally(() => {
            ProgressBars.close();
        });
    }
    doLocation(params = {}) {
        ProgressBars.show();
        const self = this;
        // panel
        // Activity.onStart('#left');
        // multiout
        new AsyncTask().doImport(new URL(`../menu1/tpl/Location.template${App.getLocale()}.js`, import.meta.url).href)
            .then(Module => {
            const locationView = new Module.LocationView();
            document.querySelector('#left-content-container').innerHTML = locationView.render({});
            return 'ok';
        })
            .then(resp => {
            // scroll top
            document.querySelector('#left-layout--main').scrollTo({ top: 0, behavior: 'smooth' });
        })
            .finally(() => {
            ProgressBars.close();
        });
    }
}
export { ComponentActivity };
