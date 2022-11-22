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
exports.getUserByUid = exports.getUser = exports.deleteUser = exports.createUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
/* CRUD Functions */
//CREATE WITH BODY
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield user_model_1.default.create(body);
        res.json({
            smg: "The user was created successfully"
        });
    }
    catch (error) {
        res.json({
            msg: "Something goes wrong, read the error above"
        });
        console.log(error);
    }
});
exports.createUser = createUser;
//DELETE BY ID
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_model_1.default.findByPk(id);
    if (!user) {
        res.status(404).json({
            smg: `There isnt user with ${id} id value`
        });
    }
    else {
        yield user.destroy();
        res.json({
            msg: `User deleted successfuly`
        });
    }
});
exports.deleteUser = deleteUser;
//GET USER BY UID
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const user = yield user_model_1.default.findOne({ where: { uid: uid } });
    if (user) {
        res.json(user);
    }
    else {
        res.json({
            msg: `There isnt User with ${uid} uid`,
        });
    }
});
exports.getUser = getUser;
//GET BY IUD
const getUserByUid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userUid = req.params.uid;
    const user = yield user_model_1.default.findOne({ where: { uid: userUid } });
    if (user) {
        res.json(user);
    }
    else {
        res.json(user);
    }
});
exports.getUserByUid = getUserByUid;
//UPDATE WITH BODY AND ID (PUT ACTION)
