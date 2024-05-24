import {Template} from '@flexvue/types';

import {
    DatasetTypes,
    HtmlPrintTypes,
    ButtonTypeTypes,
    InputTypeTypes,
    InputTypes,
    InputHtmlTypes,
    ElementsHTML,
    RadioTypes,
    CheckboxTypes,
    ListDataTypes,
    SelectTypes,
    SelectorAttrTypes
} from '@flexvue/elementstypes';

class ElementsComponents {
    protected target: HTMLElement | null;
    protected options : InputHtmlTypes;
    protected insertMode : string = 'inner';
    protected attributeTemplate = '';
    protected datasets : [DatasetTypes];
    protected selectorAttr : SelectorAttrTypes;

    constructor(target: string | null) {
        this.target = target ? document.querySelector(target) as HTMLElement : null;
        this.options = {
            type       : '',
            className  : '',
            placeholder: '',
            id         : '',
            name       : '',
            disabled   : '',
            readonly   : '',
            datasets   : '',
            min : '0',
            max : '100'
        };
        this.selectorAttr = {};
        this.datasets = [{}];
    }

    id (id : string) : this {
        const _id = id.replace('#','');
        this.options.id = `id="${_id}"`;
        this.selectorAttr.id = id;
        return this;
    }

    name (name : string) : this {
        this.options.name = `name="${name}"`;
        this.selectorAttr.name = name;
        return this;
    }

    classList(className : string) : this {
        this.options.className = `class="${className}"`;
        return this;
    }

    min(min : string | number) : this {
        this.options.min = `min="${min}"`;
        return this;
    }

    max(max : string | number) : this {
        this.options.max = `max="${max}"`;
        return this;
    }

    readonly () : this{
        this.options.readonly = 'readonly';
        return this;
    }

    disabled () : this{
        this.options.readonly = 'disabled';
        return this;
    }

    dataset (value : [DatasetTypes]) : this {
        let dataset_data : string = '';
        value.forEach((v,k) => {
            dataset_data += `dataset-${k}="${v}" `;
        });
        this.options.datasets = dataset_data;
        return this;
    }

    insert (type : HtmlPrintTypes = 'inner') : this{
        this.insertMode = type;
        return this;
    }

    protected selector() : HTMLElement{
        const selector = (this.selectorAttr.id) ? this.selectorAttr.id : this.selectorAttr.name?? '';
        let el : HTMLElement;
        if(this.insertMode  == 'inner' && selector){
            el = this.target?.querySelector(selector) as HTMLElement;
        }else {
            el = (this.selectorAttr.id) ? document.querySelector(selector) as HTMLElement : this.target as HTMLElement;
        }

    return el;
    }

    protected createAttribute () : string {
        const attr = String.raw`${this.options.type} ${this.options.id} ${this.options.name} ${this.options.min} ${this.options.max} ${this.options.datasets} ${this.options.readonly} ${this.options.disabled} ${this.options.className}`;
        return attr.replace(/\s+/g,' ');
    }

    protected printHTML (target : HTMLElement, type : string, tpl : string) : void {
        if(type == 'prepend'){
            target.insertAdjacentHTML('beforebegin',tpl);
        }else if(type == 'append'){
            target.insertAdjacentHTML('beforeend',tpl);
        }else{
            target.innerHTML = tpl;
        }
    }
}

class ElementCheckbox extends ElementsComponents implements ElementsHTML,InputTypes,CheckboxTypes
{
    constructor(target: string | null = null) {
        super(target);
    }

    private getElementTemplate(value : string | null): string {
        const attr = this.createAttribute();
        return String.raw`<input type="checkbox" ${attr} value="${value ?? ''}" />`;
    }

    render(value : ListDataTypes[], template : Template | null) : string
    {
        const self = this;
        value.forEach(item => {
            item.value = self.getElementTemplate(item.value);
        });
        const tpl = String.raw`
        ${value.map(item => `
            ${template ? template.render(item) : `${item.value}`}
        `).join('')}`;

    return tpl;
    }

    html(value : ListDataTypes[], template : Template | null): this{
        const self = this;
        if(value != null && Array.isArray(value)){
            this.printHTML(this.target!, this.insertMode, self.render(value, template));
            return this;
        }
    return this;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        const el = this.selectorAll('.') as HTMLInputElement[];
        el.forEach(ele=>
            ele.addEventListener(eventName, (event) => {
                const _el = event.target as HTMLInputElement;
                callback(_el,_el.value);
            })
        );
    return this;
    }

    val () : any[]
    {
        const data : any[] = [];
        const el = this.selectorAll('.') as HTMLInputElement[];
        for (let i = 0; i < el.length; i++) {
            if (el[i].checked) {
                data.push(el[i].value);
            }
        }
    return data;
    }

    protected selectorAll( select_idname : string): HTMLInputElement | HTMLInputElement[] | null {
        let el: HTMLInputElement | HTMLInputElement[] | null = null;

        if (this.insertMode === 'inner') {
            if (select_idname == '#' && this.selectorAttr.id) {
                el = this.target?.querySelector(this.selectorAttr.id) as HTMLInputElement | null;
            } else if (this.selectorAttr.name) {
                el = Array.from(this.target!.querySelectorAll(`[name="${this.selectorAttr.name}"]`)) as HTMLInputElement[];
            }
        } else {
            if (select_idname == '#' && this.selectorAttr.id) {
                el = document.querySelector(this.selectorAttr.id) as HTMLInputElement | null;
            } else if (this.selectorAttr.name) {
                el = Array.from(this.target!.querySelectorAll(`[name="${this.selectorAttr.name}"]`)) as HTMLInputElement[];
            }
        }

        return el;
    }

    checked(value: any[]): this {
        const el = this.selectorAll('.') as HTMLInputElement[];
        for (let i = 0; i < el.length; i++) {
            const found = value.find((element) => element == el[i].value);
            if (found !== 'undefined') {
                el[i].checked = true;
            }
        }
    return this;
    }
}

class ElementRadio extends ElementsComponents implements ElementsHTML,InputTypes,RadioTypes 
{
    constructor(target: string | null = null) {
        super(target);
    }

    private getElementTemplate(value : string | null): string {
        const attr = this.createAttribute();
        return String.raw`<input type="radio" ${attr} value="${value ?? ''}" />`;
    }

    render(value : ListDataTypes[], template : Template | null) : string 
    {
        const self = this;
        value.forEach(item => {
            item.value = self.getElementTemplate(item.value);
        });
        const tpl = String.raw`
        ${value.map(item => `
            ${template ? template.render(item) : `${item.value}`}
        `).join('')}`;

    return tpl;
    }

    html(value : ListDataTypes[], template : Template | null): this{
        const self = this;
        if(value != null && Array.isArray(value)){
            this.printHTML(this.target!, this.insertMode, self.render(value, template));
            return this;
        }
    return this;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        const el = this.selectorAll('.') as HTMLInputElement[];
        el.forEach(ele=>
            ele.addEventListener(eventName, (event) => {
                const _el = event.target as HTMLInputElement;
                callback(_el,_el.value);
            })
        );
    return this;
    }

    val () : string
    {
        const el = this.selectorAll('#') as HTMLInputElement;
        return el ? el.value : '';
    }

    protected selectorAll( select_idname : string): HTMLInputElement | HTMLInputElement[] | null {
        let el: HTMLInputElement | HTMLInputElement[] | null = null;

        if (this.insertMode === 'inner') {
            if (select_idname == '#' && this.selectorAttr.id) {
                el = this.target?.querySelector(this.selectorAttr.id) as HTMLInputElement | null;
            } else if (this.selectorAttr.name) {
                el = Array.from(this.target!.querySelectorAll(`[name="${this.selectorAttr.name}"]`)) as HTMLInputElement[];
            }
        } else {
            if (select_idname == '#' && this.selectorAttr.id) {
                el = document.querySelector(this.selectorAttr.id) as HTMLInputElement | null;
            } else if (this.selectorAttr.name) {
                el = Array.from(this.target!.querySelectorAll(`[name="${this.selectorAttr.name}"]`)) as HTMLInputElement[];
            }
        }

        return el;
    }

    checked(value: any): this {
        const el = this.selectorAll('.') as HTMLInputElement[];
        for (let i = 0; i < el.length; i++) {
            if (el[i].value == value) {
                el[i].checked = true;
                break;
            }
        }
    return this;
    }
}

class ElementSelect extends ElementsComponents implements ElementsHTML,InputTypes,SelectTypes 
{

    constructor(target: string | null = null) {
        super(target);
    }

    private getElementOptions (value : ListDataTypes[]) : string{
        let result : string = '';
        if(Array.isArray(value))
        {
            result = `${value.map(item => `
                <option value="${item.value}">${item.label}</option>
            `).join('')}`;
        }
    return result;
    }

    render(value : ListDataTypes[]) : string 
    {
        const attr = this.createAttribute();
        const tpl = String.raw`
        <select ${attr}>
            ${(Array.isArray(value)) ? this.getElementOptions(value) : ''}
        </select>`;

    return tpl;
    }

    html(value : ListDataTypes[]): this
    {
        if(value != null && Array.isArray(value))
        {
            this.printHTML(this.target!, this.insertMode, this.render(value));
            return this;
        }
    return this;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        const el = this.selector() as HTMLSelectElement;
        el?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLSelectElement;
            callback(el, el.value);
        });
    return this;
    }

    val () : string
    {
        const el = this.selector() as HTMLSelectElement;
        return el ? el.value : '';
    }

    selected(value: string): this {
        const el = this.selector() as HTMLSelectElement;
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

class ElementButton extends ElementsComponents implements ElementsHTML, InputTypes
{
    constructor(target: string | null = null) {
        super(target);
        this.type('button');
    }

    render(value : string='') : string 
    {
        const attr = this.createAttribute();
        const tpl = String.raw`<button ${attr}>${value}</button>`;

    return tpl;
    }

    html(value : string =''): this{
        this.printHTML(this.target!, this.insertMode, this.render(value));
    return this;
    }

    type (type : ButtonTypeTypes) : this {
        this.options.type = `type="${type}"`;
        return this;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        const el = this.selector() as HTMLInputElement;
        el?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLInputElement;
            callback(el, el.value);
        });
    return this;
    }

    val (data : string | null = null) : string | void
    {
        const el = this.selector() as HTMLInputElement;
        if (data == null){
            return el ? el.innerHTML : '';
        }else if(typeof data ==='string'){
            el!.innerHTML = data;
            return;
        }
    }
}

class ElementInput extends ElementsComponents implements ElementsHTML, InputTypes
{
    constructor(target: string | null = null) {
        super(target);
        this.type('text');
    }

    render(value : string = '') : string 
    {
        const attr = this.createAttribute();
        const tpl = String.raw`<input ${attr} value="${value}" />`;

    return tpl;
    }

    html(value : string = ''): this{
        this.printHTML(this.target!, this.insertMode, this.render(value));
    return this;
    }

    type (type : InputTypeTypes) : this {
        this.options.type = `type="${type}"`;
        return this;
    }

    placeholder (comment : string) : this 
    {
        this.options.placeholder = `placeholder="${comment}"`;
        return this;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        const el = this.selector() as HTMLInputElement;
        el?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLInputElement;
            callback(el, el.value);
        });
    return this;
    }

    val (data : string | null = null) : string | void
    {
        const el = this.selector() as HTMLInputElement;
        if (data == null){
            return el ? el.value : '';
        }else if(typeof data ==='string'){
            el!.value = data;
            return;
        }
    }
}

class ElementTextArea extends ElementsComponents implements ElementsHTML, InputTypes
{
    constructor(target: string | null = null) {
        super(target)
    }

    render(value : string = '') : string 
    {
        const attr = this.createAttribute();
        const tpl = String.raw`<textarea ${attr}>${value?? ''}</textarea>`;

    return tpl;
    }

    placeholder (comment : string) : this 
    {
        this.options.placeholder = `placeholder="${comment}"`;
        return this;
    }

    html(value : string =''): this{
        this.printHTML(this.target!, this.insertMode, this.render(value));
    return this;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        const el = this.selector() as HTMLTextAreaElement;
        el?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLTextAreaElement;
            callback(el, el.value);
        });
    return this;
    }

    val (data : string | null = null) : string | void
    {
        const el = this.selector() as HTMLTextAreaElement;
        if (data == null){
            return el ? el.value : '';
        }else if(typeof data ==='string'){
            el!.value = data;
            return;
        }
    }
}

class ElementDiv extends ElementsComponents implements ElementsHTML
{
    constructor(target: string | null = null) {
        super(target)
    }

    render(value : string = '') : string 
    {
        const attr = this.createAttribute();
        const tpl = String.raw`<div ${attr}>${value}</div>`;

    return tpl;
    }

    html(value : string = ''): this{
        this.printHTML(this.target!, this.insertMode, this.render(value));
    return this;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        const el = this.selector() as HTMLDivElement;
        el?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLDivElement;
            callback(el, el.innerHTML);
        });
    return this;
    }

    val (data : string | null = null) : string | void
    {
        const el = this.target as HTMLDivElement;
        if (data == null){
            return el ? el.innerHTML : '';
        }else if(typeof data ==='string'){
            el!.innerHTML = data;
            return;
        }
    }
}

class ElementUL extends ElementsComponents implements ElementsHTML 
{
    constructor(target: string | null = null) {
        super(target)
    }

    render(value : string = '') : string 
    {
        const attr = this.createAttribute();
        const tpl = String.raw`<ul ${attr}>${value}</ul>`;

    return tpl;
    }

    html(value : string = ''): this{
        this.printHTML(this.target!, this.insertMode, this.render(value));
    return this;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        const el = this.selector() as HTMLUListElement;
        el?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLUListElement;
            callback(el, el.innerHTML);
        });
    return this;
    }

    val (data : string | null = null) : string | void
    {
        const el = this.target as HTMLUListElement;
        if (data == null){
            return el ? el.innerHTML : '';
        }else if(typeof data ==='string'){
            el!.innerHTML = data;
            return;
        }
    }
}

class ElementLi extends ElementsComponents implements ElementsHTML 
{
    constructor(target: string | null = null) {
        super(target)
    }

    render(value : string = '') : string 
    {
        const attr = this.createAttribute();
        const tpl = String.raw`<li ${attr}>${value}</li>`;

    return tpl;
    }

    html(value : string = ''): this{
        if(this.target == null){
            throw new Error('target is null');
        }
        this.printHTML(this.target!, this.insertMode, this.render(value));
    return this;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        const el = this.selector() as HTMLLIElement;
        el?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLLIElement;
            callback(el, el.innerHTML);
        });
    return this;
    }

    val (data : string | null = null) : string | void
    {
        const el = this.target as HTMLLIElement;
        if (data == null){
            return el ? el.innerHTML : '';
        }else if(typeof data ==='string'){
            el!.innerHTML = data;
            return;
        }
    }
}



export {ElementInput, ElementTextArea, ElementDiv, ElementButton, ElementSelect, ElementRadio, ElementCheckbox,ElementUL,ElementLi};