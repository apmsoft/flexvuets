export default class UrlManager extends URL {
    version: number;
    current_id: string;
    url_params: { [key: string]: string };

    constructor(url: string) {
        super(url);
        this.version = 1;
        this.current_id = '';
        this.url_params = this.convertURL2JSON() || {};
    }

    public doEmpty(): void {
        this.url_params = {};
    }

    public removeUrlParams(...argv: string[]): { [key: string]: string } {
        const self = this;
        let result = { ...self.url_params };
        if (Array.isArray(argv)) {
            argv.forEach(function (k) {
                if (result.hasOwnProperty(k)) {
                    delete result[k];
                }
            });
        }
        return result || {};
    }

    public getUrlParams(...argv: string[]): { [key: string]: string } {
        const self = this;
        let result: { [key: string]: string } = {};
        if (Array.isArray(argv)) {
            argv.forEach(k => {
                if (self.url_params.hasOwnProperty(k)) {
                    result[k] = self.url_params[k];
                }
            });
        }
        return result;
    }

    public convertURL2JSON(): { [key: string]: string } {
        this.doEmpty();
        this.url_params = Object.fromEntries(new URLSearchParams(super.search));
        return this.url_params;
    }

    public makeJSON2URL(params: { [key: string]: string }): string {
        this.mergeURLParams(params);
        let url_param = Object.entries(this.url_params).map(([key, val]) => `${key}=${encodeURIComponent(val)}`).join("&");
        return url_param;
    }

    public mergeURLParams(params: { [key: string]: string }): void {
        this.url_params = Object.assign(this.url_params, params);
    }

    // Activity class 레이아웃 패널 확인 및 현재 주소 등록
    public pushState(id: any, title: string, url: string): void {
        if (Activity.push_state != '' && Activity.push_state !== null) {
            let cur_state = Activity.push_state;
            Activity.history_state[cur_state] = id;
        }

        window.history.pushState(id, title, url);
    }
}
