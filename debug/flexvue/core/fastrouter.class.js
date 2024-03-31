var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}
    function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}
    function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
export default class FastRouter {
  constructor(routes = {}) {
    this.routerAddresses = {};
    this.dispatch = {};
    this.importCache = {};
    this.extractRoutes(routes);
  }
  extractRoutes(routes, parentRoute = '') {
    for (const route in routes) {
      if (typeof routes[route] === 'object') {
        this.routerAddresses[parentRoute + route] = {};
        this.extractRoutes(routes[route], parentRoute + route);
      } else
      {
        this.routerAddresses[parentRoute + route] = routes[route];
      }
    }
  }
  addRoute(route, method, classpath = null) {
    if (classpath) {
      const existingRoute = this.routerAddresses[route];
      if (existingRoute === undefined) {
        this.routerAddresses[route] = classpath;
      } else
      {
        throw new Error(`Route '${route}' is already defined.`);
      }
    }
    const mymodule_path = this.routerAddresses[route];
    if (mymodule_path !== undefined) {
      this.dispatch[route] = method;
    }
  }
  listen(route_1) {
    return __awaiter(this, arguments, void 0, function* (route, params = {}) {
      const mymodule_path = this.routerAddresses[route];
      if (mymodule_path) {
        try {
          let module = this.importCache[mymodule_path];
          if (!module) {
            module = yield import(mymodule_path);
            this.importCache[mymodule_path] = module;
          }
          const activity = new module.ComponentActivity();
          const method = this.dispatch[route];
          if (typeof activity[method] === 'function') {
            activity[method](params);
          } else
          {
            throw new Error(`Method '${method}' not found in module '${mymodule_path}'`);
          }
        }
        catch (error) {
          throw new Error("Error loading module: " + error);
        }
      }
    });
  }
}