import { DataTypes } from "sequelize";
import { db } from "../db/connection";

export const Usuario = db.define(
	"usuario",
	{
		id_usuario: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		usu_nombre: {
			type: DataTypes.STRING,
		},
		usu_apellido: {
			type: DataTypes.STRING,
		},
		usu_correo: {
			type: DataTypes.STRING,
		},
		usu_usuario: {
			type: DataTypes.STRING,
		},
		usu_contrasenia: {
			type: DataTypes.STRING,
		},
		usu_dinero: {
			type: DataTypes.DOUBLE,
		},
		usu_foto: {
			type: DataTypes.STRING,
		},
		usu_fecha_registro: {
			type: DataTypes.STRING,
		},
		usu_activo: {
			type: DataTypes.BOOLEAN,
		},
		privilegio_id_privilegio: {
			type: DataTypes.INTEGER,
		},
	},
	{ freezeTableName: true }
);
