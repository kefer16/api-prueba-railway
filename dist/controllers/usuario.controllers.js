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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = exports.getPrueba = void 0;
const usuario_models_1 = require("../models/usuario.models");
const api_envio_controllers_1 = require("./api_envio_controllers");
const uuid_1 = require("uuid");
const error_controllers_1 = require("./error.controllers");
const getPrueba = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let datos = {};
    datos = {
        msg: "getPrueba",
        mensaje: "funcionando",
    };
    return res.status(200).json(datos);
});
exports.getPrueba = getPrueba;
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const code_send = (0, uuid_1.v4)();
    let datos = {};
    try {
        yield (0, api_envio_controllers_1.grabarEnvioAPI)(code_send, req);
        const usuarios = yield usuario_models_1.Usuario.findAll();
        datos = {
            msg: "getUsuarios",
            usuarios,
        };
        return res.json(datos);
    }
    catch (e) {
        yield (0, error_controllers_1.grabarError)(e);
        datos = {
            endPoint: "getUsuarios",
            error: e.message,
            msg: "Hable con el administrador",
        };
        return res.status(500).json(datos);
    }
    finally {
        yield (0, api_envio_controllers_1.grabarRespuestaAPI)(code_send, datos, res);
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const code_send = (0, uuid_1.v4)();
    let datos = {};
    try {
        yield (0, api_envio_controllers_1.grabarEnvioAPI)(code_send, req);
        const { id } = req.params;
        const usuario = yield usuario_models_1.Usuario.findByPk(id);
        if (!usuario) {
            datos = {
                msg: `No existe un usuario con el id: ${id}`,
            };
            return res.status(404).json(datos);
        }
        datos = {
            msg: "getUsuario",
            id,
            usuario,
        };
        return res.status(200).json(datos);
    }
    catch (e) {
        console.log(typeof e);
        yield (0, error_controllers_1.grabarError)(e);
        datos = {
            endPoint: "getUsuario",
            error: e.message,
            msg: "Hable con el administrador",
        };
        return res.status(500).json(datos);
    }
    finally {
        yield (0, api_envio_controllers_1.grabarRespuestaAPI)(code_send, datos, res);
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req.body;
    try {
        const existeUsuario = yield usuario_models_1.Usuario.findOne({
            where: {
                id: body.id,
            },
        });
        if (existeUsuario) {
            return res.json({
                msg: `ya existe este usuario con codigo:[${body.mod_numero_series}]`,
            });
        }
        const usuario = new usuario_models_1.Usuario();
        yield usuario.save(body);
        return res.json({ usuario });
    }
    catch (error) {
        return res.status(500).json({
            endPoint: "postUsuario",
            msg: "Hable con el administrador",
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req.body;
    try {
        const usuario = yield usuario_models_1.Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe un usuario con id: ${id}`,
            });
        }
        yield usuario.update(body);
        return res.json({ usuario });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            endPoint: "putUsuario",
            msg: "Hable con el administrador",
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield usuario_models_1.Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe un usuario con el id: ${id}`,
            });
        }
        yield usuario.update({ usu_activo: false });
        return res.json({
            msg: "deleteUsuario",
            id,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            endPoint: "deleteUsuario",
            msg: "Hable con el administrador",
        });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuario.controllers.js.map