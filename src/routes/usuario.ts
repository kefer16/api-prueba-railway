import { Router } from "express";
import {
	deleteUsuario,
	getPrueba,
	getUsuario,
	getUsuarios,
	postUsuario,
	putUsuario,
} from "../controllers/usuario.controllers";

const router = Router();

router.get("/", getUsuarios);
router.get("/prueba/", getPrueba);
router.get("/:id", getUsuario);
router.post("/insert/", postUsuario);
router.put("/update/:id", putUsuario);
router.delete("/delete/:id", deleteUsuario);

export default router;
