export default class Forms {
    private targetId: string;

    constructor(targetId: string) {
        this.targetId = targetId;
    }

    /**
     * @param callback Function
     */
    doSubmit(callback: any | null = null): void 
    {
        const self = this;
        let send_params: { [key: string]: string } = {};

        const formElem = document.querySelector<HTMLFormElement>(this.targetId);
        if (!formElem) return;

        formElem.addEventListener('submit', function(e: Event) {
            e.preventDefault();

            send_params = self.getTargetFromDatas(formElem);

            if(typeof callback === 'function'){
                callback(send_params);
            }
        });
    }

    getTargetFromDatas(formElem? : HTMLFormElement) : { [key: string]: string }
    {
        if(typeof formElem === 'undefined'){
            formElem = document.querySelector<HTMLFormElement>(this.targetId)!;
        }
        if (!formElem) return {};

        let datas: { [key: string]: string } = {};

        // 데이터 필터링
        const formData = new FormData(formElem);
        formData.forEach((val: FormDataEntryValue, name: string) => {
            const elements = formElem.elements.namedItem(name);

            if (elements instanceof RadioNodeList) {
                const nodeName = (elements.length > 1)
                    ? (elements[0] as HTMLInputElement).nodeName
                    : (elements[0] as HTMLInputElement).nodeName;

                datas[name] = (datas[name] && datas[name] !== '')
                    ? `${datas[name]},${val}`
                    : val as string;
            } else if (elements) {
                const nodeName = elements.nodeName;
                const _value = (nodeName === 'TEXTAREA') ? encodeURIComponent(val as string) : val;
                datas[name] = (datas[name] && datas[name] !== '')
                    ? `${datas[name]},${_value}`
                    : _value as string;
            }
        });

    return datas;
    }
}
