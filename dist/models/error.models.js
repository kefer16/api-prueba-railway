"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
exports.Error = connection_1.db.define("error", {
    id: {
        type: "UNIQUEIDENTIFIER",
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    codigo: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    linea: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    objeto: {
        type: sequelize_1.DataTypes.STRING,
    },
    mensaje: {
        type: sequelize_1.DataTypes.STRING,
    },
    servidor: {
        type: sequelize_1.DataTypes.STRING,
    },
    fecha_registro: {
        type: sequelize_1.DataTypes.STRING,
    },
    fk_usuario: {
        type: sequelize_1.DataTypes.STRING,
    },
}, { freezeTableName: true });
//# sourceMappingURL=error.models.js.map