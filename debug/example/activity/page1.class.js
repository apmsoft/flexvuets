import AsyncTask from "../../flexvue/core/AsyncTask.class.js";
import { ElementDiv } from "../../flexvue/components/ElementsManager.class.js";
class ComponentActivity {
  constructor() {
    this.TAG = 'page1';
  }
  doList(params = {}) {
    Log.v(this.TAG, 'doList', params);
    // Slide
    const activityId = Activity.onStart('fvueSlideFromRight top-[200px]', 'fvueSlideToLeft');
    Activity.setStateHistory(activityId);
    Activity.setStateActivity(activityId, this);
    // promise.all 사용
    Promise.all([
    new AsyncTask().doImport(new URL('../js/values/arrays.js', import.meta.url).href),
    new AsyncTask().doImport(new URL('../js/values/strings.js', import.meta.url).href)]
    ).
    then((data) => {
      new ElementDiv('#' + activityId).html(JSON.stringify(data[0], null, 2));
      Log.v('Promise.all', data);
    }).
    catch((e) => {
      Log.e(e);
    });
  }
  doPost(params = {}) {
    Log.v(this.TAG, 'doPost >>>>>>>', params);
    alert('call me by history');
  }
  doEdit(params = {}) {
    Log.v(this.TAG, 'doEdit', params);
  }
}
;
export { ComponentActivity };