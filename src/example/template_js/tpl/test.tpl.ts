import {Template as InterfaceTemplate} from '@flexvue/types';

const fn = (name : string) => `####${name}<<<<`;
class Template implements InterfaceTemplate
{
    constructor(){
    }

    render(message : Record<string,any> ={}) { // 동기
        return (`
            <h3 class="mt-4 text-red-800"><IMPORT 동기 템플릿 클래스></h3>
            <p>${fn(message.name)}</p>
            <p>${message.age}</p>
            <ul>
            ${message.msg?.map((item : any) =>`
                <li>${item.name}</li>
            `).join('')}
            </ul>
        `);
    }
}
export {Template};