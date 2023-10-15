class ComponentActivity {
    constructor() {
        this.TAG = 'faq';
    }
    doList(params = {}) {
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
        Log.d('Config', config.app_name);
        // observable
        window.observable.notify('public', `observer <public> : ${this.TAG}::doList`);
    }
    doPost(params = {}) {
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
    }
    doEdit(params = {}) {
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
    }
}
;
export { ComponentActivity };
