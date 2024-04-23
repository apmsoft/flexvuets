import {Template} from '@flexvue/types';

class TableView implements Template
{
    constructor(){
    }

    render(message : Record<string,any> = {}) {
        return (`
        <td class="w-auto">${message.id}</td>
        <td class="item w-auto" data-id="${message.id}">${message.title}</td>
        `
        );
    }
}
export {TableView};