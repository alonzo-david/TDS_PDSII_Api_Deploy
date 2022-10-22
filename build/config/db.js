"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = exports.endConnection = exports.initConnection = void 0;
require("dotenv/config");
const mysql2_1 = require("mysql2");
const config_1 = require("./config");
const dataSource = config_1.DATA_SOURCES.MySQL;
let cnn;
const initConnection = () => {
    try {
        cnn = (0, mysql2_1.createConnection)({
            //connectionLimit: dataSource.DB_CONNECTION_LIMIT,
            connectionLimit: 10,
            host: dataSource.HOST,
            user: dataSource.USER,
            password: dataSource.PASSWORD,
            database: dataSource.DATABASE,
        });
        cnn.connect((err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("db ok");
        });
    }
    catch (error) {
        console.error("[mysql.connector][init][Error]: ", error);
        throw new Error("Error en la conexion");
    }
};
exports.initConnection = initConnection;
const endConnection = () => {
    cnn.end();
};
exports.endConnection = endConnection;
/**
 * executes SQL queries in MySQL db
 *
 * @param {string} query - provide a valid SQL query
 * @param {string[] | Object} params - provide the parameterized values used
 * in the query
 */
const execute = (query, params) => {
    try {
        (0, exports.initConnection)();
        if (!cnn)
            throw new Error("Pool was not created. Ensure pool is created when running the app.");
        return new Promise((resolve, reject) => {
            console.log("QUERY ", query);
            console.log("PARAMS ", params);
            cnn.query(query, params, (error, results) => {
                var data = results;
                console.log("results db: ", results);
                console.log("data db: ", data);
                (0, exports.endConnection)();
                if (error)
                    reject(error);
                else
                    resolve(data);
            });
        });
    }
    catch (error) {
        console.error("[mysql.connector][execute][Error]: ", error);
        throw new Error("failed to execute MySQL query");
    }
};
exports.execute = execute;
