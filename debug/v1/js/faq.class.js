class ComponentActivity {
  constructor() {
    this.TAG = 'faq';
  }
  doList(params = {}) {
    Activity.onStart('#left');
    Log.v(this.TAG, 'doList', params);
    // observable
    window.observable.notify('public', `observer <public> : ${this.TAG}::doList`);
  }
  doPost(params = {}) {
    Activity.onStart('#left');
    Log.v(this.TAG, 'doPost', params);
  }
  doEdit(params = {}) {
    Activity.onStart('#left');
    Log.v(this.TAG, 'doEdit', params);
  }
}
;
export { ComponentActivity };