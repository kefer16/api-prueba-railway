"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controllers_1 = require("../controllers/usuario.controllers");
const router = (0, express_1.Router)();
router.get("/", usuario_controllers_1.getUsuarios);
router.get("/prueba/", usuario_controllers_1.getPrueba);
router.get("/:id", usuario_controllers_1.getUsuario);
router.post("/insert/", usuario_controllers_1.postUsuario);
router.put("/update/:id", usuario_controllers_1.putUsuario);
router.delete("/delete/:id", usuario_controllers_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map