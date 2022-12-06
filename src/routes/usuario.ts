import { Router } from "express";
import {
	deleteUsuario,
	getUsuario,
	getUsuarios,
	postUsuario,
	putUsuario,
} from "../controllers/usuario";

const router = Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.post("/insert/", postUsuario);
router.put("/update/:id", putUsuario);
router.delete("/delete/:id", deleteUsuario);

export default router;
