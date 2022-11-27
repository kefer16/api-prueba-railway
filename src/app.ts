import "dotenv/config";
import express from "express";
import cors from "cors";
import { routerApp } from "./routes/Departaments.router";

const app = express();
const PORT = process.env.API_SV_PORT;

app.use(cors());
app.use(express.json);
app.use("/hola", routerApp);

app.listen(PORT, () => {
	console.log(`Server escuchando en el puerto ${PORT}`);
});
