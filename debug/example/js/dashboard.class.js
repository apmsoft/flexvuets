class ComponentActivity {
  constructor() {
    this.TAG = 'dashboard';
  }
  doList(params = {}) {
    Log.v(this.TAG, 'doList', params);
  }
  doPost(params = {}) {
    Log.v(this.TAG, 'doList', params);
  }
  doEdit(params = {}) {
    Log.v(this.TAG, 'doList', params);
  }
}
;
export { ComponentActivity };