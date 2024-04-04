class ComponentActivity {
  constructor() {
    this.TAG = 'notice';
  }
  doList(params = {}) {
    Activity.onStart('#left');
    Log.v(this.TAG, 'doList', params);
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