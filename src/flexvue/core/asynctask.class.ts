export default class AsyncTask {
    /**
     *
     * @param method 전송방식
     * @param url 서버 접속 경로
     * @param params 전송할 데이터
     * @param _options 옵션
     * @param _headers 전송할 헤더값
     */
    async execute(
        method: string,
        url: string,
        params: Record<string, any> = {},
        _options: Record<string, any> = {},
        _headers: Record<string, string> | null = null
    ): Promise<any> {
        const _method = method.toUpperCase();

        let redirect_url = url;


        let headers = _headers || ((_method == 'GET') ? {'Content-Type': 'text/plain'} : {'Content-Type': 'application/json'});

        type ExtendedRequestInit = RequestInit & { [key: string]: any };
        let options: ExtendedRequestInit = {
            method: _method,
            cache: 'no-cache',
            mode : 'cors',
            verify : false,
            headers: new Headers(headers)
        };

        if (_method != 'GET') {
            options.body = JSON.stringify(params);
        }
        Object.entries(_options).forEach(([key, value]) => {
            options[key] = value;
        });

        const response = await fetch(redirect_url, options);
        const contentType = response.headers.get('content-type');
        if (!response.ok) {
            throw new Error(String(response.status));
        }

        let result;
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
