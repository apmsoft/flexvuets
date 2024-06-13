class ComponentActivity {
  constructor() {
    this.TAG = 'faq';
  }
  doList(params = {}) {
    Log.v(this.TAG, 'doList', params);
  }
  doPost(params = {}) {
    Log.v(this.TAG, 'doPost', params);
  }
  doEdit(params = {}) {
    Log.v(this.TAG, 'doEdit', params);
  }
}
;
export { ComponentActivity };