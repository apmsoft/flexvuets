class ComponentActivity {
    constructor() {
        this.TAG = 'notice';
    }
    doList(params = {}) {
        Activity.onStart('#left');
        Log.v(this.TAG, 'doList', params);
        Log.d(App.getLocale());
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
