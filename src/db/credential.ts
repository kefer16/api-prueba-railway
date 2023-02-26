import "dotenv/config";

export class Credential {
	readonly host: string = process.env.DB_HOST || "";
	readonly database: string = process.env.DB_DATABASE || "";
	readonly port: number = parseInt(process.env.DB_PORT || "0");
	readonly user: string = process.env.DB_USER || "";
	readonly password: string = process.env.DB_PASSWORD || "";
}
