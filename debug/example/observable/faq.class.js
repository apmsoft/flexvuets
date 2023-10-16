class Faq {
  constructor() {
    this.TAG = 'faq';
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
  // interface
  update(message) {
    Log.d(message);
  }
}
;
export { Faq };