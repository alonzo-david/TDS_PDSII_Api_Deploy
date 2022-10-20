"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
class Error {
    constructor(status, code, message) {
        this.status = status;
        this.code = code;
        this.message = message;
    }
}
exports.Error = Error;
