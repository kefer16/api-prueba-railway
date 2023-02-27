import { DataTypes } from "sequelize";
import { db } from "../db/connection";

export const Usuario = db.define(
	"usuario",
	{
		id: {
			type: "UNIQUEIDENTIFIER",
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		nombre: {
			type: DataTypes.STRING,
		},
		apellido: {
			type: DataTypes.STRING,
		},
		correo: {
			type: DataTypes.STRING,
		},
		usuario: {
			type: DataTypes.STRING,
		},
		contrasenia: {
			type: DataTypes.STRING,
		},
		dinero: {
			type: DataTypes.DOUBLE,
		},
		fecha_registro: {
			type: DataTypes.DATE,
		},
		activo: {
			type: DataTypes.BOOLEAN,
		},
		fk_privilegio: {
			type: DataTypes.STRING,
		},
		fecha_inicial: {
			type: DataTypes.DATE,
		},
		fecha_final: {
			type: DataTypes.DATE,
		},
	},
	{ freezeTableName: true }
);
