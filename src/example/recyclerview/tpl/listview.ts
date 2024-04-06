import {Template} from '@flexvue/types';

class ListView implements Template
{
    constructor(){
    }

    render(message : Record<string,any> = {}) {

        return (String.raw`<div class="item border" data-id="${message.id}">
        <span>${message.id}</span>: <span class="item-text"> ${message.title}</span>
    </div>`
        );
    }
}
export {ListView};