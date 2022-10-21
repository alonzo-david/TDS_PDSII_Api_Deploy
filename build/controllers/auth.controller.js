"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.updatePassword = exports.registerUser = exports.loginUser = void 0;
const error_model_1 = require("../models/error.model");
const Services = __importStar(require("../services/usuario.service"));
const error_handle_1 = require("../utils/error.handle");
// export const registerCtrl: RequestHandler = async (
//   req: Request,
//   res: Response
// ) => {
//   const { body } = req.body;
// };
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("*****Auth Controller: ", req.body);
        const result = yield Services.loginUser(req.body);
        if (result instanceof error_model_1.Error) {
            const a = result;
            (0, error_handle_1.handleResponse)(res, a.message, a.status, a.code);
            return;
        }
        res.status(200).send(result);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_AUTH");
    }
});
exports.loginUser = loginUser;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Services.registrarUser(req.body);
        if (result instanceof error_model_1.Error) {
            const a = result;
            (0, error_handle_1.handleResponse)(res, a.message, a.status, a.code);
            return;
        }
        res.status(201).send({ result });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_POST_AUTH");
    }
});
exports.registerUser = registerUser;
const updatePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Services.updatePassword(Object.assign(Object.assign({}, req.body), { Id: req.params.id }));
        res.status(200).send({ result });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_ITEMS");
    }
});
exports.updatePassword = updatePassword;
// export const jwtPublico: RequestHandler = async (
//   _: Request,
//   res: Response
// ) => {
//   try{
//     const result = await Services.jwtPublico();
//     res.status(200).send({token: result});
//   }catch (e) {
//     handleHttp(res, "ERROR_GET_ITEMS");
//   }
// };
