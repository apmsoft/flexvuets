import { ElementDiv } from "../../flexvue/components/ElementsManager.class.js";
class ComponentActivity {
  constructor() {
    this.TAG = 'page2';
  }
  doList(params = {}) {
    Log.v(this.TAG, 'doList', params);
    // Slide
    const activityId = Activity.onStart('f' + Math.random(), 'fvueSlideFromRight top-[200px]', 'fvueSlideToLeft');
    Activity.setStateHistory(activityId);
    Activity.setStateActivity(activityId, this);
    https: //swiperjs.com/demos/images/nature-1.jpg
    new ElementDiv('#' + activityId).html('page 2 ');
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