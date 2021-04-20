"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
function Header(field, value) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function (req, res, next) {
            res.set(field, value);
            return originalMethod.bind(this)(req, res, next);
        };
    };
}
exports.Header = Header;
