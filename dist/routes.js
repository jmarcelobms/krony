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
    Routes.prototype.get = function (path, handler) {
        this.set("GET - " + path, handler);
    };
    Routes.prototype.post = function (path, handler) {
        this.set("POST - " + path, handler);
    };
    Routes.prototype.put = function (path, handler) {
        this.set("PUT - " + path, handler);
    };
    Routes.prototype.delete = function (path, handler) {
        this.set("PUT - " + path, handler);
    };
    Routes.prototype.head = function (path, handler) {
        this.set("HEAD - " + path, handler);
    };
    Routes.prototype.connect = function (path, handler) {
        this.set("CONNECT - " + path, handler);
    };
    Routes.prototype.options = function (path, handler) {
        this.set("OPTIONS - " + path, handler);
    };
    Routes.prototype.trace = function (path, handler) {
        this.set("TRACE - " + path, handler);
    };
    Routes.prototype.patch = function (path, handler) {
        this.set("PATCH - " + path, handler);
    };
    Routes.prototype.all = function (path, handler) {
        this.set("ALL - " + path, handler);
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
