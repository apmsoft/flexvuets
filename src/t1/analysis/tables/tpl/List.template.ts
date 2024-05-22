import {Template} from '@flexvue/types';

class ListView implements Template
{
    constructor(){
    }

    render(message : Record<string,any>={}) {
      const total_record = message.total_record;
      const msg : { [key: string]: any } = message.msg;
        return (`
        <div class="flex flex-row justify-between mb-5">
            <div>
                <h3>DB 전체사용비율</h3>
            </div>
            <div class="pr-3">
            </div>
        </div>

        <div class="card w-full rounded-lg bg-white px-5 py-5 shadow-lg">
            
            <table class="table-fixed lg:table-auto w-full">
                <thead>
                    <tr class="text-gray-dark border-b border-gray-200 dark:border-gray-500 bg-gray-50 dark:bg-gray-500 dark:text-gray-300">
                        <th class="py-3 px-2">T.Name</th>
                        <th class="py-3 px-2">Title</th>
                        <th class="py-3 px-2">Engine</th>
                        <th class="py-3 px-2">Update</th>
                        <th class="py-3 px-2">Total</th>
                    </tr>
                </thead>
                <tbody class="text-sm divide-y divice-gray-100">
                    ${
                    Object.entries(msg).map( ([key,value])=>`
                    <tr class="border-b border-gray-100 dark:border-gray-600 hover:bg-gray-light dark:hover:bg-gray-800 text-gray-default dark:text-gray-300 text-center">
                        <td class="py-2 px-2">${value.tname.replace('flex_','')}</td>
                        <td class="py-2 px-2">${value.table_comment}</td>
                        <td class="py-2 px-2">${value.engine}</td>
                        <td class="py-2 px-2">${value.update_time}</td>
                        <td class="py-2 px-2">
                            <div class="relative pt-1">
                                <div class="flex mb-2 items-center justify-between">
                                    <div>
                                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-800">
                                            ${value.rows}
                                        </span>
                                    </div>
                                    <div class="text-right">
                                        <span class="text-xs font-semibold inline-block text-gray-600 dark:text-gray-400">
                                            ${ Math.ceil( (value.rows / total_record)*100 ) }%
                                        </span>
                                    </div>
                                </div>
                                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-900">
                                    <div style="width:${ Math.ceil( (value.rows / total_record)*100 ) }%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${ (Math.ceil( (value.rows / total_record)*100 ) > 50) ? `bg-red-500` : 'bg-gray-500 dark:bg-blue-500'}"></div>
                                </div>
                            </div>
                        </td>
                    </tr>`
                    ).join('')}
                </tbody>
            </table>

        </div>
        `);
    }
}
export {ListView};