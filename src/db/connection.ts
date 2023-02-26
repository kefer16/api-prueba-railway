import { Sequelize } from "sequelize";
import { Credential } from "./credential";

const { host, database, port, user, password } = new Credential();

export const db = new Sequelize(database, user, password, {
	host: host,
	port: port,
	dialect: "mssql",
	define: {
		timestamps: false,
	},
	// logging : false
});
