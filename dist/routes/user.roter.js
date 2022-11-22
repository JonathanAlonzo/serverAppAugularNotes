"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
//CRUDS Endpoints
router.get('/:uid', user_controller_1.getUserByUid);
router.post('/', user_controller_1.createUser);
//router.get('/:uid', getUser);
router.delete('/:id', user_controller_1.deleteUser);
exports.default = router;
