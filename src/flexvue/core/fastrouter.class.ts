interface FastRouteMapping {
    [key: string]: string | FastRouteMapping;
}

export default class FastRouter {
    private routerAddresses: { [key: string]: string | FastRouteMapping } = {};
    private dispatch: Record<string, any> = {};
    private importCache: { [key: string]: any } = {};

    constructor(routes: { [key: string]: any } = {}) {
        this.extractRoutes(routes);
    }

    private extractRoutes(routes: { [key: string]: any }, parentRoute: string = ''): void {
        for (const route in routes) {
            if (typeof routes[route] === 'object') {
                this.routerAddresses[parentRoute + route] = {};
                this.extractRoutes(routes[route], parentRoute + route);
            } else {
                this.routerAddresses[parentRoute + route] = routes[route] as string;
            }
        }
    }

    public addRoute(route: string, method: string, classpath: string | null = null): void {
        if (classpath) {
            const existingRoute = this.routerAddresses[route];
            if (existingRoute === undefined) {
                this.routerAddresses[route] = classpath;
            } else {
                throw new Error(`Route '${route}' is already defined.`);
            }
        }
        const mymodule_path = this.routerAddresses[route] as string | undefined;
        if (mymodule_path !== undefined) {
            this.dispatch[route] = method;
        }
    }

    public async listen(route: string, params: null | string | object = {}): Promise<void> {
        const mymodule_path = this.routerAddresses[route] as string | undefined;
        if (mymodule_path) {
            try {
                let module = this.importCache[mymodule_path];
                if (!module) {
                    module = await import(mymodule_path);
                    this.importCache[mymodule_path] = module;
                }
                const activity = new module.ComponentActivity();
                const method = this.dispatch[route];
                if (typeof activity[method] === 'function') {
                    activity[method](params);
                } else {
                    throw new Error(`Method '${method}' not found in module '${mymodule_path}'`);
                }
            } catch (error) {
                throw new Error("Error loading module: " + error);
            }
        }
    }
}