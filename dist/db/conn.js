"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('app_note_db', 'joseenrique', 'univercidad@1', {
    host: 'utpserver1.mysql.database.azure.com',
    dialect: 'mysql'
});
exports.default = exports.sequelize;
