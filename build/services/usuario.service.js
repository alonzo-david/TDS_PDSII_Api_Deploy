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
exports.getEstadoAvatar = exports.updateUser = exports.updatePassword = exports.loginUser = exports.registrarUser = void 0;
const db_1 = require("../config/db");
const error_model_1 = require("../models/error.model");
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const registrarUser = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    let userInfo = yield checkUser(usuario.Usuario).then((response) => JSON.stringify(response));
    if (userInfo !== undefined) {
        userInfo = JSON.parse(userInfo)[0][0];
        if (userInfo.Usuario != "") {
            let error = new error_model_1.Error(200, 0, "USER_ALREADY_EXISTS");
            return error;
        }
    }
    //const passwordHash = await encrypt(usuario.Password);
    usuario.Password = yield (0, bcrypt_handle_1.encrypt)(usuario.Password);
    const SQL = `call sp_CrearUsuario(?,?,?,?,?,?,?)`;
    const result = yield (0, db_1.execute)(SQL, [
        usuario.Nombres,
        usuario.Apellidos,
        usuario.FechaNacimiento,
        usuario.CorreoElectronico,
        usuario.Usuario,
        usuario.Password,
        usuario.IdAvatar,
    ]);
    return result.affectedRows;
});
exports.registrarUser = registrarUser;
const loginUser = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield checkUser(usuario.Usuario).then((response) => JSON.stringify(response));
    result = JSON.parse(result)[0][0];
    if (result == undefined || result.Usuario == "") {
        let error = new error_model_1.Error(200, 0, "NOT_FOUND_USER");
        return error;
    }
    const passwordHash = result.Password;
    const isCorrect = yield (0, bcrypt_handle_1.verified)(usuario.Password, passwordHash);
    if (!isCorrect) {
        let error = new error_model_1.Error(200, 0, "PASSWORD_INCORRECT");
        return error;
    }
    return result;
});
exports.loginUser = loginUser;
const updatePassword = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    usuario.Password = yield (0, bcrypt_handle_1.encrypt)(usuario.Password);
    let SQL = `call sp_ActualizarPassword(?, ?);`;
    const result = yield (0, db_1.execute)(SQL, [
        usuario.Id,
        usuario.Password,
    ]);
    return result;
});
exports.updatePassword = updatePassword;
const updateUser = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    let SQL = `call sp_ActualizarUsuario(?,?,?,?,?,?)`;
    const result = yield (0, db_1.execute)(SQL, [
        usuario.Id,
        usuario.Nombres,
        usuario.Apellidos,
        usuario.FechaNacimiento,
        usuario.CorreoElectronico,
        usuario.IdAvatar,
    ]);
    return result;
});
exports.updateUser = updateUser;
const checkUser = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    let SQL = `call sp_Auth(?);`;
    const result = yield (0, db_1.execute)(SQL, [usuario]);
    const r = JSON.stringify(result);
    return result;
});
const getEstadoAvatar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let SQL = `call sp_EstadoAvatar(?)`;
    return (0, db_1.execute)(SQL, [id]);
});
exports.getEstadoAvatar = getEstadoAvatar;
