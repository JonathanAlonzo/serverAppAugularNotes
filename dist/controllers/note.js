"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.getNote = exports.getNotes = void 0;
const getNotes = (req, res) => {
    res.json({
        msg: 'Hi from server/src/routes/notes.ts - getting all notes'
    });
};
exports.getNotes = getNotes;
const getNote = (req, res) => {
    res.json({
        msg: 'getting note by ID',
        id: req.params.id
    });
};
exports.getNote = getNote;
const deleteNote = (req, res) => {
    res.json({
        msg: 'deleting note by ID',
        id: req.params.id
    });
};
exports.deleteNote = deleteNote;
