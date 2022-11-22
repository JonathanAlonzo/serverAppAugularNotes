"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('app_note', 'root', '&&Jonathan&&', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = exports.sequelize;
