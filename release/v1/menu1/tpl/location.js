class Template {
  constructor() {
  }
  render(message = {}) {
    return String.raw`
        <div class="flex flex-col">
            <div class="relative bg-dark">
                <div class="h-[200px] lg:h-[300px] bg-no-repeat bg-[length:120%_auto] relative ani-slide-bg" style="background-image:url(images/bg/bg1.jpg);">
                    <div class="absoute left-0 top-0 w-full h-full opacity-50 bg-black">
                    </div>

                    <div class="absolute left-0 top-0 w-full h-full text-white opacity-85">
                        <div class="w-full h-full flex flex-col space-y-2 items-center justify-center">
                            <div class="text-xs lg:text-md ani-fadeInUp2">Your leading business partner in innovative solutions.</div>
                            <div class="text-2xl lg:text-5xl font-bold ani-fadeInRight">COMPANY INTRODUCTION</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="xl:container xl:mx-auto lg:m-h-[500px] relative pt-10 h-[800px]">
                <ul class="absolute -top-8 left-0 w-full list-none rounded divide-x flex flex-row bg-transparent items-center h-[70px] space-x-0 shadow-lg">
                    ${R.arrays.company_menu.map((navi) => `
                    <li class="flex-1 flex text-sm lg:text-xl font-bold text-center justify-center transition duration-200 ease-in-out transform ${"location" == navi.id ? `bg-blue-default text-white scale-y-125 py-4 shadow-xl` : `bg-white py-4 hover:bg-blue-default hover:text-white hover:scale-y-125 hover:text-[150%] hover:shadow-xl`}">
                        <a href="#/menu1/${navi.id}" class="block w-full h-full">${navi.title}</a>
                    </li>
                    `).join('')}
                </ul>

                <div class="mt-12">
                    <div id="map" class="w-full h-[300px] lg:h-[500px]"></div>
                    <div class="mt-4 text-lg text-right pr-4 lg:pr-0">
                        <span class="text-gray-400 hidden md:inline-block">찾아오시는 길 : </span>000000 00 00000 000
                    </div>
                </div>

            </div>

        </div>`;
  }
}
export { Template };