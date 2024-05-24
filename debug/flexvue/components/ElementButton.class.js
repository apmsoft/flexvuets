export default class ElementCheckBox {
  constructor(target, data) {
    this.template = null;
    this.target = document.querySelector(target);
    this.data = data;
    this.template = { render: () => '' };
  }
  outputHTML(template) {
    this.template = template;
    this.target.innerHTML = template.render(this.data);
    return this;
  }
  addEventListener(eventName = 'click', callback) {
    this.target.addEventListener(eventName, (event) => {
      const el = event.target;
      callback(el, null);
    });
  }
}