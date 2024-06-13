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
  constructor(hash) {
    this.routerAddresses = {};
    this.dispatch = {};
    this.importCache = {};
    this.init = false;
    this.hash = hash;
  }
  addRoute(route, method, classpath = null) {
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
  dispatcher(route_1) {
    return __awaiter(this, arguments, void 0, function* (route, params = {}) {
      const mymodule_path = this.routerAddresses[route];
      if (typeof mymodule_path !== 'undefined') {
        try {
          let activity = null;
          if (typeof mymodule_path === "object") {
            activity = mymodule_path;
          } else
          {
            let module = this.importCache[mymodule_path];
            if (!module) {
              module = yield import(mymodule_path);
              this.importCache[mymodule_path] = module;
            }
            activity = new module.ComponentActivity();
          }
          const method = this.dispatch[route];
          if (method != null && typeof activity[method] === 'function') {
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
  listen(callback) {
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
  pathinfo(hash) {
    var _a;
    const pathinfo = {
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
      const parse_path = path.map((h) => {
        const pathname = h.replace(/\/$/, '');
        pathinfo.parse_path.push(pathname);
        return pathname;
      });
      let send_params = {};
      const params_pattern = /(\w+)=(.*)/g;
      if (params_pattern.test(hash)) {
        pathinfo.query_string = ((_a = hash.match(params_pattern)) === null || _a === void 0 ? void 0 : _a[0]) || '';
        pathinfo.parse_query = Object.assign(send_params, Object.fromEntries(new URLSearchParams(pathinfo.query_string)));
      }
      pathinfo.path = parse_path.join('');
    }
    return pathinfo;
  }
}