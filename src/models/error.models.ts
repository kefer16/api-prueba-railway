import { DataTypes } from "sequelize";
import { db } from "../db/connection";

export const Error = db.define(
	"error",
	{
		id: {
			type: "UNIQUEIDENTIFIER",
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		codigo: {
			type: DataTypes.INTEGER,
		},
		linea: {
			type: DataTypes.INTEGER,
		},
		objeto: {
			type: DataTypes.STRING,
		},
		mensaje: {
			type: DataTypes.STRING,
		},
		servidor: {
			type: DataTypes.STRING,
		},
		fecha_registro: {
			type: DataTypes.STRING,
		},
		fk_usuario: {
			type: DataTypes.STRING,
		},
	},
	{ freezeTableName: true }
);
