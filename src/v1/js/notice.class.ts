class ComponentActivity{
    private TAG : string;
    constructor(){
        this.TAG = 'notice';
    }
    doList (params : any | object = {}) {
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);

        // observable
        window.observable.notify('public', `observer <public> : ${this.TAG}::doList` );
    }
    doPost (params : any | object = {}) {
        Activity.onStart('#left');
        Log.v(this.TAG, 'doPost', params);
    }
    doEdit (params : any | object = {}) {
        Activity.onStart('#left');
        Log.v(this.TAG, 'doEdit', params);
    }
};

export {ComponentActivity};