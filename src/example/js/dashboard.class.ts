class ComponentActivity {
    private TAG : string;
    constructor(){
        this.TAG = 'dashboard';
    }
    doList (params : any | object = {}) {
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
    }
    doPost (params : any | object = {}) {
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
    }
    doEdit (params : any | object = {}) {
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
    }
};

export {ComponentActivity};