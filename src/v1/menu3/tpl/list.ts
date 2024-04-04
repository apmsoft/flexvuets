import {Template as InterfaceTemplate} from '@flexvue/types';

class Template implements InterfaceTemplate
{
    constructor(){
    }

    render(message : Record<string,any> = {}) {

        return (String.raw`
        <div class="flex flex-col">
            <div class="relative bg-dark">
                <div class="h-[200px] lg:h-[300px] bg-no-repeat bg-[length:120%_auto] relative ani-slide-bg" style="background-image:url(images/bg/bg_attach.jpg);">
                    <div class="absoute left-0 top-0 w-full h-full opacity-50 bg-black">
                    </div>

                    <div class="absolute left-0 top-0 w-full h-full text-white opacity-85">
                        <div class="w-full h-full flex flex-col space-y-2 items-center justify-center">
                            <div class="text-xs lg:text-md ani-fadeInUp2">Explore a wealth of knowledge at our Resource Center</div>
                            <div class="text-2xl lg:text-5xl font-bold ani-fadeInRight">RESOURCE CENTER</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="xl:container xl:mx-auto lg:m-h-[500px] pt-10 h-[800px]">
                <div class="flex flex-col space-y-2 px-6">

                    <!-- navi postion -->
                    <div class="flex flex-col items-stretch space-y-2 text-center justify-center h-[80px] md:h-[140px]">
                        <div class="self-center text-xl md:text-4xl font-bold">자료실</div>
                        <div class="self-center text-blue-dark">Resource Center</div>
                    </div>

                    <form id="theAttachSearchForm">

                        <div class="flex flex-row space-x-2">
                            <div class="flex-1">
                                <input type="search" id="q" name="q" class="border border-gray-200 h-full w-full py-3 px-4 text-primary-color" value="" placeholder="검색어를 입력하세요">
                            </div>
                            <div class="flex-none">
                                <button type="submit" class="border border-gray-200 rounded-none h-full w-full px-4">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <p class="text-gray-400 pt-8 dark:text-gray-300 text-sm">Total : 2 , page : 1/1</p>
                    <table class="table-auto mt-1 w-full text-sm">
                        <thead>
                            <tr class="border-t-2 border-t-blue-600 border-b bg-gray-light">
                                <th class="py-2 px-3 text-left hidden md:table-cell w-[110px]">순번</th>
                                <th class="py-2 pl-3 text-left flex-grow">타이틀</th>
                                <th class="py-2 pl-3 text-left w-[110px]">등록일</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr class="border-b cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-115 attach-row" data-id="3">
                                <td class="py-2 px-3 hidden md:table-cell">2</td>
                                <td class="py-2 pl-3 hover:font-bold flex-grow">
                                    <div class="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 md:items-center">
                                        <div class="pr-3">자료실 다운로드 테스트 글입니다.</div>

                                        <div class="flex-none flex flex-row">
                                            
                                            <div class="rounded-lg px-3 py-1 bg-blue-lightd6 mr-1">
                                                <span class="font-bold text-xs text-gray-700">jpg</span>
                                            </div>
                                            
                                            <div class="rounded-lg px-3 py-1 bg-blue-lightd6 mr-1">
                                                <span class="font-bold text-xs text-gray-700">pdf</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td class="py-2 pl-3 text-gray-500 text-xs md:text-md"><small>2024-02-23 19:59</small></td>
                            </tr>
                            <tr class="border-b cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-115 attach-row" data-id="2">
                                <td class="py-2 px-3 hidden md:table-cell">1</td>
                                <td class="py-2 pl-3 hover:font-bold flex-grow">
                                    <div class="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 md:items-center">
                                        <div class="pr-3">ㅁㄴㄹㅇㅇㄴㅁ 수정</div>

                                        <div class="flex-none flex flex-row">
                                            
                                            <div class="rounded-lg px-3 py-1 bg-blue-lightd6 mr-1">
                                                <span class="font-bold text-xs text-gray-700">png</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td class="py-2 pl-3 text-gray-500 text-xs md:text-md"><small>2024-02-23 19:58</small></td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="flex items-center justify-center h-20">
                        <ul class="flex flex-row space-x-1">
                            <li class="page-link cursor-pointer btn px-2 py-1 w-10 bg-blue-default text-white" data-page="1">1</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>`
        );
    }
}
export {Template};