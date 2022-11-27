require("dotenv").config();
import express from "express";
import cors from "cors";
import { routerApp } from "./src/v1/routers/categoryRouters";


const app = express();
const PORT = process.env.API_SV_PORT;

app.use(cors());
app.use("/api", routerApp);

app.listen(PORT, () => {	
	console.log(`Server escuchando en el puerto ${PORT}`);
});

