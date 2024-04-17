import {Template} from '@flexvue/types';

class TableView implements Template
{
    constructor(){
    }

    render(message : Record<string,any> = {}) {
        return (`
        <td>${message.id}</td>
        <td class="item" data-id="${message.id}">${message.title}</td>
        `
        );
    }
}
export {TableView};