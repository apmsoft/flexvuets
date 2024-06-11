import { ElementsAttributeOptions } from '@flexvue/elements/attrs';
class ElementsComponents extends ElementsAttributeOptions {
    constructor(data = {}) {
        super(data);
        this.insertMode = 'inner';
        this.attributeTemplate = '';
        this.selectorAttr = {};
        this.datasets = [{}];
    }
    printHTML(target, type, tpl) {
        if (type == 'prepend') {
            type = 'beforebegin';
        }
        else if (type == 'append') {
            type = 'beforeend';
        }
        let _type = type;
        if (type == 'inner') {
            target.innerHTML = tpl;
        }
        else {
            target.insertAdjacentHTML(_type, tpl);
        }
    }
}
class ElementCheckbox extends ElementsComponents {
    constructor(target) {
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
        this.target = Array.from(document.querySelectorAll(`input[name="${target}"]`));
    }
    addEventListener(eventName, callback) {
        this.target.forEach(ele => ele.addEventListener(eventName, (event) => {
            const _el = event.target;
            callback(_el, _el.value);
        }));
        return this;
    }
    val() {
        const data = [];
        for (let i = 0; i < this.target.length; i++) {
            if (this.target[i].checked) {
                data.push(this.target[i].value);
            }
        }
        return data;
    }
    checked(value) {
        for (let i = 0; i < this.target.length; i++) {
            const found = value.find((element) => element == this.target[i].value);
            if (found !== 'undefined') {
                this.target[i].checked = true;
            }
        }
        return this;
    }
    get() {
        return this.target;
    }
    classList(mode, classNames, value = null) {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if (hasWhitespace) {
                for (let i = 0; i < this.target.length; i++) {
                    if (value != null && value == this.target[i].value) {
                        classNames.split(' ').forEach(cls => {
                            if (mode == 'add')
                                this.target[i].classList.add(cls.trim());
                            else
                                this.target[i].classList.remove(cls.trim());
                        });
                        break;
                    }
                    else {
                        classNames.split(' ').forEach(cls => {
                            if (mode == 'add')
                                this.target[i].classList.add(cls.trim());
                            else
                                this.target[i].classList.remove(cls.trim());
                        });
                    }
                }
            }
            else {
                for (let i = 0; i < this.target.length; i++) {
                    if (value != null && value == this.target[i].value) {
                        classNames.split(' ').forEach(cls => {
                            if (mode == 'add')
                                this.target[i].classList.add(classNames.trim());
                            else
                                this.target[i].classList.remove(classNames.trim());
                        });
                        break;
                    }
                    else {
                        classNames.split(' ').forEach(cls => {
                            if (mode == 'add')
                                this.target[i].classList.add(classNames.trim());
                            else
                                this.target[i].classList.remove(classNames.trim());
                        });
                    }
                }
            }
        }
        return this;
    }
    contains(className, value = null) {
        let result = false;
        for (let i = 0; i < this.target.length; i++) {
            if (value != null && this.target[i].value == value) {
                if (this.target[i].classList.contains(className)) {
                    result = true;
                    break;
                }
            }
            else {
                if (this.target[i].classList.contains(className)) {
                    result = true;
                    break;
                }
            }
        }
        return result;
    }
}
class ElementRadio extends ElementsComponents {
    constructor(target) {
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
        this.target = Array.from(document.querySelectorAll(`input[name="${target}"]`));
    }
    addEventListener(eventName, callback) {
        this.target.forEach(ele => ele.addEventListener(eventName, (event) => {
            const _el = event.target;
            callback(_el, _el.value);
        }));
        return this;
    }
    val() {
        let result = '';
        for (let i = 0; i < this.target.length; i++) {
            if (this.target[i].checked) {
                result = this.target[i].value;
                break;
            }
        }
        return result;
    }
    checked(value) {
        for (let i = 0; i < this.target.length; i++) {
            if (this.target[i].value == value) {
                this.target[i].checked = true;
                break;
            }
        }
        return this;
    }
    get() {
        return this.target;
    }
    classList(mode, classNames, value = null) {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if (hasWhitespace) {
                for (let i = 0; i < this.target.length; i++) {
                    if (value != null && value == this.target[i].value) {
                        classNames.split(' ').forEach(cls => {
                            if (mode == 'add')
                                this.target[i].classList.add(cls.trim());
                            else
                                this.target[i].classList.remove(cls.trim());
                        });
                        break;
                    }
                    else {
                        classNames.split(' ').forEach(cls => {
                            if (mode == 'add')
                                this.target[i].classList.add(cls.trim());
                            else
                                this.target[i].classList.remove(cls.trim());
                        });
                    }
                }
            }
            else {
                for (let i = 0; i < this.target.length; i++) {
                    if (value != null && value == this.target[i].value) {
                        classNames.split(' ').forEach(cls => {
                            if (mode == 'add')
                                this.target[i].classList.add(classNames.trim());
                            else
                                this.target[i].classList.remove(classNames.trim());
                        });
                        break;
                    }
                    else {
                        classNames.split(' ').forEach(cls => {
                            if (mode == 'add')
                                this.target[i].classList.add(classNames.trim());
                            else
                                this.target[i].classList.remove(classNames.trim());
                        });
                    }
                }
            }
        }
        return this;
    }
    contains(className, value = null) {
        let result = false;
        for (let i = 0; i < this.target.length; i++) {
            if (value != null && this.target[i].value == value) {
                if (this.target[i].classList.contains(className)) {
                    result = true;
                    break;
                }
            }
            else {
                if (this.target[i].classList.contains(className)) {
                    result = true;
                    break;
                }
            }
        }
        return result;
    }
}
class ElementSelect extends ElementsComponents {
    constructor(target) {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        });
        this.target = document.querySelector(target);
    }
    addEventListener(eventName, callback) {
        var _a;
        (_a = this.target) === null || _a === void 0 ? void 0 : _a.addEventListener(eventName, (event) => {
            const el = event.target;
            callback(el, el.value);
        });
        return this;
    }
    val() {
        return this.target.value;
    }
    selected(value) {
        const selectEl = this.target.options;
        for (let i = 0; i < selectEl.length; i++) {
            if (selectEl[i].value == value) {
                selectEl[i].selected = true;
                break;
            }
        }
        return this;
    }
    attr(name, value) {
        this.target.setAttribute(name, value);
        return this;
    }
    rmAttr(name) {
        this.target.removeAttribute(name);
        return this;
    }
    get() {
        return this.target;
    }
    classList(mode, classNames) {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if (hasWhitespace) {
                classNames.split(' ').forEach(cls => {
                    if (mode == 'add')
                        this.target.classList.add(cls.trim());
                    else
                        this.target.classList.remove(cls.trim());
                });
            }
            else {
                if (mode == 'add')
                    this.target.classList.add(classNames.trim());
                else
                    this.target.classList.remove(classNames.trim());
            }
        }
        return this;
    }
    contains(className) {
        return this.target.classList.contains(className);
    }
}
class ElementButton extends ElementsComponents {
    constructor(target) {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        });
        this.target = document.querySelector(target);
    }
    html(data) {
        this.printHTML(this.target, this.insertMode, data);
        return this;
    }
    addEventListener(eventName, callback) {
        var _a;
        (_a = this.target) === null || _a === void 0 ? void 0 : _a.addEventListener(eventName, (event) => {
            const el = event.target;
            callback(el, el.value);
        });
        return this;
    }
    val(data = null) {
        if (data == null) {
            return this.target.innerHTML;
        }
        else if (typeof data === 'string') {
            this.target.innerHTML = data;
            return;
        }
    }
    attr(name, value) {
        this.target.setAttribute(name, value);
        return this;
    }
    rmAttr(name) {
        this.target.removeAttribute(name);
        return this;
    }
    get() {
        return this.target;
    }
    classList(mode, classNames) {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if (hasWhitespace) {
                classNames.split(' ').forEach(cls => {
                    if (mode == 'add')
                        this.target.classList.add(cls.trim());
                    else
                        this.target.classList.remove(cls.trim());
                });
            }
            else {
                if (mode == 'add')
                    this.target.classList.add(classNames.trim());
                else
                    this.target.classList.remove(classNames.trim());
            }
        }
        return this;
    }
    contains(className) {
        return this.target.classList.contains(className);
    }
}
class ElementImage extends ElementsComponents {
    constructor(target) {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        });
        this.target = document.querySelector(target);
    }
    addEventListener(eventName, callback) {
        var _a;
        (_a = this.target) === null || _a === void 0 ? void 0 : _a.addEventListener(eventName, (event) => {
            const el = event.target;
            callback(el, el.src);
        });
        return this;
    }
    val(data = null) {
        if (data == null) {
            return this.target.src;
        }
        else if (typeof data === 'string') {
            this.target.src = data;
            return;
        }
    }
    attr(name, value) {
        this.target.setAttribute(name, value);
        return this;
    }
    rmAttr(name) {
        this.target.removeAttribute(name);
        return this;
    }
    get() {
        return this.target;
    }
    classList(mode, classNames) {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if (hasWhitespace) {
                classNames.split(' ').forEach(cls => {
                    if (mode == 'add')
                        this.target.classList.add(cls.trim());
                    else
                        this.target.classList.remove(cls.trim());
                });
            }
            else {
                if (mode == 'add')
                    this.target.classList.add(classNames.trim());
                else
                    this.target.classList.remove(classNames.trim());
            }
        }
        return this;
    }
    contains(className) {
        return this.target.classList.contains(className);
    }
}
class ElementInput extends ElementsComponents {
    constructor(target) {
        super({
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
        this.target = document.querySelector(target);
    }
    addEventListener(eventName, callback) {
        var _a;
        (_a = this.target) === null || _a === void 0 ? void 0 : _a.addEventListener(eventName, (event) => {
            const el = event.target;
            callback(el, el.value);
        });
        return this;
    }
    val(data = null) {
        if (data == null) {
            return this.target.value;
        }
        else if (typeof data === 'string') {
            this.target.value = data;
            return;
        }
    }
    attr(name, value) {
        this.target.setAttribute(name, value);
        return this;
    }
    rmAttr(name) {
        this.target.removeAttribute(name);
        return this;
    }
    get() {
        return this.target;
    }
    classList(mode, classNames) {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if (hasWhitespace) {
                classNames.split(' ').forEach(cls => {
                    if (mode == 'add')
                        this.target.classList.add(cls.trim());
                    else
                        this.target.classList.remove(cls.trim());
                });
            }
            else {
                if (mode == 'add')
                    this.target.classList.add(classNames.trim());
                else
                    this.target.classList.remove(classNames.trim());
            }
        }
        return this;
    }
    contains(className) {
        return this.target.classList.contains(className);
    }
}
class ElementTextArea extends ElementsComponents {
    constructor(target) {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: '',
            placeholder: ''
        });
        this.target = document.querySelector(target);
    }
    addEventListener(eventName, callback) {
        var _a;
        (_a = this.target) === null || _a === void 0 ? void 0 : _a.addEventListener(eventName, (event) => {
            const el = event.target;
            callback(el, el.value);
        });
        return this;
    }
    val(data = null) {
        if (data == null) {
            return this.target.value;
        }
        else if (typeof data === 'string') {
            this.target.value = data;
            return;
        }
    }
    attr(name, value) {
        this.target.setAttribute(name, value);
        return this;
    }
    rmAttr(name) {
        this.target.removeAttribute(name);
        return this;
    }
    get() {
        return this.target;
    }
    classList(mode, classNames) {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if (hasWhitespace) {
                classNames.split(' ').forEach(cls => {
                    if (mode == 'add')
                        this.target.classList.add(cls.trim());
                    else
                        this.target.classList.remove(cls.trim());
                });
            }
            else {
                if (mode == 'add')
                    this.target.classList.add(classNames.trim());
                else
                    this.target.classList.remove(classNames.trim());
            }
        }
        return this;
    }
    contains(className) {
        return this.target.classList.contains(className);
    }
}
class ElementDiv extends ElementsComponents {
    constructor(target) {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        });
        this.target = document.querySelector(target);
    }
    html(data) {
        this.printHTML(this.target, this.insertMode, data);
        return this;
    }
    addEventListener(eventName, callback) {
        var _a;
        (_a = this.target) === null || _a === void 0 ? void 0 : _a.addEventListener(eventName, (event) => {
            const el = event.target;
            callback(el, el.innerHTML);
        });
        return this;
    }
    get() {
        return this.target;
    }
    val(data = null) {
        if (data == null) {
            return this.target.innerHTML;
        }
        else if (typeof data === 'string') {
            this.target.innerHTML = data;
            return;
        }
    }
    insert(type = 'inner') {
        this.insertMode = type;
        return this;
    }
    attr(name, value) {
        this.target.setAttribute(name, value);
        return this;
    }
    rmAttr(name) {
        this.target.removeAttribute(name);
        return this;
    }
    style(property, value) {
        this.target.style[property] = value;
        return this;
    }
    classList(mode, classNames) {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if (hasWhitespace) {
                classNames.split(' ').forEach(cls => {
                    if (mode == 'add')
                        this.target.classList.add(cls.trim());
                    else
                        this.target.classList.remove(cls.trim());
                });
            }
            else {
                if (mode == 'add')
                    this.target.classList.add(classNames.trim());
                else
                    this.target.classList.remove(classNames.trim());
            }
        }
        return this;
    }
    contains(className) {
        return this.target.classList.contains(className);
    }
}
class ElementUL extends ElementsComponents {
    constructor(target) {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        });
        this.target = document.querySelector(target);
    }
    html(data) {
        this.printHTML(this.target, this.insertMode, data);
        return this;
    }
    addEventListener(eventName, callback) {
        var _a;
        (_a = this.target) === null || _a === void 0 ? void 0 : _a.addEventListener(eventName, (event) => {
            const el = event.target;
            callback(el, el.innerHTML);
        });
        return this;
    }
    val(data = null) {
        if (data == null) {
            return this.target.innerHTML;
        }
        else if (typeof data === 'string') {
            this.target.innerHTML = data;
            return;
        }
    }
    insert(type = 'inner') {
        this.insertMode = type;
        return this;
    }
    attr(name, value) {
        this.target.setAttribute(name, value);
        return this;
    }
    rmAttr(name) {
        this.target.removeAttribute(name);
        return this;
    }
    style(property, value) {
        this.target.style[property] = value;
        return this;
    }
    classList(mode, classNames) {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if (hasWhitespace) {
                classNames.split(' ').forEach(cls => {
                    if (mode == 'add')
                        this.target.classList.add(cls.trim());
                    else
                        this.target.classList.remove(cls.trim());
                });
            }
            else {
                if (mode == 'add')
                    this.target.classList.add(classNames.trim());
                else
                    this.target.classList.remove(classNames.trim());
            }
        }
        return this;
    }
    contains(className) {
        return this.target.classList.contains(className);
    }
    get() {
        return this.target;
    }
}
class ElementLi extends ElementsComponents {
    constructor(target) {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        });
        this.target = document.querySelector(target);
    }
    html(data) {
        this.printHTML(this.target, this.insertMode, data);
        return this;
    }
    addEventListener(eventName, callback) {
        var _a;
        (_a = this.target) === null || _a === void 0 ? void 0 : _a.addEventListener(eventName, (event) => {
            const el = event.target;
            callback(el, el.innerHTML);
        });
        return this;
    }
    val(data = null) {
        if (data == null) {
            return this.target.innerHTML;
        }
        else if (typeof data === 'string') {
            this.target.innerHTML = data;
            return;
        }
    }
    insert(type = 'inner') {
        this.insertMode = type;
        return this;
    }
    attr(name, value) {
        this.target.setAttribute(name, value);
        return this;
    }
    rmAttr(name) {
        this.target.removeAttribute(name);
        return this;
    }
    classList(mode, classNames) {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if (hasWhitespace) {
                classNames.split(' ').forEach(cls => {
                    if (mode == 'add')
                        this.target.classList.add(cls.trim());
                    else
                        this.target.classList.remove(cls.trim());
                });
            }
            else {
                if (mode == 'add')
                    this.target.classList.add(classNames.trim());
                else
                    this.target.classList.remove(classNames.trim());
            }
        }
        return this;
    }
    contains(className) {
        return this.target.classList.contains(className);
    }
    style(property, value) {
        this.target.style[property] = value;
        return this;
    }
    get() {
        return this.target;
    }
}
class ElementQuery {
    constructor(target = null) {
        this.target = target ? document.querySelector(target) : null;
    }
    get() {
        return this.target;
    }
    each(selector, callback) {
        if (this.target) {
            const elements = this.target.querySelectorAll(selector);
            elements.forEach(callback);
        }
        else {
            const elements = document.querySelectorAll(selector);
            elements.forEach(callback);
        }
        return this;
    }
}
export { ElementsComponents, ElementInput, ElementTextArea, ElementDiv, ElementButton, ElementSelect, ElementRadio, ElementCheckbox, ElementUL, ElementLi, ElementQuery, ElementImage };
