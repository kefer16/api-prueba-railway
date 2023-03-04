"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiEnvio = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
exports.ApiEnvio = connection_1.db.define("api_envio", {
    id: {
        type: "UNIQUEIDENTIFIER",
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    send_code: {
        type: "UNIQUEIDENTIFIER",
        allowNull: false,
    },
    request_type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    params: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    key: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    headers: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    content_type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    response: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    user_agent: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    creation_date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fk_usuario: {
        type: "UNIQUEIDENTIFIER",
        allowNull: false,
    },
    status_code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { freezeTableName: true });
//# sourceMappingURL=api_envio.models.js.map