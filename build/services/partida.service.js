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
exports.postPartida = exports.getPartidas = exports.getPartida = void 0;
const db_1 = require("../config/db");
const getPartida = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let SQL = `call sp_ListarPartida(?)`;
    return (0, db_1.execute)(SQL, [id]);
});
exports.getPartida = getPartida;
const getPartidas = (idUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    let SQL = `call sp_ListarPartidas(?)`;
    return (0, db_1.execute)(SQL, [idUsuario]);
});
exports.getPartidas = getPartidas;
const postPartida = (partida) => __awaiter(void 0, void 0, void 0, function* () {
    let SQL = `call sp_CrearPartida(?,?,?,?,?,?)`;
    const result = yield (0, db_1.execute)(SQL, [
        partida.IdUsuario,
        partida.Pregunta,
        partida.Respuesta,
        partida.EsCorrecta,
        partida.Puntos,
        partida.Tipo,
    ]);
    return result.affectedRows;
    //return result.affectedRows > 0;
});
exports.postPartida = postPartida;
