"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
exports.Usuario = connection_1.db.define("usuario", {
    id: {
        type: "UNIQUEIDENTIFIER",
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
    },
    contrasenia: {
        type: sequelize_1.DataTypes.STRING,
    },
    dinero: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    fecha_registro: {
        type: sequelize_1.DataTypes.DATE,
    },
    activo: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    fk_privilegio: {
        type: sequelize_1.DataTypes.STRING,
    },
    fecha_inicial: {
        type: sequelize_1.DataTypes.DATE,
    },
    fecha_final: {
        type: sequelize_1.DataTypes.DATE,
    },
}, { freezeTableName: true });
//# sourceMappingURL=usuario.models.js.map