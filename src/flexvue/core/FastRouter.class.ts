interface PathInfo {
    url: string;
    path: string;
    parse_path: string[];
    query_string: string;
    parse_query: { [key: string]: any };
}

export default class FastRouter {
    private routerAddresses: { [key: string]: string | object } = {};
    private dispatch: Record<string, string | null> = {};
    private importCache: { [key: string]: any } = {};
    private init: boolean;
    private hash: string | undefined | null;

    constructor(hash?: string) {
        this.init = false;
        this.hash = hash;
    }

    public addRoute(route: string, method: string | null, classpath: object | string | null = null): void {
        if (classpath) {
            const existingRoute = this.routerAddresses[route];
            if (typeof existingRoute === 'undefined') {
                this.routerAddresses[route] = classpath;
            }
        }
        const mymodule_path = this.routerAddresses[route];
        if (typeof mymodule_path !== 'undefined') {
            this.dispatch[route] = method;
        }
    }

    public async dispatcher(route: string, params: null | string | object = {}): Promise<void> {
        const mymodule_path = this.routerAddresses[route];
        if (typeof mymodule_path !== 'undefined') {
            try {
                let activity : object | null  = null;
                if(typeof mymodule_path === "object"){
                    activity = mymodule_path;
                }else{
                    let module = this.importCache[mymodule_path];
                    if (!module) {
                        module = await import(mymodule_path);
                        this.importCache[mymodule_path] = module;
                    }
                    activity = new module.ComponentActivity();
                }

                const method = this.dispatch[route];
                if (method != null && typeof activity![method] === 'function') {
                    activity![method](params);
                } else {
                    throw new Error(`Method '${method}' not found in module '${mymodule_path}'`);
                }
            } catch (error) {
                throw new Error("Error loading module: " + error);
            }
        }
    }

    public listen (callback: (pathInfo: PathInfo) => void): void {
        window.addEventListener('hashchange', (evt) => {
            const pathinfo = this.pathinfo(window.location.hash.replace('#', ''));
            callback(pathinfo);
        });

        if (!this.init) {
            let _hash = this.hash ? this.hash.replace('#', '') : '';
            this.init = true;
            const pathinfo = this.pathinfo(_hash);
            callback(pathinfo);
        }
    }

    pathinfo(hash: string): PathInfo 
    {
        const pathinfo: PathInfo = {
            'url': '',
            'path': '/',
            'parse_path': [],
            'query_string': '',
            'parse_query': {}
        };

        pathinfo.url = '#' + hash;

        const path_pattern = /[\/](\w+)/gi;
        if (path_pattern.test(hash)) {
            let path = hash.match(path_pattern) || [];
            const parse_path = path.map(h => {
                const pathname = h.replace(/\/$/, '');
                pathinfo.parse_path.push(pathname);
                return pathname;
            });

            let send_params: { [key: string]: any } = {};
            const params_pattern = /(\w+)=(.*)/g;
            if (params_pattern.test(hash)) {
                pathinfo.query_string = hash.match(params_pattern)?.[0] || '';
                pathinfo.parse_query = Object.assign(send_params, Object.fromEntries(new URLSearchParams(pathinfo.query_string)));
            }

            pathinfo.path = parse_path.join('');
        }

        return pathinfo;
    }
}