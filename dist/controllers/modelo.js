"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteModelo = exports.putModelo = exports.postModelo = exports.getModelo = exports.getModelos = void 0;
const modelo_1 = require("../models/modelo");
const getModelos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const modelos = yield modelo_1.Modelo.findAll();
    res.json({
        modelos,
    });
});
exports.getModelos = getModelos;
const getModelo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const modelo = yield modelo_1.Modelo.findByPk(id);
    res.json({
        modelo,
    });
});
exports.getModelo = getModelo;
const postModelo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req.body;
    try {
        const existeSerie = yield modelo_1.Modelo.findOne({
            where: {
                mod_numero_series: body.mod_numero_series,
            },
        });
        if (existeSerie) {
            return res.json({
                msg: `ya existe el numero de serie ${body.mod_numero_series}`,
            });
        }
        const modelo = new modelo_1.Modelo();
        yield modelo.save(body);
        return res.json({ modelo });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            endPoint: "postModelo",
            msg: "Hable con el administrador",
        });
    }
});
exports.postModelo = postModelo;
const putModelo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req.body;
    try {
        const modelo = yield modelo_1.Modelo.findByPk(id);
        if (!modelo) {
            return res.status(404).json({
                msg: `No existe un modelo con id: ${id}`,
            });
        }
        yield modelo.update(body);
        return res.json({ modelo });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            endPoint: "postModelo",
            msg: "Hable con el administrador",
        });
    }
});
exports.putModelo = putModelo;
const deleteModelo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const modelo = yield modelo_1.Modelo.findByPk(id);
        if (!modelo) {
            return res.status(404).json({
                msg: `No existe un modelo con id: ${id}`,
            });
        }
        yield modelo.update({ mod_activo: false });
        return res.json({ modelo });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            endPoint: "deleteModelo",
            msg: "Hable con el administrador",
        });
    }
});
exports.deleteModelo = deleteModelo;
//# sourceMappingURL=modelo.js.map