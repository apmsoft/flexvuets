import {Template } from '@flexvue/types';
import {CreateElTextArea,CreateElInput, CreateElButton, CreateElSelect} from '@flexvue/elements/create';
class EditView implements Template
{
    constructor(){
    }

    render(message : Record<string,any>={}) {

        return (/*HTML*/`
        <div class="flex flex-row px-3 mb-3">
            <div class="flex-none cursor-pointer" onclick="history.go(-1);">
                <i class="fas fa-arrow-left fa-2x"></i>
            </div>
            <div class="flex-none font-bold text-2xl pl-3">
                관리자 정보
            </div>
            <div class="flex-1"> </div>
            <div class="flex-none flex item-center">
            </div>
        </div>

        <div class="bg-base-300 rounded-box border-0 py-10 px-7">
            <div class="rounded-box py-5">
                <form id="theManagerEditForm" class="">

                    <div class="py-1 text-sm">
                        <label class="input input-bordered rounded text-xs flex flex-row space-x-2 items-center gap-2">
                            <div class="flex-none w-20">*성명</div>
                            <div class="flex-1">
                                ${new CreateElInput()
                                .id('#name')
                                .name('name')
                                .classList('border-0 w-full')
                                .placeholder('이름을 입력하세요')
                                .render('')}
                            </div>
                        </label>
                    </div>

                    <div class="py-1">
                        <label class="input input-bordered rounded text-xs flex flex-row space-x-2 items-center gap-2">
                            <div class="flex-none w-20">*아이디</div>
                            <div class="flex-1">
                                ${new CreateElInput()
                                .id('#userid')
                                .name('userid')
                                .type('email')
                                .readonly()
                                .classList('border-0 w-full')
                                .placeholder('아이디를 입력하세요')
                                .render('apmsoft@gmail.com')}
                            </div>
                        </label>
                    </div>

                    <div class="py-1">
                        <label class="input input-bordered rounded text-xs flex flex-row space-x-2 items-center gap-2">
                            <div class="flex-none w-20">*관리자 등급</div>
                            <div class="flex-1">
                                ${new CreateElSelect()
                                .id('#level')
                                .name('level')
                                .readonly()
                                .classList('select select-ghost rounded-none w-full')
                                .render([
                                    {value:'', label:'관리자 등급을 선택하세요'},
                                    {value:'100', label:'일반관리자'},
                                    {value:'999', label:'최고관리자'}
                                ])}
                            </div>
                        </label>
                    </div>

                    <div class="py-1">
                        <div class="flex flex-row space-x-2">
                            <div class="flex-1">
                                <label class="form-control rounded text-xs w-full">
                                    <div class="label">
                                        <span class="label-text text-xs">*프로젝트</span>
                                        <span class="label-text-alt"></span>
                                    </div>
                                        ${new CreateElTextArea()
                                        .id('#mymodules')
                                        .name('mymodules')
                                        .classList('textarea textarea-bordered rounded h-[100px] w-full')
                                        .placeholder('')
                                        .render('')}
                                </label>
                            </div>

                            <div class="flex-1">
                                <label class="form-control rounded text-xs w-full">
                                    <div class="label">
                                        <span class="label-text text-xs">*공유 프로젝트</span>
                                        <span class="label-text-alt"></span>
                                    </div>
                                        ${new CreateElTextArea()
                                        .id('#sharemodules')
                                        .name('sharemodules')
                                        .classList('textarea textarea-bordered rounded h-[100px] w-full')
                                        .placeholder('')
                                        .render('')}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="border mt-4 rounded-box">
                        <h5>비밀번호 변경</h5>
                        <div class="flex flex-col w-full">
                            <div class="grid card bg-base-300 rounded-box place-items-center">
                                <label class="input input-bordered w-full rounded text-xs flex flex-row space-x-2 items-center gap-2">
                                    <div class="flex-none w-20">새비밀번호</div>
                                    <div class="flex-1">
                                        ${new CreateElInput()
                                        .type('password')
                                        .id('#passwd')
                                        .name('passwd')
                                        .classList('border-0 w-full')
                                        .placeholder('최소8자 및 특수문자 한글자 포함')
                                        .render('')}
                                    </div>
                                </label>
                            </div> 
                            <div class="grid card bg-base-300 rounded-box place-items-center">
                                <label class="input input-bordered w-full rounded text-xs flex flex-row space-x-2 items-center gap-2">
                                    <div class="flex-none w-20">새비밀번호 확인</div>
                                    <div class="flex-1">
                                        ${new CreateElInput()
                                            .type('password')
                                            .id('#re_passwd')
                                            .name('re_passwd')
                                            .classList('border-0 w-full')
                                            .placeholder('최소8자 및 특수문자 한글자 포함')
                                            .render('')}
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        ${new CreateElButton()
                            .type('submit')
                            .classList('btn btn-active btn-neutral rounded py-3 w-full')
                            .dataset([{id:"button"}])
                            .render('권한 적용하기')}
                    </div>
                </form>
            </div>
        </div>
        `);
    }
}
export {EditView};