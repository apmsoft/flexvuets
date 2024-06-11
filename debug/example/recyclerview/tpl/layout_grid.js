class Layout {
    constructor() {
    }
    render(message = {}) {
        return (String.raw `
        <div class="fvue--layout--container">

            <div class="fvue--layout--header py-3">
                <div class="fvue--layout--header--row px-3">
                    <div class="fvue--layout--icon">

                    </div>
                    <div class="fvue--layout--title text-gray-800">
                      <a href="#">FlexVue (플렉스뷰)</a>
                    </div>

                    <div class="fvue--layout--spacer"> </div>

                    <div class="fvue--layout--navigation">
                        
                    </div>
                </div>
            </div>
            <div class="fvue--layout--main overflow-y-auto" id="fvue--layout--main">
                <div class="flex flex-col">
                    <div class="relative bg-dark">
                        <div class="h-[200px] lg:h-[300px] bg-no-repeat bg-[length:120%_auto] relative ani-slide-bg" style="background-image:url(images/item/bg_item.jpg);">
                            <div class="absoute left-0 top-0 w-full h-full opacity-50 bg-black">
                            </div>

                            <div class="absolute left-0 top-0 w-full h-full text-white opacity-85">
                                <div class="w-full h-full flex flex-col space-y-2 items-center justify-center">
                                    <div class="text-xs lg:text-md ani-fadeInUp2">Exceptional performance. Better life. Partner with us</div>
                                    <div class="text-2xl lg:text-5xl font-bold ani-fadeInRight">PRODUCT INTRODUCTION</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="xl:container xl:mx-auto lg:m-h-[500px] relative pt-10 h-[800px]">
                        <ul class="absolute -top-8 left-0 w-full list-none rounded divide-x flex flex-row bg-transparent items-center h-[70px] space-x-0 shadow-lg">
                                    
                            <li data-gid="9999999995." class="gid-row cursor-pointer flex-1 flex text-sm lg:text-xl font-bold text-center justify-center transition duration-200 ease-in-out transform bg-blue-default text-white scale-y-125 py-4 shadow-xl">
                                <div class="">NoteBook</div>
                            </li>
                            
                            <li data-gid="9999999996." class="gid-row cursor-pointer flex-1 flex text-sm lg:text-xl font-bold text-center justify-center transition duration-200 ease-in-out transform bg-white py-4 hover:bg-blue-default hover:text-white hover:scale-y-125 hover:text-[150%] hover:shadow-xl">
                                <div class="">Desktop</div>
                            </li>
                            
                            <li data-gid="9999999997." class="gid-row cursor-pointer flex-1 flex text-sm lg:text-xl font-bold text-center justify-center transition duration-200 ease-in-out transform bg-white py-4 hover:bg-blue-default hover:text-white hover:scale-y-125 hover:text-[150%] hover:shadow-xl">
                                <div class="">iPhone</div>
                            </li>
                            
                            <li data-gid="9999999998." class="gid-row cursor-pointer flex-1 flex text-sm lg:text-xl font-bold text-center justify-center transition duration-200 ease-in-out transform bg-white py-4 hover:bg-blue-default hover:text-white hover:scale-y-125 hover:text-[150%] hover:shadow-xl">
                                <div class="">iPad</div>
                            </li>
                            
                        </ul>

                        
                        <div class="px-2" >
                            <ul class="grid mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-[70vh]" id="gridview"></ul>
                        </div>

                    </div>

                </div>



            </div>

        </div>`);
    }
}
export { Layout };
