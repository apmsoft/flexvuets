type OptionsRequestInit = RequestInit & { [key: string]: any };

export default class AsyncTask {
    /**
     *
     * @param method 전송방식
     * @param url 서버 접속 경로
     * @param params 전송할 데이터
     * @param options 옵션
     */
    async execute(
        method: string,
        url: string,
        params: Record<string, any> = {},
        ...options: (Record<string, any> | null)[]
    ): Promise<any> {
        const _method = method.toUpperCase();

        let redirect_url = url;
        let headers = ((_method == 'GET') ? {'Content-Type': 'text/plain'} : {'Content-Type': 'application/json'});
        let _options = (method == 'GET') ? (params !==null) ? [params] : options : options;

        let otherOptions : object = {};
        if(_options !== null)
        {
            _options.forEach(opt => {
                if(opt !==null){
                    Object.entries(opt).forEach(([key, value]) => {
                        let _startString : string = key.substring(0, 1);
                        if(/^[A-Z]+$/.test(_startString)){
                            headers[key] = value;
                        }else{
                            otherOptions[key] = value;
                        }
                    });
                }
            });
        }

        let requestOptions: OptionsRequestInit = {
            method: _method,
            cache: 'no-cache',
            mode: 'cors',
            verify: false,
            headers: new Headers(headers)
        };

        if (_method != 'GET') {
            requestOptions.body = JSON.stringify(params);
        }

        Object.entries(otherOptions).forEach(([key, value]) => {
            requestOptions[key] = value;
        });

        const response = await fetch(redirect_url, requestOptions);
        const contentType = response.headers.get('content-type');
        if (!response.ok) {
            throw new Error(String(response.status));
        }

        let result: any;
        if (contentType && contentType.includes('application/json')) {
            result = await response.json();
        } else if (contentType && contentType.includes('text')) {
            result = await response.text();
        } else if (contentType && contentType.includes('application')) {
            result = await response.blob();
        }

        return result;
    }

    async doImport(url: string): Promise<any> {
        return import(url);
    }

    async doImportCss(url: string): Promise<void> {
        if (!document.querySelector(`[href="${url}"]`)) {
            document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${url}" />`);
        }
    }
}