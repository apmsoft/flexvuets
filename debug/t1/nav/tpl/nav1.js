class Template {
  constructor() {
  }
  render(message = {}) {
    const general = message.general;
    const superadm = message.superadm;
    return `
        <div class="bg-blue-default dark:bg-gray-900 pt-2 rounded-l-3xl h-full">
            <div class="flex flex-row px-3 py-3 justify-between h-full text-blue-50 dark:text-gray-100">
                <!--top-->
                <div id="lay-menu-icon" class="flex flex-col justify-between h-full">
                    <div>
                        ${general.map((navig) => `
                            <a href="${navig.action}" ${navig.target != '' ? `target="navig_navi.target"` : ``}>
                                <div class="px-3 py-2 w-10 rounded-lg text-center navigation-icon" data-id="${navig.id}" data-action="${navig.action}">
                                    ${navig.icon}
                                </div>
                            </a>`).join('')}
                    </div>

                    <div class="border-t border-blue-300 dark:border-gray-600 pt-3">
                        ${superadm.map((navis) => `
                            <a href="${navis.action}" ${navis.target != '' ? `target="general_navi.target"` : ``}>
                                <div class="px-3 py-2 w-10 rounded-lg text-center navigation-icon" data-id="${navis.id}" data-action="${navis.action}">
                                    ${navis.icon}
                                </div>
                            </a>`).join('')}
                    </div>
                </div>

                <!--bottom-->
                <div id="lay-menu-title" class="flex flex-col justify-between h-full">
                    <div>
                        ${general.map((navig) => `
                            <a href="${navig.action}" ${navig.target != '' ? `target="navig_navi.target"` : ``}>
                                <div class="px-3 py-2 rounded-lg">
                                    ${navig.title}
                                </div>
                            </a>`).join('')}
                    </div>

                    <div class="border-t border-blue-300 dark:border-gray-600 pt-3">
                        ${superadm.map((navis) => `
                            <a href="${navis.action}" ${navis.target != '' ? `target="general_navi.target"` : ``}>
                                <div class="px-3 py-2 rounded-lg">
                                    ${navis.title}
                                </div>
                            </a>`).join('')}
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}
export { Template };