"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notes_router_1 = __importDefault(require("../routes/notes.router"));
class Conn {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares(); //always before routes method
        this.rotes();
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
    }
    midlewares() {
        //here is we parser the body when we sent a post
        this.app.use(express_1.default.json());
    }
}
//This export will work with others files
exports.default = Conn;
