class Notice implements Observer
{
    private TAG : string;
    constructor(){
        this.TAG = 'notice';
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

    // interface
    update(message: any): void {
        Log.d(message);
    }

};

export {Notice};