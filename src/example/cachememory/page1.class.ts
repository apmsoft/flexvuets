import AsyncTask from '@flexvue/asynctask';

class ComponentActivity{
    private TAG : string;
    constructor(){
        this.TAG = 'page1';
    }
    doList (params : any | object = {}) {

        Log.v(this.TAG, 'doList', params);

        // promise.all 사용
        Promise.all([
            window.cacheMemory._getAsync('/test/object') ?? new AsyncTask().doImport(new URL('../js/values/arrays.js', import.meta.url).href),
            new AsyncTask().doImport(new URL('../js/values/strings.js', import.meta.url).href)
        ])
        .then(data=>
        {
            Log.v('Promise.all', data);
        })
        .catch( e =>{
            Log.e( e );
        });
    }
    doPost (params : any | object = {}) {
        Log.v(this.TAG, 'doPost', params);
    }
    doEdit (params : any | object = {}) {
        Log.v(this.TAG, 'doEdit', params);
    }
};

export {ComponentActivity};