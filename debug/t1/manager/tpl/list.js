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
                <button type="button" class="btn btn-sm btn-default" id="btn-remove-data">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>


        <div role="tablist" class="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Data" checked />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <div class="overflow-x-auto">
                    <table class="table table-zebra">
                        <!-- head -->
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" name="chkall" id="chkall">
                                    </label>
                                </th>
                                <th>성명</th>
                                <th>아이디</th>
                                <th>등급</th>
                                <th>최근접속시간</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${message.msg.map((item = {}) => `
                            <tr>    
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" name="chkid" value="${item.id}" />
                                    </label>
                                </th>
                                <td>${item.name}</td>
                                <td>${item.userid}</td>
                                <td>${item.level == '999' ? `최고관리자` : `일반관리자`}</td>
                                <td>${item.recently_connect_date}</td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-default btn-edit data-id="${item.id}">
                                        <i class="far fa-edit"></i>
                                    </button>
                                </td>
                            </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `;
  }
}
export { Template };