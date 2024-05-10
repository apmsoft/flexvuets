class GridView {
  constructor() {
  }
  render(message = {}) {
    return `
        <div class="relative h-32 md:h-64 rounded-xl cursor-pointer overflow-hidden" >
            <div class="bg-cover bg-center bg-no-repeat rounded-xl h-full transition duration-2000 hover:scale-110 hover:shadow-xl transform-gpu" style="background-image: url(../images/item/sample_item${Math.floor(Math.random() * 4) + 1}.jpg); height: 100%; width: 100%;">
                <div data-id="${message.id}" data-gid="${message.gid}" class="item absolute left-0 top-0 w-full h-full ani-fadeInUp2 rounded-xl text-gray-300 bg-black/70 hover:bg-black/40 hover:text-outline-white hover:text-warning text-shadow flex flex-col items-center justify-center space-y-0">
                    <div class="text-md lg:text-xl font-bold">${message.title}</div>
                    <div class="font-bold pt-0">
                        <div class="btn px-4 border-0 py-2 text-xs">자세히 보기</div>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}
export { GridView };