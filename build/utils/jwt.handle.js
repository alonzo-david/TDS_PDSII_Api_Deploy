"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarTokenPublic = exports.generarTokenPublico = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.PUBLIC_KEY || "eyJzdWIiOiIxODk0IiwibmFt";
const generarTokenPublico = () => {
    const payload = {
        token: true,
    };
    const jwt = (0, jsonwebtoken_1.sign)(payload, JWT_SECRET, { expiresIn: 86400 });
    return jwt;
};
exports.generarTokenPublico = generarTokenPublico;
const verificarTokenPublic = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jwtUser = req.headers.authorization || "";
        const jwt = (jwtUser === null || jwtUser === void 0 ? void 0 : jwtUser.split(" ").pop()) || "";
        if (jwt !== "") {
            const isValid = (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET);
            if (!isValid) {
                return res.status(401).send({
                    message: "Token inválida",
                });
            }
            console.log("jwt proveida ", jwt);
            next();
        }
        else {
            res.status(400).send({
                message: "Token no proveída.",
            });
        }
    }
    catch (e) {
        res.status(400).send({
            message: "Token no proveída.",
        });
    }
});
exports.verificarTokenPublic = verificarTokenPublic;
