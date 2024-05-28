class ListView {
  constructor() {
  }
  render(message = {}) {
    return String.raw`
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

                <div class="px-2">
                    <div class="grid grid-cols-2 mt-12 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        
                        <div data-gid="9999999995.01" class="gid-raw relative h-32 md:h-64 rounded-xl cursor-pointer overflow-hidden">
                            <div class="bg-cover bg-center bg-no-repeat rounded-xl h-full transition duration-2000 hover:scale-110 hover:shadow-xl transform-gpu" style="background-image: url(images/item/sample_item1.jpg); height: 100%; width: 100%;">
                                <div class="absolute left-0 top-0 w-full h-full ani-fadeInUp2 rounded-xl text-gray-300 bg-black/70 hover:bg-black/40 hover:text-outline-white hover:text-warning text-shadow flex flex-col items-center justify-center space-y-0">
                                    <div class="text-md lg:text-xl font-bold">Product 1</div>
                                    <div class="font-bold pt-0">
                                        <div class="btn px-4 border-0 py-2 text-xs">자세히 보기</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div data-gid="9999999995.02" class="gid-raw relative h-32 md:h-64 rounded-xl cursor-pointer overflow-hidden">
                            <div class="bg-cover bg-center bg-no-repeat rounded-xl h-full transition duration-2000 hover:scale-110 hover:shadow-xl transform-gpu" style="background-image: url(images/item/sample_item2.jpg); height: 100%; width: 100%;">
                                <div class="absolute left-0 top-0 w-full h-full ani-fadeInUp2 rounded-xl text-gray-300 bg-black/70 hover:bg-black/40 hover:text-outline-white hover:text-warning text-shadow flex flex-col items-center justify-center space-y-0">
                                    <div class="text-md lg:text-xl font-bold">Product 2</div>
                                    <div class="font-bold pt-0">
                                        <div class="btn px-4 border-0 py-2 text-xs">자세히 보기</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div data-gid="9999999995.03" class="gid-raw relative h-32 md:h-64 rounded-xl cursor-pointer overflow-hidden">
                            <div class="bg-cover bg-center bg-no-repeat rounded-xl h-full transition duration-2000 hover:scale-110 hover:shadow-xl transform-gpu" style="background-image: url(images/item/sample_item3.jpg); height: 100%; width: 100%;">
                                <div class="absolute left-0 top-0 w-full h-full ani-fadeInUp2 rounded-xl text-gray-300 bg-black/70 hover:bg-black/40 hover:text-outline-white hover:text-warning text-shadow flex flex-col items-center justify-center space-y-0">
                                    <div class="text-md lg:text-xl font-bold">Product 3</div>
                                    <div class="font-bold pt-0">
                                        <div class="btn px-4 border-0 py-2 text-xs">자세히 보기</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div data-gid="9999999995.04" class="gid-raw relative h-32 md:h-64 rounded-xl cursor-pointer overflow-hidden">
                            <div class="bg-cover bg-center bg-no-repeat rounded-xl h-full transition duration-2000 hover:scale-110 hover:shadow-xl transform-gpu" style="background-image: url(images/item/sample_item4.jpg); height: 100%; width: 100%;">
                                <div class="absolute left-0 top-0 w-full h-full ani-fadeInUp2 rounded-xl text-gray-300 bg-black/70 hover:bg-black/40 hover:text-outline-white hover:text-warning text-shadow flex flex-col items-center justify-center space-y-0">
                                    <div class="text-md lg:text-xl font-bold">Product 4</div>
                                    <div class="font-bold pt-0">
                                        <div class="btn px-4 border-0 py-2 text-xs">자세히 보기</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>

        </div>`;
  }
}
export { ListView };