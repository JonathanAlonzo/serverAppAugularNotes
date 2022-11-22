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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notes_router_1 = __importDefault(require("../routes/notes.router"));
const user_roter_1 = __importDefault(require("../routes/user.roter"));
const conn_1 = __importDefault(require("../db/conn"));
class Conn {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares(); //always before routes method
        this.rotes();
        this.dbConn();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App running in port ${this.port}`);
        });
    }
    rotes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'Hi from conn.ts'
            });
        });
        this.app.use('/api/notes', notes_router_1.default);
        this.app.use('/api/users', user_roter_1.default);
    }
    midlewares() {
        //here is we parser the body when we sent a post
        this.app.use(express_1.default.json());
        //Cors
        this.app.use((0, cors_1.default)());
    }
    //method connection to BD MySQL Workbench
    dbConn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conn_1.default.authenticate();
                console.log('the connection to bd app_note was successfully');
            }
            catch (error) {
                console.log(error);
                console.log('connection fail');
            }
        });
    }
}
//This export will work with others files
exports.default = Conn;
