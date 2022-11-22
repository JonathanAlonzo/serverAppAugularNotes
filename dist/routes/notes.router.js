"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const note_controller_1 = require("../controllers/note.controller");
const router = (0, express_1.Router)();
//CRUDS Endpoints
router.get('/:userUid_fk', note_controller_1.getUiduserBd); //DELETE THIS
router.get('/:id', note_controller_1.getNote);
router.get('/', note_controller_1.getNotes);
router.delete('/:id', note_controller_1.deleteNote);
router.post('/', note_controller_1.createNote);
router.put('/:id', note_controller_1.updateNote);
exports.default = router;
