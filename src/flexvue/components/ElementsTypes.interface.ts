import {Template} from '@flexvue/types';
type HtmlPrintTypes = 'inner' | 'prepend' | 'append';

interface ElementsHTML{
    addEventListener (eventName : string, callback: (element: HTMLElement, value : any) => void) : this;
    html(value : any, template : Template | null): this;
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

interface DatasetTypes {
    [key : string] : any
}

export {
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
};