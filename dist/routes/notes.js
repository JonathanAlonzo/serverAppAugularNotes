"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const note_controller_1 = require("../controllers/note.controller");
const router = (0, express_1.Router)();
router.get('/', note_controller_1.getNotes);
router.get('/:id', note_controller_1.getNote);
router.delete('/:id', note_controller_1.deleteNote);
exports.default = router;
