"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
// import express from "express";
// import jwt from "jsonwebtoken";
// import cors from "cors";
// import { routerApp } from "./routes/Departaments.router";
const server_1 = require("./models/server");
// const PORT = process.env.API_SV_PORT;
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/gamertec-api", routerApp);
const server = new server_1.Server();
server.listen();
//# sourceMappingURL=app.js.map