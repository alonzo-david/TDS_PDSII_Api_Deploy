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
exports.jwtPublico = exports.loginUser = exports.registrarUser = void 0;
const db_1 = require("../config/db");
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const registrarUser = (auth) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.registrarUser = registrarUser;
const loginUser = (auth) => __awaiter(void 0, void 0, void 0, function* () {
    let SQL = `call sp_Auth(?);`;
    const result = yield (0, db_1.execute)(SQL, [auth.Usuario]);
    if (!result)
        return "NOT_FOUND_USER";
    const passwordHash = result.Password;
    const isCorrect = yield (0, bcrypt_handle_1.verified)(auth.Password, passwordHash);
    if (!isCorrect)
        return "PASSWORD_INCORRECT";
    return result;
});
exports.loginUser = loginUser;
const jwtPublico = () => __awaiter(void 0, void 0, void 0, function* () {
    const token = (0, jwt_handle_1.generarTokenPublico)();
    return token;
});
exports.jwtPublico = jwtPublico;
