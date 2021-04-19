"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONNECT = exports.PATCH = exports.OPTIONS = exports.ALL = exports.HEAD = exports.TRACE = exports.DELETE = exports.PUT = exports.POST = exports.GET = void 0;
var routes_1 = __importDefault(require("../routes"));
function GET(path) {
    return function (target, key, descriptor) {
        routes_1.default.set("GET - " + path, target.constructor.name + "." + key);
    };
}
exports.GET = GET;
function POST(path) {
    return function (target, key, descriptor) {
        routes_1.default.set("POST - " + path, target.constructor.name + "." + key);
    };
}
exports.POST = POST;
function PUT(path, handler) {
    return function (target, key, descriptor) {
        routes_1.default.set("PUT - " + path, target.constructor.name + "." + key);
    };
}
exports.PUT = PUT;
function DELETE(path, handler) {
    return function (target, key, descriptor) {
        routes_1.default.set("DELETE - " + path, target.constructor.name + "." + key);
    };
}
exports.DELETE = DELETE;
function HEAD(path, handler) {
    return function (target, key, descriptor) {
        routes_1.default.set("HEAD - " + path, target.constructor.name + "." + key);
    };
}
exports.HEAD = HEAD;
function CONNECT(path, handler) {
    return function (target, key, descriptor) {
        routes_1.default.set("CONNECT - " + path, target.constructor.name + "." + key);
    };
}
exports.CONNECT = CONNECT;
function OPTIONS(path, handler) {
    return function (target, key, descriptor) {
        routes_1.default.set("OPTIONS - " + path, target.constructor.name + "." + key);
    };
}
exports.OPTIONS = OPTIONS;
function TRACE(path, handler) {
    return function (target, key, descriptor) {
        routes_1.default.set("TRACE - " + path, target.constructor.name + "." + key);
    };
}
exports.TRACE = TRACE;
function PATCH(path, handler) {
    return function (target, key, descriptor) {
        routes_1.default.set("PATCH - " + path, target.constructor.name + "." + key);
    };
}
exports.PATCH = PATCH;
function ALL(path, handler) {
    return function (target, key, descriptor) {
        routes_1.default.set("ALL - " + path, target.constructor.name + "." + key);
    };
}
exports.ALL = ALL;
