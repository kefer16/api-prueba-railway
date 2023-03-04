"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
exports.Producto = connection_1.db.define("producto", {
    id_producto: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
    },
    pro_numero_serial: {
        type: sequelize_1.DataTypes.STRING,
    },
    modelo_id_modelo: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    modelo_marca_id_marca: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    modelo_marca_categoria_idcategoria: {
        type: sequelize_1.DataTypes.NUMBER,
    },
}, { freezeTableName: true });
//# sourceMappingURL=producto.js.map