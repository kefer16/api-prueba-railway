require("dotenv").config();
import mysql from "mysql2";

export const connection: mysql.Connection = mysql.createConnection({
	host: process.env.API_DB_HOST,
	user: process.env.API_DB_USER,
	password: process.env.API_DB_PASSWORD,
	database: process.env.API_DB_DATABASE,
});
