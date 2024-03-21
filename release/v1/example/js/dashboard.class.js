class ComponentActivity {
  constructor() {
    this.TAG = 'dashboard';
  }
  doList(params = {}) {
    Activity.onStart('#left');
    Log.v(this.TAG, 'doList', params);
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
//# sourceMappingURL=dashboard.class.js.map