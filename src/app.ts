import "dotenv/config";
// import express from "express";
// import cors from "cors";
// import { routerApp } from "./routes/Departaments.router";
import { Server } from "./models/server";

// const PORT = process.env.API_SV_PORT;
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use("/gamertec-api", routerApp);

const server = new Server();

server.listen();
