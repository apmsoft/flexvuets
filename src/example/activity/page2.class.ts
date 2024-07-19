import {ElementDiv} from '@flexvue/elements/manager';
import AsyncTask from '@flexvue/asynctask';

class ComponentActivity{
    private TAG : string;
    constructor(){
        this.TAG = 'page2';
    }
    doList (params : any | object = {}) {
        Log.v(this.TAG, 'doList', params);

        // Slide
        const activityId = Activity.onStart('f'+Math.random(),'fvueSlideFromRight top-[200px]', 'fvueSlideToLeft');
        Activity.setStateHistory(activityId);
        Activity.setStateActivity(activityId, this);https://swiperjs.com/demos/images/nature-1.jpg

        new ElementDiv('#'+activityId).html( 'page 2 ');
    }
    doPost (params : any | object = {}) {
        Log.v(this.TAG, 'doPost', params);
    }
    doEdit (params : any | object = {}) {
        Log.v(this.TAG, 'doEdit', params);
    }
};

export {ComponentActivity};