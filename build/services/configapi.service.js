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
exports.postConfigApi = exports.getListarConfigApi = exports.getListarApi = void 0;
const db_1 = require("../config/db");
const getListarApi = () => __awaiter(void 0, void 0, void 0, function* () {
    let SQL = `call sp_ListarApi();`;
    return yield (0, db_1.execute)(SQL, []);
});
exports.getListarApi = getListarApi;
const getListarConfigApi = () => __awaiter(void 0, void 0, void 0, function* () {
    let SQL = `call sp_ListarConfigApi();`;
    return yield (0, db_1.execute)(SQL, []);
});
exports.getListarConfigApi = getListarConfigApi;
const postConfigApi = (configapi) => __awaiter(void 0, void 0, void 0, function* () {
    let SQL = `call sp_call_CrearConfigApi(?,?);`;
    const result = yield (0, db_1.execute)(SQL, [
        configapi.Link,
        configapi.Grupo,
    ]);
    return result;
});
exports.postConfigApi = postConfigApi;
