import {Template} from '@flexvue/types';

class Layout implements Template
{
    constructor(){
    }

    render(message : Record<string,any> = {}) {

        return (String.raw`
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
=
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

                        <table class="table">
                            <!-- head -->
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Title</th>
                                    <th>Group</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody class="h-[70vh]" id="tableview">

                            </tbody>
                        </table>

                    </div>

                </div>



            </div>

        </div>`
        );
    }
}
export {Layout};