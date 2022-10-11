"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const item_controller_1 = require("../controllers/item.controller");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * [GET]
 */
router.get('/', item_controller_1.getItems);
router.get('/:id', item_controller_1.getItem);
router.post('/', item_controller_1.postItem);
router.put('/:id', item_controller_1.updateItem);
router.delete('/:id', item_controller_1.deleteItem);
