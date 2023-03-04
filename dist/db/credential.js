"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credential = void 0;
require("dotenv/config");
class Credential {
    constructor() {
        this.host = process.env.DB_HOST || "";
        this.database = process.env.DB_DATABASE || "";
        this.port = parseInt(process.env.DB_PORT || "0");
        this.user = process.env.DB_USER || "";
        this.password = process.env.DB_PASSWORD || "";
    }
}
exports.Credential = Credential;
//# sourceMappingURL=credential.js.map