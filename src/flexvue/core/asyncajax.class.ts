export default class AsyncAjax {
    /**
     *
     * @param method 전송방식
     * @param url 서버 접속 경로
     * @param params 전송할 데이터
     * @param _options 옵션
     * @param _headers 전송할 헤더값
     * @returns
     */
    async execute(
        method: string,
        url: string,
        params: Record<string, any> = {},
        _options: Record<string, any> = {},
        _headers: Record<string, any> | null = null
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            // method
            const _method = method.toUpperCase();

            // headers
            let headers = _headers || {
                beforeSend: function(xhr: JQuery.jqXHR<any>) {
                    xhr.setRequestHeader('Content-Type', 'application/json');
                }
            };

            // options
            let options: JQuery.AjaxSettings = {
                method: _method as 'GET' | 'POST', // This needs to be narrowed down based on your actual use-case.
                url: url,
                data: params,
                cache: false,
                crossDomain: true,
                dataType: "json"
            };

            Object.assign(options, _options, headers);

            $.ajax(options)
            .done(function(data: any) {
                resolve(data);
            })
            .fail(function(jqxhr: JQuery.jqXHR<any>, textStatus: string, error: string) {
                var err = textStatus + ", " + error;
                throw new Error(err);
            });
        });
    }

    async doImport(url: string): Promise<any> {
        return await import(url).then(Module => {
            return Module;
        });
    }

    async doImportCss(url: string): Promise<void> {
        if (document.querySelector(`[href="${url}"]`) === null) {
            Log.d("run link import css");
            await document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${url}" />`);
        }
    }
}
