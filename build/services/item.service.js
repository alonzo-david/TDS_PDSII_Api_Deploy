"use strict";
//import { Car } from '../interfaces'
//import itemModel from '../models/item.model';
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
exports.getItems = exports.crearItem = void 0;
const db_1 = require("../config/db");
const crearItem = (req, res) => {
    try {
        const prueba = req.body;
        let SQL = "";
        SQL = `INSERT INTO item (color, gas, year, description, price) VALUES('${prueba.color}','${prueba.gas}',${prueba.year},'${prueba.description}',${prueba.price})`;
        //SQL = `INSERT INTO item (color, gas, year, description, price) VALUES('?','?',?,'?,?)`;
        console.log("CREATE ON SERVICES: ", SQL);
        return (0, db_1.execute)(SQL, prueba);
    }
    catch (e) {
    }
};
exports.crearItem = crearItem;
const getItems222 = (req, res) => {
    try {
        const prueba = req.body;
        let SQL = "";
        SQL = `SELECT * FROM item;`;
        //SQL = `INSERT INTO item (color, gas, year, description, price) VALUES('?','?',?,'?,?)`;
        console.log("GET ITEM ON SERVICES: ", SQL);
        return (0, db_1.execute)(SQL, prueba);
    }
    catch (e) {
    }
};
const getItems = () => __awaiter(void 0, void 0, void 0, function* () {
    let SQL = `SELECT * FROM item;`;
    return (0, db_1.execute)(SQL, []);
});
exports.getItems = getItems;
//export { crearItem }
