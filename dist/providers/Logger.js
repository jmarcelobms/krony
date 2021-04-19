"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = (function () {
    function Logger() {
    }
    Logger.prototype.init = function (server) {
        var _a = process.argv, args = _a.slice(2);
        if (args.includes('--log')) {
            server = this.log(server);
        }
        if (args.includes('--list')) {
            this.list(server._router.stack);
        }
        return server;
    };
    Logger.prototype.log = function (server) {
        server.use(function (req, res, next) {
            console.info(req.method + " > " + req.url);
            next();
        });
        var stacks = server._router.stack;
        var lasStack = stacks[stacks.length - 1];
        server._router.stack = __spreadArray([lasStack], server._router.stack);
        return server;
    };
    Logger.prototype.list = function (stack) {
        var routes = stack
            .map(function (route) {
            if (route.route && route.route.path) {
                return {
                    method: Object.keys(route.route.methods)[0].toUpperCase(),
                    path: route.route.path,
                };
            }
        }).filter(function (v) { return v != undefined; });
        console.table(routes);
    };
    return Logger;
}());
exports.default = new Logger();
