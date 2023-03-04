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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = require("../db/connection");
class Server {
    constructor() {
        this.apiPaths = {
            usuario: "/api/usuario",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.API_PORT || "8090";
        this.dbConnection();
        this.middlewares();
        //definir mis rutas
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.db.authenticate();
                console.log("database online");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        //cors
        this.app.use((0, cors_1.default)());
        //lectura del body
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.usuario, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en el puerto ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map