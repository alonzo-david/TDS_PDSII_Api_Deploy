"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const tipousuario_controller_1 = require("../controllers/tipousuario.controller");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", tipousuario_controller_1.getTiposUsuario);
