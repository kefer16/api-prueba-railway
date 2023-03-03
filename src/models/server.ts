import express, { Application } from "express";
import usuarioRutas from "../routes/usuario";
import cors from "cors";
import { db } from "../db/connection";

export class Server {
	private app: Application;
	private port: string;
	private apiPaths = {
		usuario: "/api/usuario",
	};
	constructor() {
		this.app = express();
		this.port = process.env.API_PORT || "8090";
		this.dbConnection();
		this.middlewares();
		//definir mis rutas
		this.routes();
	}
	async dbConnection() {
		try {
			await db.authenticate();
			console.log("database online");
		} catch (error: any) {
			throw new Error(error);
		}
	}
	middlewares() {
		//cors
		this.app.use(cors());
		//lectura del body
		this.app.use(express.json());
	}
	routes() {
		this.app.use(this.apiPaths.usuario, usuarioRutas);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`servidor corriendo en el puerto ${this.port}`);
		});
	}
}
