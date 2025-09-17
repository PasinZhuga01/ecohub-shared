"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
class BaseError extends Error {
    constructor(name, message) {
        super(message);
        this.name = name;
    }
}
exports.BaseError = BaseError;
