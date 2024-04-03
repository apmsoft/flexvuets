class Template {
  constructor() {
  }
  render(message = {}) {
    const title = message.title;
    const menus = message.menus;
    const acts = message.acts;
    const gid = message.gid;
    return `
        <div class="bg-white dark:bg-gray-700 rounded-l-3xl h-full px-3 pt-1 pb-3">
            <div class="flex flex-col pt-5">
                <!--펼침메뉴-->
                <div class="mb-10">
                    <button type="button" id="btn-close-lm" class="btn py-1 px-3 bg-blue-light text-gray-400 border-0 text-sm">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button type="button" id="btn-open-lm" class="btn py-1 px-3 bg-blue-light text-gray-400 border-0 text-sm hidden">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>

                <h3 class="mb-7 bolder dark:text-gray-300" id="config_title">
                    ${title}
                </h3>

                <!--메뉴-->
                <div id="config">
                    <ul class="list-disc">
                    ${menus.map((menu) => `
                        <a href="${menu.action}" class="rounded-lg bg-blue-light ">
                            <li class="flex flex-row justify-between cursor-pointer py-2 px-3 ${menu.id == gid ? `bg-blue-light dark:bg-gray-200 text-gray-700 dark:text-blue-dark` : `border-b dark:border-0 border-b-gray-100 dark:bg-gray-600 dark:text-gray-400`} mb-3 rounded-lg hover:rounded-lg hover:bg-opacity-70">
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
                            <li class="flex flex-row px-3 py-4 ${act.id == gid ? `bg-blue-default dark:bg-gray-100 text-blue-dark` : 'border dark:border-gray-600 dark:bg-gray-600 dark:text-gray-500'} mb-3 rounded-lg">
                                <div class="flex item-center"><span class="py-2 px-3 bg-white w-10 h-10 rounded-lg text-center">${act.icon}</span></div>
                                <div class="pl-3 ${act.id == gid ? `text-blue-light dark:text-gray-dark` : `text-gray-dark dark:text-gray-300`}">
                                    ${act.title}
                                    <p class="text-sm text-gray-400 dark:text-gray-600">${act.comment}</p>
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