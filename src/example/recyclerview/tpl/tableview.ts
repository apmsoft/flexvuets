import {Template} from '@flexvue/types';

class TableView implements Template
{
    constructor(){
    }

    render(message : Record<string,any> = {}) {

        return (String.raw`
            <th>${message.id}</th>
            <td class="item font-bold cursor-pointer" data-id="${message.id}">${message.title}</td>
            <td>${message.gid}</td>
            <td>
                <button type="button" class="btn-edit btn btn-primary" data-id="${message.id}">Edit</button>
            </td>
        `
        );
    }
}
export {TableView};