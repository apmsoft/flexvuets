import {ElementsAttributeOptions} from '@flexvue/elements/attrs';
import {
    DefaultTypes,CheckboxRadioHtmlTypes,ButtonHtmlTypes,TextAreaHtmlTypes,
    DatasetTypes,Attribute,
    HtmlPrintTypes,
    InputTypes,
    InputHtmlTypes,
    EventListeners,
    RadioTypes,
    CheckboxTypes,
    SelectTypes,
    SelectorAttrTypes,ClassListTypes
} from '@flexvue/elements/types';

class ElementsComponents <T extends DefaultTypes> extends ElementsAttributeOptions<T>{
    protected insertMode : string = 'inner';
    protected attributeTemplate = '';
    protected datasets : [DatasetTypes];
    protected selectorAttr : SelectorAttrTypes;

    constructor(data: T = {} as T) {
        super(data)
        this.selectorAttr = {};
        this.datasets = [{}];
    }

    protected printHTML (target : HTMLElement, type : string, tpl : string) : void {
        if(type == 'prepend'){
            type = 'beforebegin';
        }else if(type == 'append'){
            type = 'beforeend';
        }

        let _type : InsertPosition = type as InsertPosition;
        if(type == 'inner'){
            target.innerHTML = tpl;
        }else{
            target.insertAdjacentHTML(_type,tpl);
        }
    }
}

class ElementCheckbox extends ElementsComponents<CheckboxRadioHtmlTypes> implements EventListeners,InputTypes,CheckboxTypes
{
    private target : HTMLInputElement[];

    constructor(target: string) {
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
        this.target = Array.from(document.querySelectorAll<HTMLInputElement>(`input[name="${target}"]`));
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        this.target.forEach(ele=>
            ele.addEventListener(eventName, (event) => {
                const _el = event.target as HTMLInputElement;
                callback(_el,_el.value);
            })
        );
    return this;
    }

    val () : string[]
    {
        const data : string[] = [];
        for (let i = 0; i < this.target.length; i++) {
            if (this.target[i].checked) {
                data.push(this.target[i].value);
            }
        }
    return data;
    }

    checked(value: any[]): this {
        for (let i = 0; i < this.target.length; i++) {
            const found = value.find((element) => element == this.target[i].value);
            if (found !== 'undefined') {
                this.target[i].checked = true;
            }
        }
    return this;
    }

    get () : HTMLInputElement[] {
        return this.target;
    }

    classList(mode:ClassListTypes, classNames:string, value : string | null = null) : this {
        if (classNames.trim()) 
        {
            const hasWhitespace = /\s/.test(classNames);
            if(hasWhitespace)
            {
                for (let i = 0; i < this.target.length; i++) 
                {
                    if(value != null && value == this.target[i].value){
                        classNames.split(' ').forEach(cls => {
                            if(mode == 'add') this.target[i].classList.add(cls.trim());
                            else this.target[i].classList.remove(cls.trim());
                        });
                        break;
                    }else{
                        classNames.split(' ').forEach(cls => {
                            if(mode == 'add') this.target[i].classList.add(cls.trim());
                            else this.target[i].classList.remove(cls.trim());
                        });
                    }
                }
            }else{
                for (let i = 0; i < this.target.length; i++) 
                {
                    if(value != null && value == this.target[i].value){
                        classNames.split(' ').forEach(cls => {
                            if(mode == 'add') this.target[i].classList.add(classNames.trim());
                            else this.target[i].classList.remove(classNames.trim());
                        });
                        break;
                    }else{
                        classNames.split(' ').forEach(cls => {
                            if(mode == 'add') this.target[i].classList.add(classNames.trim());
                            else this.target[i].classList.remove(classNames.trim());
                        });
                    }
                }
            }
        }
    return this;
    }

    contains(className: string, value: string | null = null) : boolean {
        let result = false;
        for (let i = 0; i < this.target.length; i++) {
            if(value != null && this.target[i].value == value){
                if(this.target[i].classList.contains(className)){
                    result = true;
                    break;
                }
            }else {
                if(this.target[i].classList.contains(className)){
                    result = true;
                    break;
                }
            }
        }
    return result;
    }
}

class ElementRadio extends ElementsComponents<CheckboxRadioHtmlTypes> implements EventListeners,InputTypes,RadioTypes 
{
    private target : HTMLInputElement[];

    constructor(target: string ) {
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
        this.target = Array.from(document.querySelectorAll<HTMLInputElement>(`input[name="${target}"]`));
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        this.target.forEach(ele=>
            ele.addEventListener(eventName, (event) => {
                const _el = event.target as HTMLInputElement;
                callback(_el,_el.value);
            })
        );
    return this;
    }

    val () : string
    {
        let result : string = '';
        for (let i = 0; i < this.target.length; i++) {
            if (this.target[i].checked) {
                result = this.target[i].value;
                break;
            }
        }
        return result;
    }

    checked(value: any): this {
        for (let i = 0; i < this.target.length; i++) {
            if (this.target[i].value == value) {
                this.target[i].checked = true;
                break;
            }
        }
    return this;
    }

    get () : HTMLInputElement[] {
        return this.target;
    }

    classList(mode:ClassListTypes, classNames:string, value : string | null = null) : this {
        if (classNames.trim()) 
        {
            const hasWhitespace = /\s/.test(classNames);
            if(hasWhitespace)
            {
                for (let i = 0; i < this.target.length; i++) 
                {
                    if(value != null && value == this.target[i].value){
                        classNames.split(' ').forEach(cls => {
                            if(mode == 'add') this.target[i].classList.add(cls.trim());
                            else this.target[i].classList.remove(cls.trim());
                        });
                        break;
                    }else{
                        classNames.split(' ').forEach(cls => {
                            if(mode == 'add') this.target[i].classList.add(cls.trim());
                            else this.target[i].classList.remove(cls.trim());
                        });
                    }
                }
            }else{
                for (let i = 0; i < this.target.length; i++) 
                {
                    if(value != null && value == this.target[i].value){
                        classNames.split(' ').forEach(cls => {
                            if(mode == 'add') this.target[i].classList.add(classNames.trim());
                            else this.target[i].classList.remove(classNames.trim());
                        });
                        break;
                    }else{
                        classNames.split(' ').forEach(cls => {
                            if(mode == 'add') this.target[i].classList.add(classNames.trim());
                            else this.target[i].classList.remove(classNames.trim());
                        });
                    }
                }
            }
        }
    return this;
    }

    contains(className: string, value: string | null = null) : boolean {
        let result = false;
        for (let i = 0; i < this.target.length; i++) {
            if(value != null && this.target[i].value == value){
                if(this.target[i].classList.contains(className)){
                    result = true;
                    break;
                }
            }else {
                if(this.target[i].classList.contains(className)){
                    result = true;
                    break;
                }
            }
        }
    return result;
    }
}

class ElementSelect extends ElementsComponents<DefaultTypes> implements Attribute,EventListeners,InputTypes,SelectTypes 
{
    private target : HTMLSelectElement;

    constructor(target: string) {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        });
        this.target = document.querySelector<HTMLSelectElement>(target)!;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        this.target?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLSelectElement;
            callback(el, el.value);
        });
    return this;
    }

    val () : string
    {
        return this.target.value;
    }

    selected(value: string): this {
        const selectEl = this.target.options;
        for (let i = 0; i < selectEl.length; i++) {
            if (selectEl[i].value == value) {
                selectEl[i].selected = true;
                break;
            }
        }
    return this;
    }

    attr(name:string, value:string) : this {
        this.target.setAttribute(name, value);
    return this;
    }

    rmAttr(name:string) : this {
        this.target.removeAttribute(name);
    return this;
    }

    get () : HTMLSelectElement {
        return this.target;
    }

    classList(mode:ClassListTypes, classNames:string) : this {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if(hasWhitespace){
                classNames.split(' ').forEach(cls => {
                    if(mode == 'add') this.target.classList.add(cls.trim());
                    else this.target.classList.remove(cls.trim());
                });
            }else{
                if(mode == 'add') this.target.classList.add(classNames.trim());
                else this.target.classList.remove(classNames.trim());
            }
        }
    return this;
    }

    contains(className: string) : boolean {
        return this.target.classList.contains(className);
    }
}

class ElementButton extends ElementsComponents<ButtonHtmlTypes> implements Attribute,EventListeners, InputTypes
{
    private target : HTMLButtonElement;

    constructor(target: string) {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        });

        this.target = document.querySelector<HTMLButtonElement>(target)!;
    }

    html(data : string): this{
        this.printHTML(this.target!, this.insertMode, data);
    return this;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        this.target?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLInputElement;
            callback(el, el.value);
        });
    return this;
    }

    val (data : string | null = null) : string | void
    {
        if (data == null){
            return this.target.innerHTML;
        }else if(typeof data ==='string'){
            this.target.innerHTML = data;
            return;
        }
    }

    attr(name:string, value:string) : this {
        this.target.setAttribute(name, value);
    return this;
    }

    rmAttr(name:string) : this {
        this.target.removeAttribute(name);
    return this;
    }

    get () : HTMLButtonElement {
        return this.target;
    }

    classList(mode:ClassListTypes, classNames:string) : this {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if(hasWhitespace){
                classNames.split(' ').forEach(cls => {
                    if(mode == 'add') this.target.classList.add(cls.trim());
                    else this.target.classList.remove(cls.trim());
                });
            }else{
                if(mode == 'add') this.target.classList.add(classNames.trim());
                else this.target.classList.remove(classNames.trim());
            }
        }
    return this;
    }

    contains(className: string) : boolean {
        return this.target.classList.contains(className);
    }
}

class ElementImage extends ElementsComponents<ButtonHtmlTypes> implements Attribute,EventListeners, InputTypes
{
    private target : HTMLImageElement;

    constructor(target: string) {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        });

        this.target = document.querySelector<HTMLImageElement>(target)!;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        this.target?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLImageElement;
            callback(el, el.src);
        });
    return this;
    }

    val (data : string | null = null) : string | void
    {
        if (data == null){
            return this.target.src;
        }else if(typeof data ==='string'){
            this.target.src = data;
            return;
        }
    }

    attr(name:string, value:string) : this {
        this.target.setAttribute(name, value);
    return this;
    }

    rmAttr(name:string) : this {
        this.target.removeAttribute(name);
    return this;
    }

    get () : HTMLImageElement {
        return this.target;
    }

    classList(mode:ClassListTypes, classNames:string) : this {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if(hasWhitespace){
                classNames.split(' ').forEach(cls => {
                    if(mode == 'add') this.target.classList.add(cls.trim());
                    else this.target.classList.remove(cls.trim());
                });
            }else{
                if(mode == 'add') this.target.classList.add(classNames.trim());
                else this.target.classList.remove(classNames.trim());
            }
        }
    return this;
    }

    contains(className: string) : boolean {
        return this.target.classList.contains(className);
    }
}

class ElementInput extends ElementsComponents<InputHtmlTypes> implements Attribute,EventListeners, InputTypes
{
    private target : HTMLInputElement;

    constructor(target: string) {
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

        this.target = document.querySelector<HTMLInputElement>(target)!;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        this.target?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLInputElement;
            callback(el, el.value);
        });
    return this;
    }

    val (data : string | null = null) : string | void
    {
        if (data == null){
            return this.target.value;
        }else if(typeof data ==='string'){
            this.target.value = data;
            return;
        }
    }

    attr(name:string, value:string) : this {
        this.target.setAttribute(name, value);
    return this;
    }

    rmAttr(name:string) : this {
        this.target.removeAttribute(name);
    return this;
    }

    get () : HTMLInputElement {
        return this.target;
    }

    classList(mode:ClassListTypes, classNames:string) : this {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if(hasWhitespace){
                classNames.split(' ').forEach(cls => {
                    if(mode == 'add') this.target.classList.add(cls.trim());
                    else this.target.classList.remove(cls.trim());
                });
            }else{
                if(mode == 'add') this.target.classList.add(classNames.trim());
                else this.target.classList.remove(classNames.trim());
            }
        }
    return this;
    }

    contains(className: string) : boolean {
        return this.target.classList.contains(className);
    }
}

class ElementTextArea extends ElementsComponents<TextAreaHtmlTypes> implements Attribute,EventListeners, InputTypes
{
    private target : HTMLTextAreaElement;

    constructor(target: string) {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: '',
            placeholder : ''
        });

        this.target = document.querySelector<HTMLTextAreaElement>(target)!;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        this.target?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLTextAreaElement;
            callback(el, el.value);
        });
    return this;
    }

    val (data : string | null = null) : string | void
    {
        if (data == null){
            return this.target.value;
        }else if(typeof data ==='string'){
            this.target.value = data;
            return;
        }
    }

    attr(name:string, value:string) : this {
        this.target.setAttribute(name, value);
    return this;
    }

    rmAttr(name:string) : this {
        this.target.removeAttribute(name);
    return this;
    }

    get () : HTMLTextAreaElement {
        return this.target;
    }

    classList(mode:ClassListTypes, classNames:string) : this {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if(hasWhitespace){
                classNames.split(' ').forEach(cls => {
                    if(mode == 'add') this.target.classList.add(cls.trim());
                    else this.target.classList.remove(cls.trim());
                });
            }else{
                if(mode == 'add') this.target.classList.add(classNames.trim());
                else this.target.classList.remove(classNames.trim());
            }
        }
    return this;
    }

    contains(className: string) : boolean {
        return this.target.classList.contains(className);
    }
}

class ElementDiv extends ElementsComponents<DefaultTypes> implements Attribute,EventListeners
{
    private target : HTMLDivElement;

    constructor(target: string) {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        });

        this.target = document.querySelector<HTMLDivElement>(target)!;
    }

    html(data : string): this{
        this.printHTML(this.target!, this.insertMode, data);
    return this;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        this.target?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLDivElement;
            callback(el, el.innerHTML);
        });
    return this;
    }

    get () : HTMLDivElement {
        return this.target;
    }

    val (data : string | null = null) : string | void
    {
        if (data == null){
            return this.target.innerHTML;
        }else if(typeof data ==='string'){
            this.target.innerHTML = data;
            return;
        }
    }

    insert (type : HtmlPrintTypes = 'inner') : this{
        this.insertMode = type;
        return this;
    }

    attr(name:string, value:string) : this {
        this.target.setAttribute(name, value);
    return this;
    }

    rmAttr(name:string) : this {
        this.target.removeAttribute(name);
    return this;
    }

    style(property: string, value: string): this {
        (this.target.style as any)[property] = value;
        return this;
    }

    classList(mode:ClassListTypes, classNames:string) : this {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if(hasWhitespace){
                classNames.split(' ').forEach(cls => {
                    if(mode == 'add') this.target.classList.add(cls.trim());
                    else this.target.classList.remove(cls.trim());
                });
            }else{
                if(mode == 'add') this.target.classList.add(classNames.trim());
                else this.target.classList.remove(classNames.trim());
            }
        }
    return this;
    }

    contains(className: string) : boolean {
        return this.target.classList.contains(className);
    }
}

class ElementUL extends ElementsComponents<DefaultTypes> implements Attribute,EventListeners 
{
    private target : HTMLUListElement;

    constructor(target: string) {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        });

        this.target = document.querySelector<HTMLUListElement>(target)!;
    }

    html(data : string): this{
        this.printHTML(this.target!, this.insertMode, data);
    return this;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        this.target?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLUListElement;
            callback(el, el.innerHTML);
        });
    return this;
    }

    val (data : string | null = null) : string | void
    {
        if (data == null){
            return this.target.innerHTML;
        }else if(typeof data ==='string'){
            this.target.innerHTML = data;
            return;
        }
    }

    insert (type : HtmlPrintTypes = 'inner') : this{
        this.insertMode = type;
        return this;
    }

    attr(name:string, value:string) : this {
        this.target.setAttribute(name, value);
    return this;
    }

    rmAttr(name:string) : this {
        this.target.removeAttribute(name);
    return this;
    }

    style(property: string, value: string): this {
        (this.target.style as any)[property] = value;
        return this;
    }

    classList(mode:ClassListTypes, classNames:string) : this {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if(hasWhitespace){
                classNames.split(' ').forEach(cls => {
                    if(mode == 'add') this.target.classList.add(cls.trim());
                    else this.target.classList.remove(cls.trim());
                });
            }else{
                if(mode == 'add') this.target.classList.add(classNames.trim());
                else this.target.classList.remove(classNames.trim());
            }
        }
    return this;
    }

    contains(className: string) : boolean {
        return this.target.classList.contains(className);
    }

    get () : HTMLUListElement {
        return this.target;
    }
}

class ElementLi extends ElementsComponents<DefaultTypes> implements Attribute,EventListeners 
{
    private target : HTMLLIElement;

    constructor(target: string) {
        super({
            className: '',
            id: '',
            name: '',
            disabled: '',
            readonly: '',
            datasets: ''
        });

        this.target = document.querySelector<HTMLLIElement>(target)!;
    }

    html(data : string): this{
        this.printHTML(this.target!, this.insertMode, data);
    return this;
    }

    addEventListener(eventName: string, callback: (element: HTMLElement, value: any) => void): this {
        this.target?.addEventListener(eventName, (event) => {
            const el = event.target as HTMLLIElement;
            callback(el, el.innerHTML);
        });
    return this;
    }

    val (data : string | null = null) : string | void
    {
        if (data == null){
            return this.target.innerHTML;
        }else if(typeof data ==='string'){
            this.target.innerHTML = data;
            return;
        }
    }

    insert (type : HtmlPrintTypes = 'inner') : this{
        this.insertMode = type;
        return this;
    }

    attr(name:string, value:string) : this {
        this.target.setAttribute(name, value);
    return this;
    }

    rmAttr(name:string) : this {
        this.target.removeAttribute(name);
    return this;
    }

    classList(mode:ClassListTypes, classNames:string) : this {
        if (classNames.trim()) {
            const hasWhitespace = /\s/.test(classNames);
            if(hasWhitespace){
                classNames.split(' ').forEach(cls => {
                    if(mode == 'add') this.target.classList.add(cls.trim());
                    else this.target.classList.remove(cls.trim());
                });
            }else{
                if(mode == 'add') this.target.classList.add(classNames.trim());
                else this.target.classList.remove(classNames.trim());
            }
        }
    return this;
    }

    contains(className: string) : boolean {
        return this.target.classList.contains(className);
    }

    style(property: string, value: string): this {
        (this.target.style as any)[property] = value;
        return this;
    }

    get () : HTMLLIElement {
        return this.target;
    }
}

class ElementQuery {
    private target : HTMLElement | null;

    constructor(target: string | null = null) {
        this.target = target ? document.querySelector<HTMLElement>(target)! : null;
    }

    get () : HTMLElement | null {
        return this.target;
    }

    each(selector: string, callback: (element: HTMLElement) => void): this {
        if (this.target) {
            const elements = this.target.querySelectorAll<HTMLElement>(selector);
            elements.forEach(callback);
        }else{
            const elements = document.querySelectorAll<HTMLElement>(selector);
            elements.forEach(callback);
        }
        return this;
    }
}

export {
    ElementsComponents,ElementInput, ElementTextArea, 
    ElementDiv, ElementButton, ElementSelect, 
    ElementRadio, ElementCheckbox,ElementUL,
    ElementLi,ElementQuery,ElementImage
};