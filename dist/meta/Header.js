"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
function Header(field, value) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function (req, res) {
            res.set(field, value);
            return originalMethod.bind(this)(req, res);
        };
    };
}
exports.Header = Header;
