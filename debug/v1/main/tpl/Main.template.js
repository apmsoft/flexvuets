class MainView {
  constructor() {
  }
  render(message = {}) {
    return /*HTML*/`
        <div class="flex flex-col">
            <div class="relative bg-dark pb-5">
                <div class="swiper mySwiper h-[300px] lg:h-[700px]">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide bg-no-repeat bg-center bg-cover relative" style="background-image: url(images/bg/bg1.jpg);">
                            <div class="absolute left-0 top-0 w-full h-full opacity-50 bg-black">
                            </div>

                            <div class="absolute left-0 top-0 w-full h-full text-white opacity-85">
                                <div class="w-full h-full flex flex-col space-y-2 items-center justify-center">
                                    <div class="font-bold">SHIPS ANYTHING</div>
                                    <div class="text-2xl lg:text-5xl font-bold">AROUND THE WORLD</div>
                                    <div class="font-bold pt-2">
                                        <a href="#/" class="btn px-4 py-2 bg-white text-sm opacity-70 text-gray-600 hover:opacity-100 hover:bg-warning hover:text-white">자세히 보기</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide bg-no-repeat bg-center bg-cover relative" style="background-image: url(images/bg/bg2.jpg);">
                            <div class="absolute left-0 top-0 w-full h-full opacity-50 bg-black">
                            </div>

                            <div class="absolute left-0 top-0 w-full h-full text-white opacity-85">
                                <div class="w-full h-full flex flex-col space-y-2 items-center justify-center">
                                    <div class="font-bold">SHIPS ANYTHING</div>
                                    <div class="text-2xl lg:text-5xl font-bold">AROUND THE WORLD</div>
                                    <div class="font-bold pt-2">
                                        <a href="#/" class="btn px-4 py-2 bg-white text-sm opacity-70 text-gray-600 hover:opacity-100 hover:bg-warning hover:text-white">자세히 보기</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>
                
                    <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                
                    <!-- If we need scrollbar -->
                    <div class="swiper-scrollbar"></div>
                </div>
                
                <div class="overflow-hidden absolute left-0 bottom-0 w-full m-0 h-[185px] bg-dark/0 z-2">
                    <div class="wave_box"><div class="wave"></div></div>
                </div>
                <div class="bg-blue-default/70 py-4 absolute left-0 bottom-0 w-full z-3"> </div>
            </div>


            <div class="xl:container xl:mx-auto pt-8 relative h-[800px]">

                <!-- product -->
                <div class="flex flex-col space-y-4 mt-8 py-4">
                    <div class="flex flex-col items-stretch mb-4 space-y-2 text-center justify-center h-[80px] md:h-[140px]">
                        <div class="self-center text-xl md:text-5xl font-bold">Products</div>
                        <div class="self-center text-gray-300">Exceptional performance. Better life. Partner with us</div>
                    </div>

                    <div id="main-products"> ...
                    </div>
                </div>

            </div>

        </div>`;
  }
}
export { MainView };