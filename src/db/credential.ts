import "dotenv/config";

export class Credential {
	readonly host: string = process.env.API_DB_HOST || "";
	readonly database: string = process.env.API_DB_DATABASE || "";
	readonly port: number = parseInt(process.env.API_DB_PORT || "0");
	readonly user: string = process.env.API_DB_USER || "";
	readonly password: string = process.env.API_DB_PASSWORD || "";
}


