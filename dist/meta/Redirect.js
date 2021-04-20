"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redirect = void 0;
function Redirect(url, statusCode) {
    return function (target, key, descriptor) {
        descriptor.value = function (req, res, next) {
            return res.status(statusCode).redirect(url);
        };
    };
}
exports.Redirect = Redirect;
