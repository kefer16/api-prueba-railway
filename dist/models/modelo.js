"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modelo = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
exports.Modelo = connection_1.db.define("modelo", {
    id_modelo: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
    },
    mod_nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    mod_descripcion: {
        type: sequelize_1.DataTypes.STRING,
    },
    mod_foto: {
        type: sequelize_1.DataTypes.STRING,
    },
    mod_caracteristicas: {
        type: sequelize_1.DataTypes.STRING,
    },
    mod_color: {
        type: sequelize_1.DataTypes.STRING,
    },
    mod_precio: {
        type: sequelize_1.DataTypes.STRING,
    },
    mod_fecha_registro: {
        type: sequelize_1.DataTypes.DATE,
    },
    mod_stock: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    mod_numero_series: {
        type: sequelize_1.DataTypes.STRING,
    },
    mod_activo: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    marca_id_marca: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    marca_categoria_id_categoria: {
        type: sequelize_1.DataTypes.NUMBER,
    },
}, { freezeTableName: true });
//# sourceMappingURL=modelo.js.map