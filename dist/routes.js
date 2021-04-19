"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = (function () {
    function Routes() {
        this.routes = new Map();
    }
    Routes.prototype.set = function (key, handler) {
        if (this.routes.has(key)) {
            console.error("key: " + key + " = handler: " + handler);
            throw new Error('Já tem essa rota adicionada');
        }
        this.routes.set(key, handler);
    };
    Routes.prototype.serverRoutes = function (instances, server) {
        this.routes.forEach(function (value, key) {
            var _a = key.split('-').map(function (v) { return v.trim(); }), method = _a[0], path = _a[1];
            var _b = value.split('.').map(function (v) { return v.trim(); }), Class = _b[0], MethodClass = _b[1];
            var controller = instances.find(function (v) { return v.name === Class; });
            if (controller && MethodClass in controller.instance) {
                var pathResolve = controller.instance.url === '/' ? '' : controller.instance.url;
                server[method.toLowerCase()]("" + pathResolve + path, controller.instance[MethodClass]);
            }
        });
    };
    return Routes;
}());
exports.default = new Routes();
