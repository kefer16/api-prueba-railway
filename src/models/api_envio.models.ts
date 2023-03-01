import { DataTypes } from "sequelize";
import { db } from "../db/connection";

export const ApiEnvio = db.define(
	"api_envio",
	{
		id: {
			type: "UNIQUEIDENTIFIER",
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		send_code: {
			type: "UNIQUEIDENTIFIER",
			allowNull: false,
		},
		request_type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		url: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		params: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		key: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		headers: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		content_type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		body: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		response: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_agent: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		creation_date: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		fk_usuario: {
			type: "UNIQUEIDENTIFIER",
			allowNull: false,
		},
		status_code: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ freezeTableName: true }
);
