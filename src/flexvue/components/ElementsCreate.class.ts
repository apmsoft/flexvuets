import {Template} from '@flexvue/types';
import {ElementsAttributeOptions} from '@flexvue/elements/attrs';

import {
    DefaultTypes,CheckboxRadioHtmlTypes,ButtonHtmlTypes,TextAreaHtmlTypes,
    DatasetTypes,
    ButtonTypeTypes,
    InputTypeTypes,
    InputHtmlTypes,
    ListDataTypes,
    SelectorAttrTypes
} from '@flexvue/elements/types';


class CreateComponents <T extends DefaultTypes> extends ElementsAttributeOptions<T>{
    protected attributeTemplate = '';
    protected datasets : [DatasetTypes];
    protected selectorAttr : SelectorAttrTypes;

    constructor(data: T = {} as T) {
        super(data)
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
        value.forEach((obj) => {
            Object.entries(obj).forEach(([key, value]) => {
                dataset_data += `dataset-${key}="${value}" `;
            });
        });
        this.options.datasets = (dataset_data) ? dataset_data.trim() : '';
        return this;
    }

    protected createAttribute () : string {
        let attr : string = '';
        Object.entries(this.options).forEach(([k, v])=>{
            if(v){
                attr += `${v} `;
            }
        });
        // const attr = String.raw`${this.options.type} ${this.options.id} ${this.options.name} ${this.options.min} ${this.options.max} ${this.options.datasets} ${this.options.readonly} ${this.options.disabled} ${this.options.className}`;
        return attr.replace(/\s+/g,' ');
    }
}

class CreateElCheckbox extends CreateComponents<CheckboxRadioHtmlTypes>
{
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

    private getElementTemplate(value : string | null): string {
        const attr = this.createAttribute();
        return String.raw`<input ${attr} value="${value ?? ''}" />`;
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
}

class CreateElRadio extends CreateComponents<CheckboxRadioHtmlTypes>
{
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

    private getElementTemplate(value : string | null): string {
        const attr = this.createAttribute();
        return String.raw`<input ${attr} value="${value ?? ''}" />`;
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
}

class CreateElSelect extends CreateComponents<DefaultTypes>
{

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
}

class CreateElButton extends CreateComponents<ButtonHtmlTypes>
{
    constructor() {
        super({
            type : 'type="button"',
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        });
        this.type('button');
    }

    render(value : string='') : string 
    {
        const attr = this.createAttribute();
        const tpl = String.raw`<button ${attr}>${value}</button>`;

    return tpl;
    }

    type (type : ButtonTypeTypes) : this {
        this.options.type = `type="${type}"`;
        return this;
    }
}

class CreateElInput extends CreateComponents<InputHtmlTypes>
{
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

    render(value : string = '') : string 
    {
        const attr = this.createAttribute();
        const tpl = String.raw`<input ${attr} value="${value}" />`;

    return tpl;
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

    min(min : string | number) : this {
        this.options.min = `min="${min}"`;
        return this;
    }

    max(max : string | number) : this {
        this.options.max = `max="${max}"`;
        return this;
    }
}

class CreateElTextArea extends CreateComponents<TextAreaHtmlTypes>
{
    constructor() {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: '',
            placeholder : ''
        })
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
}

class CreateElDiv extends CreateComponents<DefaultTypes>
{
    constructor() {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        })
    }

    render(value : string = '') : string 
    {
        const attr = this.createAttribute();
        const tpl = String.raw`<div ${attr}>${value}</div>`;

    return tpl;
    }
}

class CreateElUL extends CreateComponents<DefaultTypes>
{
    constructor() {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        })
    }

    render(value : string = '') : string 
    {
        const attr = this.createAttribute();
        const tpl = String.raw`<ul ${attr}>${value}</ul>`;

    return tpl;
    }
}

class CreateElLi extends CreateComponents<DefaultTypes>
{
    constructor() {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        })
    }

    render(value : string = '') : string 
    {
        const attr = this.createAttribute();
        const tpl = String.raw`<li ${attr}>${value}</li>`;

    return tpl;
    }
}



export {CreateElInput, CreateElTextArea, CreateElDiv, CreateElButton, CreateElSelect, CreateElRadio, CreateElCheckbox,CreateElUL,CreateElLi};