"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
function Controller(value) {
    return function (constructor) {
        constructor.prototype.URLDECORATOR = value;
    };
}
exports.Controller = Controller;
