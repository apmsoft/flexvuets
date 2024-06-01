class ComponentActivity{
    private TAG : string;
    constructor(){
        this.TAG = 'faq';
    }
    doList (params : any | object = {}) {
        Log.v(this.TAG, 'doList', params);
    }
    doPost (params : any | object = {}) {
        Log.v(this.TAG, 'doPost', params);
    }
    doEdit (params : any | object = {}) {
        Log.v(this.TAG, 'doEdit', params);
    }
};

export {ComponentActivity};