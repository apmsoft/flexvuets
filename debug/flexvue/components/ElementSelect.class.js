export default class ElementSelect {
  constructor(target, data) {
    this.target = document.querySelector(target);
    this.data = data;
    this.template = { render: () => '' };
  }
  outputHTML(template) {
    this.template = template;
    this.target.innerHTML = template.render(this.data);
    return this;
  }
  addEventListener(eventName = 'change', callback) {
    const self = this;
    this.target.addEventListener(eventName, (event) => {
      const el = event.target;
      const value = el.value;
      callback(el, value);
    });
  }
}