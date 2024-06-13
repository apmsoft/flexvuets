import { ElementsAttributeOptions } from "./ElementsAttributeOptions.class.js";
class CreateComponents extends ElementsAttributeOptions {
  constructor(data = {}) {
    super(data);
    this.attributeTemplate = '';
    this.selectorAttr = {};
    this.datasets = [{}];
  }
  id(id) {
    const _id = id.replace('#', '');
    this.options.id = `id="${_id}"`;
    this.selectorAttr.id = id;
    return this;
  }
  name(name) {
    this.options.name = `name="${name}"`;
    this.selectorAttr.name = name;
    return this;
  }
  classList(className) {
    this.options.className = `class="${className}"`;
    return this;
  }
  readonly() {
    this.options.readonly = 'readonly';
    return this;
  }
  disabled() {
    this.options.readonly = 'disabled';
    return this;
  }
  dataset(value) {
    let dataset_data = '';
    value.forEach((obj) => {
      Object.entries(obj).forEach(([key, value]) => {
        dataset_data += `dataset-${key}="${value}" `;
      });
    });
    this.options.datasets = dataset_data ? dataset_data.trim() : '';
    return this;
  }
  createAttribute() {
    let attr = '';
    Object.entries(this.options).forEach(([k, v]) => {
      if (v) {
        attr += `${v} `;
      }
    });
    // const attr = String.raw`${this.options.type} ${this.options.id} ${this.options.name} ${this.options.min} ${this.options.max} ${this.options.datasets} ${this.options.readonly} ${this.options.disabled} ${this.options.className}`;
    return attr.replace(/\s+/g, ' ');
  }
}
class CreateElCheckbox extends CreateComponents {
  constructor() {
    super({
      type: 'type="checkbox"',
      className: '',
      placeholder: '',
      id: '',
      name: '',
      disabled: '',
      readonly: '',
      datasets: ''
    });
  }
  getElementTemplate(value) {
    const attr = this.createAttribute();
    return String.raw`<input ${attr} value="${value !== null && value !== void 0 ? value : ''}" />`;
  }
  render(value, template) {
    const self = this;
    value.forEach((item) => {
      item.value = self.getElementTemplate(item.value);
    });
    const tpl = String.raw`
        ${value.map((item) => `
            ${template ? template.render(item) : `${item.value}`}
        `).join('')}`;
    return tpl;
  }
}
class CreateElRadio extends CreateComponents {
  constructor() {
    super({
      type: 'type="radio"',
      className: '',
      placeholder: '',
      id: '',
      name: '',
      disabled: '',
      readonly: '',
      datasets: ''
    });
  }
  getElementTemplate(value) {
    const attr = this.createAttribute();
    return String.raw`<input ${attr} value="${value !== null && value !== void 0 ? value : ''}" />`;
  }
  render(value, template) {
    const self = this;
    value.forEach((item) => {
      item.value = self.getElementTemplate(item.value);
    });
    const tpl = String.raw`
        ${value.map((item) => `
            ${template ? template.render(item) : `${item.value}`}
        `).join('')}`;
    return tpl;
  }
}
class CreateElSelect extends CreateComponents {
  constructor() {
    super({
      className: '',
      id: '',
      name: '',
      disabled: '',
      readonly: '',
      datasets: ''
    });
  }
  getElementOptions(value) {
    let result = '';
    if (Array.isArray(value)) {
      result = `${value.map((item) => `
                <option value="${item.value}">${item.label}</option>
            `).join('')}`;
    }
    return result;
  }
  render(value) {
    const attr = this.createAttribute();
    const tpl = String.raw`
        <select ${attr}>
            ${Array.isArray(value) ? this.getElementOptions(value) : ''}
        </select>`;
    return tpl;
  }
}
class CreateElButton extends CreateComponents {
  constructor() {
    super({
      type: 'type="button"',
      className: '',
      id: '',
      name: '',
      disabled: '',
      readonly: '',
      datasets: ''
    });
    this.type('button');
  }
  render(value = '') {
    const attr = this.createAttribute();
    const tpl = String.raw`<button ${attr}>${value}</button>`;
    return tpl;
  }
  type(type) {
    this.options.type = `type="${type}"`;
    return this;
  }
}
class CreateElInput extends CreateComponents {
  constructor() {
    super({
      type: 'type="text"',
      className: '',
      placeholder: '',
      id: '',
      name: '',
      disabled: '',
      readonly: '',
      datasets: '',
      min: '',
      max: ''
    });
  }
  render(value = '') {
    const attr = this.createAttribute();
    const tpl = String.raw`<input ${attr} value="${value}" />`;
    return tpl;
  }
  type(type) {
    this.options.type = `type="${type}"`;
    return this;
  }
  placeholder(comment) {
    this.options.placeholder = `placeholder="${comment}"`;
    return this;
  }
  min(min) {
    this.options.min = `min="${min}"`;
    return this;
  }
  max(max) {
    this.options.max = `max="${max}"`;
    return this;
  }
}
class CreateElTextArea extends CreateComponents {
  constructor() {
    super({
      className: '',
      id: '',
      name: '',
      disabled: '',
      readonly: '',
      datasets: '',
      placeholder: ''
    });
  }
  render(value = '') {
    const attr = this.createAttribute();
    const tpl = String.raw`<textarea ${attr}>${value !== null && value !== void 0 ? value : ''}</textarea>`;
    return tpl;
  }
  placeholder(comment) {
    this.options.placeholder = `placeholder="${comment}"`;
    return this;
  }
}
class CreateElDiv extends CreateComponents {
  constructor() {
    super({
      className: '',
      id: '',
      name: '',
      disabled: '',
      readonly: '',
      datasets: ''
    });
  }
  render(value = '') {
    const attr = this.createAttribute();
    const tpl = String.raw`<div ${attr}>${value}</div>`;
    return tpl;
  }
}
class CreateElUL extends CreateComponents {
  constructor() {
    super({
      className: '',
      id: '',
      name: '',
      disabled: '',
      readonly: '',
      datasets: ''
    });
  }
  render(value = '') {
    const attr = this.createAttribute();
    const tpl = String.raw`<ul ${attr}>${value}</ul>`;
    return tpl;
  }
}
class CreateElLi extends CreateComponents {
  constructor() {
    super({
      className: '',
      id: '',
      name: '',
      disabled: '',
      readonly: '',
      datasets: ''
    });
  }
  render(value = '') {
    const attr = this.createAttribute();
    const tpl = String.raw`<li ${attr}>${value}</li>`;
    return tpl;
  }
}
export { CreateComponents, CreateElInput, CreateElTextArea, CreateElDiv, CreateElButton, CreateElSelect, CreateElRadio, CreateElCheckbox, CreateElUL, CreateElLi };