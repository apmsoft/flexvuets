class Template {
  constructor() {
  }
  render(message = {}) {
    return `
        <div class="flex flex-row justify-between mb-5">
            <div>
                <h3>관리자 목록</h3>
            </div>
            <div class="pr-3">
                <button type="button" class="text-gray-400 hover:text-blue-dark px-3 focus:outline-none" id="btn-remove-data">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>

        <div class="card w-full rounded-lg px-5 py-5 shadow-lg">
            <table class="table-fixed lg:table-auto w-full">
                <thead>
                    <tr class="text-gray-dark border-b border-gray-200 dark:border-gray-500 bg-gray-50 dark:bg-gray-500 dark:text-gray-300">
                        <th class="py-3 px-2"><input type="checkbox" name="chkall" id="chkall"></th>
                        <th class="py-3 px-2">성명</th>
                        <th class="py-3 px-2">아이디</th>
                        <th class="py-3 px-2">등급</th>
                        <th class="py-3 px-2">최근접속시간</th>
                        <th class="py-3 px-2"></th>
                    </tr>
                </thead>
                <tbody>
                    ${message.msg.map((item = {}) => `
                    <tr class="border-b border-gray-100 dark:border-gray-600 hover:bg-gray-light dark:hover:bg-gray-800 text-gray-default dark:text-gray-300 text-center">
                        <td class="py-2 px-2"><input type="checkbox" name="chkid" value="${item.id}" /></td>
                        <td class="py-2 px-2">${item.name}</td>
                        <td class="py-2 px-2">${item.userid}</td>
                        <td class="py-2 px-2">${item.level == '999' ? `최고관리자` : `일반관리자`}</td>
                        <td class="py-2 px-2">${item.recently_connect_date}</td>
                        <td class="py-2 px-2">
                            <button type="button" class="btn px-2 py-1 btn-edit hover:bg-blue-dark hover:text-white" data-id="${item.id}">
                                <i class="far fa-edit"></i>
                            </button>
                        </td>
                    </tr>`).join('')}
                </tbody>
            </table>

        </div>
        `;
  }
}
export { Template };