"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conn_1 = __importDefault(require("../db/conn"));
const User = conn_1.default.define('User', {
    user_name: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    photoUrl: {
        type: sequelize_1.DataTypes.STRING
    },
    uid: {
        type: sequelize_1.DataTypes.STRING
    }
}, {});
exports.default = User;
