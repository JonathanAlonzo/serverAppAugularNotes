"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conn_1 = __importDefault(require("../db/conn"));
//Here is where said the Database table parameters ( Defining the model )
const Note = conn_1.default.define('Note', {
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    content: {
        type: sequelize_1.DataTypes.STRING
    },
    userUid_fk: {
        type: sequelize_1.DataTypes.STRING
    }
}, {});
exports.default = Note;
