interface FastRouteMapping {
    [key: string]: string | FastRouteMapping;
}

export default class FastRouter {
    private routerAddresses: { [key: string]: string | FastRouteMapping } = {};
    private dispatch : Record<string, any> ={

    }

    constructor(routes: { [key: string]: any }) {
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

    public addRoute(route: string, method: string): void {
        const mymodule_path = this.routerAddresses[route] as string | undefined;
        if (mymodule_path) {
            this.dispatch[route] = method;
            // Log.d('addRoute',this.dispatch);
        }
    }

    public async listen(route: string, params : null | string | object = {}): Promise<void> {
        const mymodule_path = this.routerAddresses[route] as string | undefined;
        // Log.d('findRoute',mymodule_path);
        if (mymodule_path) {
            try {
                const module = await import(mymodule_path);
                const activity = new module.ComponentActivity();
                const method = this.dispatch[route];
                // Log.d('findRoute', method);
                if (typeof activity[method] === 'function') {
                    Log.d('findRoute', 'function ok');
                    activity[method](params);
                } else {
                    Log.e(`Method '${method}' not found in module '${mymodule_path}'`);
                }
            } catch (error) {
                Log.e("Error loading module:", error);
            }
        }
    }
}