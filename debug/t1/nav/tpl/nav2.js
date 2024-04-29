class Template {
  constructor() {
  }
  render(message = {}) {
    const title = message.title;
    const menus = message.menus;
    const acts = message.acts;
    const gid = message.gid;
    return `
        <div class="rounded-l-3xl bg-base-200 text-base-content h-full px-3 pt-1 pb-3">
            <div class="flex flex-col pt-5">
                <!--펼침메뉴-->
                <div class="mb-10">
                    <button type="button" id="btn-close-lm" class="btn py-1 px-3 border-0 text-sm">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button type="button" id="btn-open-lm" class="btn py-1 px-3 border-0 text-sm hidden">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>

                <h3 class="mb-7 bolder " id="config_title">
                    ${title}
                </h3>

                <!--메뉴-->
                <div id="config">
                    <ul class="list-disc">
                    ${menus.map((menu) => `
                        <a href="${menu.action}" class="">
                            <li class="flex flex-row justify-between cursor-pointer py-2 px-3 ${menu.id == gid ? `btn-active` : `btn-outline`} mb-3">
                                <div>${menu.title}</div>
                                <div>${menu.icon}</div>
                            </li>
                        </a>`).join('')}
                    </ul>
                </div>

                <!--activity menu-->
                <div class="mt-5">
                    <ul>
                        ${acts.map((act) => `
                        <a href="${act.action}">
                            <li class="flex flex-row px-3 py-4 ${act.id == gid ? `btn-active` : 'btn-outline'} mb-3">
                                <div class="flex item-center"><span class="py-2 px-3 w-10 h-10 text-center">${act.icon}</span></div>
                                <div class="pl-3 ${act.id == gid ? `` : ``}">
                                    ${act.title}
                                    <p class="text-sm ">${act.comment}</p>
                                </div>
                            </li>
                        </a>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
        `;
  }
}
export { Template };