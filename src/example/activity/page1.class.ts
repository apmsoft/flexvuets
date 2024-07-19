import AsyncTask from '@flexvue/asynctask';
import {ElementDiv} from '@flexvue/elements/manager';

class ComponentActivity{
    private TAG : string;
    constructor(){
        this.TAG = 'page1';
    }
    doList (params : any | object = {}) 
    {

        Log.v(this.TAG, 'doList', params);

        // Slide
        const activityId = Activity.onStart('f'+Math.random(),'fvueSlideFromRight top-[200px]', 'fvueSlideToLeft');
        Activity.setStateHistory(activityId);
        Activity.setStateActivity(activityId, this);

        // promise.all 사용
        Promise.all([
            new AsyncTask().doImport(new URL('../js/values/arrays.js', import.meta.url).href),
            new AsyncTask().doImport(new URL('../js/values/strings.js', import.meta.url).href)
        ])
        .then(data=>
        {
            new ElementDiv('#'+activityId).html( JSON.stringify(data[0], null, 2));
            Log.v('Promise.all', data);
        })
        .catch( e =>{
            Log.e( e );
        });
    }
    doPost (params : any | object = {}) {
        Log.v(this.TAG, 'doPost >>>>>>>', params);
        alert('call me by history');
    }
    doEdit (params : any | object = {}) {
        Log.v(this.TAG, 'doEdit', params);
    }
};

export {ComponentActivity};