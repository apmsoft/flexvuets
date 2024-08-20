export default class Forms {
  constructor(targetId) {
    this.targetId = targetId;
  }
  /**
   * @param callback Function
   */
  doSubmit(callback = null) {
    const self = this;
    let send_params = {};
    const formElem = document.querySelector(this.targetId);
    if (!formElem)
    return;
    formElem.addEventListener('submit', function (e) {
      e.preventDefault();
      send_params = self.getTargetFromDatas(formElem);
      if (typeof callback === 'function') {
        callback(send_params);
      }
    });
  }
  getTargetFromDatas(formElem) {
    if (typeof formElem === 'undefined') {
      formElem = document.querySelector(this.targetId);
    }
    if (!formElem)
    return {};
    let datas = {};
    // 데이터 필터링
    const formData = new FormData(formElem);
    formData.forEach((val, name) => {
      const elements = formElem.elements.namedItem(name);
      if (elements instanceof RadioNodeList) {
        const nodeName = elements.length > 1 ?
        elements[0].nodeName :
        elements[0].nodeName;
        datas[name] = datas[name] && datas[name] !== '' ?
        `${datas[name]},${val}` :
        val;
      } else
      if (elements) {
        const nodeName = elements.nodeName;
        const _value = nodeName === 'TEXTAREA' ? encodeURIComponent(val) : val;
        datas[name] = datas[name] && datas[name] !== '' ?
        `${datas[name]},${_value}` :
        _value;
      }
    });
    return datas;
  }
}