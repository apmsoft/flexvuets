class ComponentActivity {
    private TAG : string;
    constructor(){
        this.TAG = 'dashboard';
    }
    doList (params : any | object = {}) {
        Log.v(this.TAG, 'doList', params);
    }
    doPost (params : any | object = {}) {
        Log.v(this.TAG, 'doList', params);
    }
    doEdit (params : any | object = {}) {
        Log.v(this.TAG, 'doList', params);
    }
};

export {ComponentActivity};