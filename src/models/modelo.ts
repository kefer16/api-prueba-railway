import { DataTypes } from "sequelize";
import { db } from "../db/connection";

export const Modelo = db.define(
	"modelo",
	{
		id_modelo: {
			type: DataTypes.NUMBER,
			primaryKey: true,
		},
		mod_nombre: {
			type: DataTypes.STRING,
		},
		mod_descripcion: {
			type: DataTypes.STRING,
		},
		mod_foto: {
			type: DataTypes.STRING,
		},
		mod_caracteristicas: {
			type: DataTypes.STRING,
		},
		mod_color: {
			type: DataTypes.STRING,
		},
		mod_precio: {
			type: DataTypes.STRING,
		},
		mod_fecha_registro: {
			type: DataTypes.DATE,
		},
		mod_stock: {
			type: DataTypes.NUMBER,
		},
		mod_numero_series: {
			type: DataTypes.STRING,
		},
		mod_activo: {
			type: DataTypes.BOOLEAN,
		},
		marca_id_marca: {
			type: DataTypes.NUMBER,
		},
		marca_categoria_id_categoria: {
			type: DataTypes.NUMBER,
		},
	},
	{ freezeTableName: true }
);
