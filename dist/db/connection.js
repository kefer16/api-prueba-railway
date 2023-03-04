"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const credential_1 = require("./credential");
const { host, database, port, user, password } = new credential_1.Credential();
exports.db = new sequelize_1.Sequelize(database, user, password, {
    host: host,
    port: port,
    dialect: "mssql",
    define: {
        timestamps: false,
    },
    // logging : false
});
//# sourceMappingURL=connection.js.map