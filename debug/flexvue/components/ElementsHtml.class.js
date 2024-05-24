class ElementsComponents {
  constructor(target) {
    this.insertMode = 'inner';
    this.attributeTemplate = '';
    this.target = target ? document.querySelector(target) : null;
    this.options = {
      type: '',
      className: '',
      placeholder: '',
      id: '',
      name: '',
      disabled: '',
      readonly: '',
      datasets: '',
      min: '0',
      max: '100'
    };
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
  min(min) {
    this.options.min = `min="${min}"`;
    return this;
  }
  max(max) {
    this.options.max = `max="${max}"`;
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
    value.forEach((v, k) => {
      dataset_data += `dataset-${k}="${v}" `;
    });
    this.options.datasets = dataset_data;
    return this;
  }
  insert(type = 'inner') {
    this.insertMode = type;
    return this;
  }
  selector() {
    var _a, _b;
    const selector = this.selectorAttr.id ? this.selectorAttr.id : (_a = this.selectorAttr.name) !== null && _a !== void 0 ? _a : '';
    let el;
    if (this.insertMode == 'inner' && selector) {
      el = (_b = this.target) === null || _b === void 0 ? void 0 : _b.querySelector(selector);
    } else
    {
      el = this.selectorAttr.id ? document.querySelector(selector) : this.target;
    }
    return el;
  }
  createAttribute() {
    const attr = String.raw`${this.options.type} ${this.options.id} ${this.options.name} ${this.options.min} ${this.options.max} ${this.options.datasets} ${this.options.readonly} ${this.options.disabled} ${this.options.className}`;
    return attr.replace(/\s+/g, ' ');
  }
  printHTML(target, type, tpl) {
    if (type == 'prepend') {
      target.insertAdjacentHTML('beforebegin', tpl);
    } else
    if (type == 'append') {
      target.insertAdjacentHTML('beforeend', tpl);
    } else
    {
      target.innerHTML = tpl;
    }
  }
}
class ElementCheckbox extends ElementsComponents {
  constructor(target = null) {
    super(target);
  }
  getElementTemplate(value) {
    const attr = this.createAttribute();
    return String.raw`<input type="checkbox" ${attr} value="${value !== null && value !== void 0 ? value : ''}" />`;
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
  html(value, template) {
    const self = this;
    if (value != null && Array.isArray(value)) {
      this.printHTML(this.target, this.insertMode, self.render(value, template));
      return this;
    }
    return this;
  }
  addEventListener(eventName, callback) {
    const el = this.selectorAll('.');
    el.forEach((ele) => ele.addEventListener(eventName, (event) => {
      const _el = event.target;
      callback(_el, _el.value);
    }));
    return this;
  }
  val() {
    const data = [];
    const el = this.selectorAll('.');
    for (let i = 0; i < el.length; i++) {
      if (el[i].checked) {
        data.push(el[i].value);
      }
    }
    return data;
  }
  selectorAll(select_idname) {
    var _a;
    let el = null;
    if (this.insertMode === 'inner') {
      if (select_idname == '#' && this.selectorAttr.id) {
        el = (_a = this.target) === null || _a === void 0 ? void 0 : _a.querySelector(this.selectorAttr.id);
      } else
      if (this.selectorAttr.name) {
        el = Array.from(this.target.querySelectorAll(`[name="${this.selectorAttr.name}"]`));
      }
    } else
    {
      if (select_idname == '#' && this.selectorAttr.id) {
        el = document.querySelector(this.selectorAttr.id);
      } else
      if (this.selectorAttr.name) {
        el = Array.from(this.target.querySelectorAll(`[name="${this.selectorAttr.name}"]`));
      }
    }
    return el;
  }
  checked(value) {
    const el = this.selectorAll('.');
    for (let i = 0; i < el.length; i++) {
      const found = value.find((element) => element == el[i].value);
      if (found !== 'undefined') {
        el[i].checked = true;
      }
    }
    return this;
  }
}
class ElementRadio extends ElementsComponents {
  constructor(target = null) {
    super(target);
  }
  getElementTemplate(value) {
    const attr = this.createAttribute();
    return String.raw`<input type="radio" ${attr} value="${value !== null && value !== void 0 ? value : ''}" />`;
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
  html(value, template) {
    const self = this;
    if (value != null && Array.isArray(value)) {
      this.printHTML(this.target, this.insertMode, self.render(value, template));
      return this;
    }
    return this;
  }
  addEventListener(eventName, callback) {
    const el = this.selectorAll('.');
    el.forEach((ele) => ele.addEventListener(eventName, (event) => {
      const _el = event.target;
      callback(_el, _el.value);
    }));
    return this;
  }
  val() {
    const el = this.selectorAll('#');
    return el ? el.value : '';
  }
  selectorAll(select_idname) {
    var _a;
    let el = null;
    if (this.insertMode === 'inner') {
      if (select_idname == '#' && this.selectorAttr.id) {
        el = (_a = this.target) === null || _a === void 0 ? void 0 : _a.querySelector(this.selectorAttr.id);
      } else
      if (this.selectorAttr.name) {
        el = Array.from(this.target.querySelectorAll(`[name="${this.selectorAttr.name}"]`));
      }
    } else
    {
      if (select_idname == '#' && this.selectorAttr.id) {
        el = document.querySelector(this.selectorAttr.id);
      } else
      if (this.selectorAttr.name) {
        el = Array.from(this.target.querySelectorAll(`[name="${this.selectorAttr.name}"]`));
      }
    }
    return el;
  }
  checked(value) {
    const el = this.selectorAll('.');
    for (let i = 0; i < el.length; i++) {
      if (el[i].value == value) {
        el[i].checked = true;
        break;
      }
    }
    return this;
  }
}
class ElementSelect extends ElementsComponents {
  constructor(target = null) {
    super(target);
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
  html(value) {
    if (value != null && Array.isArray(value)) {
      this.printHTML(this.target, this.insertMode, this.render(value));
      return this;
    }
    return this;
  }
  addEventListener(eventName, callback) {
    const el = this.selector();
    el === null || el === void 0 ? void 0 : el.addEventListener(eventName, (event) => {
      const el = event.target;
      callback(el, el.value);
    });
    return this;
  }
  val() {
    const el = this.selector();
    return el ? el.value : '';
  }
  selected(value) {
    const el = this.selector();
    const selectEl = el.options;
    for (let i = 0; i < selectEl.length; i++) {
      if (selectEl[i].value == value) {
        selectEl[i].selected = true;
        break;
      }
    }
    return this;
  }
}
class ElementButton extends ElementsComponents {
  constructor(target = null) {
    super(target);
    this.type('button');
  }
  render(value = '') {
    const attr = this.createAttribute();
    const tpl = String.raw`<button ${attr}>${value}</button>`;
    return tpl;
  }
  html(value = '') {
    this.printHTML(this.target, this.insertMode, this.render(value));
    return this;
  }
  type(type) {
    this.options.type = `type="${type}"`;
    return this;
  }
  addEventListener(eventName, callback) {
    const el = this.selector();
    el === null || el === void 0 ? void 0 : el.addEventListener(eventName, (event) => {
      const el = event.target;
      callback(el, el.value);
    });
    return this;
  }
  val(data = null) {
    const el = this.selector();
    if (data == null) {
      return el ? el.innerHTML : '';
    } else
    if (typeof data === 'string') {
      el.innerHTML = data;
      return;
    }
  }
}
class ElementInput extends ElementsComponents {
  constructor(target = null) {
    super(target);
    this.type('text');
  }
  render(value = '') {
    const attr = this.createAttribute();
    const tpl = String.raw`<input ${attr} value="${value}" />`;
    return tpl;
  }
  html(value = '') {
    this.printHTML(this.target, this.insertMode, this.render(value));
    return this;
  }
  type(type) {
    this.options.type = `type="${type}"`;
    return this;
  }
  placeholder(comment) {
    this.options.placeholder = `placeholder="${comment}"`;
    return this;
  }
  addEventListener(eventName, callback) {
    const el = this.selector();
    el === null || el === void 0 ? void 0 : el.addEventListener(eventName, (event) => {
      const el = event.target;
      callback(el, el.value);
    });
    return this;
  }
  val(data = null) {
    const el = this.selector();
    if (data == null) {
      return el ? el.value : '';
    } else
    if (typeof data === 'string') {
      el.value = data;
      return;
    }
  }
}
class ElementTextArea extends ElementsComponents {
  constructor(target = null) {
    super(target);
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
  html(value = '') {
    this.printHTML(this.target, this.insertMode, this.render(value));
    return this;
  }
  addEventListener(eventName, callback) {
    const el = this.selector();
    el === null || el === void 0 ? void 0 : el.addEventListener(eventName, (event) => {
      const el = event.target;
      callback(el, el.value);
    });
    return this;
  }
  val(data = null) {
    const el = this.selector();
    if (data == null) {
      return el ? el.value : '';
    } else
    if (typeof data === 'string') {
      el.value = data;
      return;
    }
  }
}
class ElementDiv extends ElementsComponents {
  constructor(target = null) {
    super(target);
  }
  render(value = '') {
    const attr = this.createAttribute();
    const tpl = String.raw`<div ${attr}>${value}</div>`;
    return tpl;
  }
  html(value = '') {
    this.printHTML(this.target, this.insertMode, this.render(value));
    return this;
  }
  addEventListener(eventName, callback) {
    const el = this.selector();
    el === null || el === void 0 ? void 0 : el.addEventListener(eventName, (event) => {
      const el = event.target;
      callback(el, el.innerHTML);
    });
    return this;
  }
  val(data = null) {
    const el = this.target;
    if (data == null) {
      return el ? el.innerHTML : '';
    } else
    if (typeof data === 'string') {
      el.innerHTML = data;
      return;
    }
  }
}
class ElementUL extends ElementsComponents {
  constructor(target = null) {
    super(target);
  }
  render(value = '') {
    const attr = this.createAttribute();
    const tpl = String.raw`<ul ${attr}>${value}</ul>`;
    return tpl;
  }
  html(value = '') {
    this.printHTML(this.target, this.insertMode, this.render(value));
    return this;
  }
  addEventListener(eventName, callback) {
    const el = this.selector();
    el === null || el === void 0 ? void 0 : el.addEventListener(eventName, (event) => {
      const el = event.target;
      callback(el, el.innerHTML);
    });
    return this;
  }
  val(data = null) {
    const el = this.target;
    if (data == null) {
      return el ? el.innerHTML : '';
    } else
    if (typeof data === 'string') {
      el.innerHTML = data;
      return;
    }
  }
}
class ElementLi extends ElementsComponents {
  constructor(target = null) {
    super(target);
  }
  render(value = '') {
    const attr = this.createAttribute();
    const tpl = String.raw`<li ${attr}>${value}</li>`;
    return tpl;
  }
  html(value = '') {
    if (this.target == null) {
      throw new Error('target is null');
    }
    this.printHTML(this.target, this.insertMode, this.render(value));
    return this;
  }
  addEventListener(eventName, callback) {
    const el = this.selector();
    el === null || el === void 0 ? void 0 : el.addEventListener(eventName, (event) => {
      const el = event.target;
      callback(el, el.innerHTML);
    });
    return this;
  }
  val(data = null) {
    const el = this.target;
    if (data == null) {
      return el ? el.innerHTML : '';
    } else
    if (typeof data === 'string') {
      el.innerHTML = data;
      return;
    }
  }
}
export { ElementInput, ElementTextArea, ElementDiv, ElementButton, ElementSelect, ElementRadio, ElementCheckbox, ElementUL, ElementLi };