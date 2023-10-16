export default class Forms {
  constructor(targetId) {
    this.targetId = targetId;
  }
  /**
   * @param callback Function
   */
  doSubmit(callback = null) {
    let send_params = {};
    const formElem = document.querySelector(this.targetId);
    if (!formElem) return;
    formElem.addEventListener('submit', function (e) {
      e.preventDefault();
      send_params = {};
      // 데이터 필터링
      const formData = new FormData(formElem);
      formData.forEach((val, name) => {
        const elements = formElem.elements.namedItem(name);
        if (elements instanceof RadioNodeList) {
          const nodeName = elements.length > 1 ? elements[0].nodeName : elements[0].nodeName;
          send_params[name] = send_params[name] && send_params[name] !== '' ? `${send_params[name]},${val}` : val;
        } else if (elements) {
          const nodeName = elements.nodeName;
          const _value = nodeName === 'TEXTAREA' ? encodeURIComponent(val) : val;
          send_params[name] = send_params[name] && send_params[name] !== '' ? `${send_params[name]},${_value}` : _value;
        }
      });
      if (typeof callback === 'function') {
        callback(send_params);
      }
    });
  }
}