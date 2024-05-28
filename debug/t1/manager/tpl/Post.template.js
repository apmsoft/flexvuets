class PostView {
  constructor() {
  }
  render(message = {}) {
    return `
        <div class="flex flex-row px-3 mb-3">
            <div class="flex-none text-gray-400 cursor-pointer" onclick="history.go(-1);return false;">
                <i class="fas fa-arrow-left fa-2x"></i>
            </div>
            <div class="flex-none text-gray-400 font-bold text-2xl pl-3">
                관리자 등록
            </div>
            <div class="flex-1"> </div>
            <div class="flex-none flex item-center">
            </div>
        </div>

        <div class="card border-0 py-10 px-7">
            <div class="card py-5">
                <form id="theManagerPostForm" class="form-container">
                    <div class="form-row">
                        <div class="form-label">
                            *성명
                        </div>
                        <div class="flex-1">
                            <input type="text" id="name" name="name" class="form-input" value="" placeholder="등록자 성명">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-label">
                            *아이디
                        </div>
                        <div class="flex-1">
                            <input type="email" id="userid" name="userid" class="form-input" value="" placeholder="ex) test@test.com">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-label">
                            *비밀번호
                        </div>
                        <div class="flex-1">
                            <input type="password" id="passwd" name="passwd" class="form-input" placeholder="최소8자 및 특수문자 한글자 포함">
                        </div>
                    </div>
        
                    <div class="form-row">
                        <div class="form-label">
                            *비밀번호 확인
                        </div>
                        <div class="flex-1">
                            <input type="password" id="re_passwd" name="re_passwd" class="form-input" placeholder="최소8자 및 특수문자 한글자 포함">
                        </div>
                    </div>
        
                    <div class="form-row">
                        <div class="form-label">
                            *관리자 등급
                        </div>
                        <div class="flex-1">
                            <select name="level" id="level" class="form-select">
                                <option value="">관리자 권한을 선택하세요</option>
                                <option value="100">일반관리자</option>
                                <option value="999">최고관리자</option>
                            </select>
                        </div>
                    </div>

        
                    <div class="block">
                        <button type="submit" class="btn btn-primary py-3 w-full">등록하기</button>
                    </div>
                </form>
            </div>
        </div>
        `;
  }
}
export { PostView };