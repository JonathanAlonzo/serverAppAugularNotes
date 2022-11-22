"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUiduserBd = exports.updateNote = exports.createNote = exports.deleteNote = exports.getNote = exports.getNotes = void 0;
const note_model_1 = __importDefault(require("../models/note.model"));
//CRUD Functions//
//Get all
const getNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lstNotes = yield note_model_1.default.findAll();
    res.json(lstNotes);
});
exports.getNotes = getNotes;
//GET by ID
const getNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const note = yield note_model_1.default.findByPk(id);
    if (note) {
        res.json(note);
    }
    else {
        res.json({
            msg: `There isnt note with ${id} id`,
        });
    }
});
exports.getNote = getNote;
//Delete by ID
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const note = yield note_model_1.default.findByPk(id);
    if (!note) {
        res.status(404).json({
            smg: `There isnt note with ${id} id`
        });
    }
    else {
        yield note.destroy();
        res.json({
            msg: `Note deleted`
        });
    }
});
exports.deleteNote = deleteNote;
//Create with body (POST)
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield note_model_1.default.create(body);
        res.json({
            msg: `the note was created successfuly`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Something goes wrong, call soport"
        });
    }
});
exports.createNote = createNote;
//Update with body and ID (PUT)
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const note = yield note_model_1.default.findByPk(id);
        if (note) {
            yield note.update(body);
            res.json({
                msg: `note updated successfuly`
            });
        }
        else {
            res.status(404).json({
                msg: `There isnt note with ${id} id`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Something goes wrong, call soport"
        });
    }
});
exports.updateNote = updateNote;
//************************************************************ */
//SELECT * FROM Users WHERE iud = iud_currentUser;
const getUiduserBd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userUid_fk = req.params.userUid_fk;
    const note = yield note_model_1.default.findAll({ where: { userUid_fk: userUid_fk } });
    if (note) {
        res.json(note);
    }
    else {
        res.json({
            smg: `There isnt note with that title getUserUidBd`
        });
    }
});
exports.getUiduserBd = getUiduserBd;
