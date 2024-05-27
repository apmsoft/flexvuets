class EditView {
  constructor() {
  }
  render(message = {}) {
    const msg = message.msg;
    return /*HTML*/`
        <div class="flex flex-row px-3 mb-3">
            <div class="flex-none text-gray-400 cursor-pointer" onclick="history.go(-1);">
                <i class="fas fa-arrow-left fa-2x"></i>
            </div>
            <div class="flex-none text-gray-400 font-bold text-2xl pl-3">
                관리자 정보
            </div>
            <div class="flex-1"> </div>
            <div class="flex-none flex item-center">
            </div>
        </div>

        <div class="card border-0 py-10 px-7">
            <div class="card py-5">
                <form id="theManagerEditForm" class="form-container dark:text-gray-300">
                    <div class="form-row">
                        <div class="form-label">
                            *성명
                        </div>
                        <div class="flex-1">
                            <input type="text" id="name" name="name" class="form-input" value="${msg.name}">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-label">
                            *아이디
                        </div>
                        <div class="flex-1">
                            <input type="email" id="userid" name="userid" class="form-input" value="${msg.userid}" readonly>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-label">
                            *관리자 등급
                        </div>
                        <div class="flex-1">
                            <select name="level" id="level" class="form-select">
                                <option value="">관리자 등급</option>
                                <option value="100" ${msg.level == '100' ? `selected` : ``}>일반관리자</option>
                                <option value="999" ${msg.level == '999' ? `selected` : ``}>최고관리자</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-label">
                            *접속허용
                        </div>
                        <div class="flex-1 flex flex-col">
                            <div>모든 IP에서 접속허용</div>
                            <div class="flex">
                                <div class="flex-initial">
                                    <label class="flex items-center space-x-3 mr-5">
                                        <input type="radio" name="allow_ipall" value="y" class="form-radio" ${msg.allow_ipall == 'y' ? `checked` : ``}>
                                        <span class="text-gray-900 font-medium">허용</span>
                                    </label>
                                </div>
                                <div class="flex-initial">
                                    <label class="flex items-center space-x-3 mr-5">
                                        <input type="radio" name="allow_ipall" value="n" class="form-radio" ${msg.allow_ipall == 'n' ? `checked` : ``}>
                                        <span class="text-gray-900 font-medium">제한 허용</span>
                                    </label>
                                </div>
                            </div>
                            <div class="card flex flex-col space-y-2 mt-4">
                                <div>
                                    <div class="form-label">
                                        허용IP
                                    </div>
                                    <div class="flex-1">
                                        <input type="text" id="allow_ip" name="allow_ip1" class="form-input" value="${msg.allow_ip}">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card flex flex-col space-y-3">
                        <h4>비밀번호 변경</h4>
                        <div class="form-row">
                            <div class="form-label">
                                새비밀번호
                            </div>
                            <div class="flex-1">
                                <input type="password" id="passwd" name="passwd" class="form-input" placeholder="최소8자 및 특수문자 한글자 포함">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-label">
                                새비밀번호 확인
                            </div>
                            <div class="flex-1">
                                <input type="password" id="re_passwd" name="re_passwd" class="form-input" placeholder="최소8자 및 특수문자 한글자 포함">
                            </div>
                        </div>
                    </div>

                    <div class="block">
                        <button type="submit" class="btn btn-primary py-3 w-full">권한 적용하기</button>
                    </div>
                </form>
            </div>
        </div>
        `;
  }
}
export { EditView };