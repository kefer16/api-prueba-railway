import "dotenv/config";

export class Credential {
	readonly host: string = process.env.MYSQLHOST || "";
	readonly database: string = process.env.MYSQLDATABASE || "";
	readonly port: number = parseInt(process.env.MYSQLPORT || "0");
	readonly user: string = process.env.MYSQLUSER || "";
	readonly password: string = process.env.MYSQLPASSWORD || "";
}


