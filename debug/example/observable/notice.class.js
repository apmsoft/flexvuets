class Notice {
  constructor() {
    this.TAG = 'notice';
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
  // interface
  update(message) {
    Log.d(message);
  }
}
;
export { Notice };