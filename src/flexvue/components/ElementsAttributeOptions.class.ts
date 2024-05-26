import {DefaultTypes} from '@flexvue/elements/types';

class ElementsAttributeOptions<T extends DefaultTypes> {
    options: T;

    constructor(data: T = {} as T) {
        this.options = data;
    }
}

export {ElementsAttributeOptions};