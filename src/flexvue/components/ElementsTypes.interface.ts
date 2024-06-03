import {Template} from '@flexvue/types';
type HtmlPrintTypes = 'inner' | 'prepend' | 'append';
type ClassListTypes = 'add' | 'remove';
interface EventListeners{
    addEventListener (eventName : string, callback: (element: HTMLElement, value : any) => void) : this;
}

interface Attribute {
    attr(name:string, value:string): this;
    rmAttr(name:string): this;
}

interface InputTypes {
    val (data : any) : any;
}

interface RadioTypes {
    checked(value: any): void;
}

interface SelectorAttrTypes {
    id? : string;
    name? : string;
}

interface SelectTypes {
    selected(value: any): void;
}

interface CheckboxTypes {
    checked(value: any): void;
}

interface ListDataTypes {
    value : any;
    label : string;
}

type InputTypeTypes = 'text'|'password'|'range'|'email'|'tel'|'search'|'number'|'color'|'date'|'datetime-local'|'week'|'time'|'hidden'|'url'|'file';
type ButtonTypeTypes = 'submit'|'button'|'reset';

interface DefaultTypes {
    className? : string;
    id? : string;
    name? : string;
    disabled? : string;
    readonly? : string;
    datasets? : string;
}

interface InputHtmlTypes extends DefaultTypes {
    type? : string;
    placeholder? : string;
    min? : string;
    max? : string;
}

interface CheckboxRadioHtmlTypes extends DefaultTypes {
    type? : string;
    placeholder? : string;
}
interface ButtonHtmlTypes extends DefaultTypes {
    type? : string;
}

interface TextAreaHtmlTypes extends DefaultTypes {
    placeholder? : string;
}

interface DatasetTypes {
    [key : string] : any
}

export {
    DefaultTypes,CheckboxRadioHtmlTypes,ButtonHtmlTypes,TextAreaHtmlTypes,
    DatasetTypes,Attribute,
    HtmlPrintTypes,
    InputTypes,
    InputHtmlTypes,
    EventListeners,
    RadioTypes,
    CheckboxTypes,
    SelectTypes,
    SelectorAttrTypes,
    ButtonTypeTypes,
    InputTypeTypes,
    ListDataTypes,ClassListTypes
};