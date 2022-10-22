"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const persona_controller_1 = require("../controllers/persona.controller");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/:id", persona_controller_1.getListarPersona);
