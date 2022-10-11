"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleResponse = exports.handleHttp = void 0;
const handleHttp = (res, message) => {
    res.status(500).send({
        message,
    });
};
exports.handleHttp = handleHttp;
const handleResponse = (res, message, code) => {
    res.status(code || 500).send({
        message,
    });
};
exports.handleResponse = handleResponse;
