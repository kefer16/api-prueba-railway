import { DataTypes } from "sequelize";
import { db } from "../db/connection";

export const Producto = db.define(
	"producto",
	{
		id_producto: {
			type: DataTypes.NUMBER,
			primaryKey: true,
		},
		pro_numero_serial: {
			type: DataTypes.STRING,
		},
		modelo_id_modelo: {
			type: DataTypes.NUMBER,
		},

		modelo_marca_id_marca: {
			type: DataTypes.NUMBER,
		},
		modelo_marca_categoria_idcategoria: {
			type: DataTypes.NUMBER,
		},
	},
	{ freezeTableName: true }
);
