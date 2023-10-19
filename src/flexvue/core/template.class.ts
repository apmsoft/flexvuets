interface Options extends RequestInit {
    headers?: Record<string, string>;
}

export default class Template
{
    // template 파일 찾기
    async readFile(filename: string, _options: Options = {}, _headers: Record<string, string> = {}): Promise<string | undefined>
    {
        const defaultHeaders: Record<string, string> = {
            'Content-Type': 'text/plain',
            ..._headers
        };

        const options: RequestInit = {
            cache: 'default',
            headers: defaultHeaders,
            ..._options
        };

        const response = await fetch(filename, options);

        if (response.ok) {
            return await response.text();
        }

        throw new Error(response.status.toString());
    }

    /**
     *
     * @param <template id="#tpl_test"> : template_id
     * @returns
     */
    async include(template_id: string): Promise<string | undefined> {
        const elem = document.querySelector(template_id) as HTMLTemplateElement | null;
        if (elem?.content) {
            const fragment = elem.content;
            const tpl = document.importNode(fragment, true);
            return new XMLSerializer().serializeToString(tpl);
        }
        return 'undefined';
    }

    /**
     *
     * @param {json data} data
     * @returns : rendering html
     */
    render(tpl: HTMLTemplateElement, data: Record<string, any>): string {
        const func = new Function(...Object.keys(data), "return `" + tpl + "`;");
        return func(...Object.values(data));
    }
}
