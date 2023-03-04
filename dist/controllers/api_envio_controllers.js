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
exports.grabarRespuestaAPI = exports.grabarEnvioAPI = void 0;
const api_envio_models_1 = require("../models/api_envio.models");
const fecha_utils_1 = require("../utils/fecha.utils");
const grabarEnvioAPI = (code_send, req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    yield api_envio_models_1.ApiEnvio.create({
        send_code: code_send,
        request_type: (_a = req.method.toString()) !== null && _a !== void 0 ? _a : "",
        url: "http://" +
            ((_b = req.headers.host) === null || _b === void 0 ? void 0 : _b.toString()) +
            "/" +
            req.hostname.toString() +
            req.originalUrl.toString(),
        params: (_c = JSON.stringify(req.query)) !== null && _c !== void 0 ? _c : "",
        key: (_e = (_d = req.headers.authorization) === null || _d === void 0 ? void 0 : _d.toString()) !== null && _e !== void 0 ? _e : "",
        headers: (_f = JSON.stringify(req.headers)) !== null && _f !== void 0 ? _f : "",
        content_type: (_h = (_g = req.headers["content-type"]) === null || _g === void 0 ? void 0 : _g.toString()) !== null && _h !== void 0 ? _h : "",
        body: (_j = JSON.stringify(req.body)) !== null && _j !== void 0 ? _j : "",
        response: "",
        user_agent: (_l = (_k = req.headers["user-agent"]) === null || _k === void 0 ? void 0 : _k.toString()) !== null && _l !== void 0 ? _l : "",
        creation_date: (0, fecha_utils_1.convertirFechaLocal)(),
        fk_usuario: "CB6A980F-4ABE-434E-B3B5-98376948E100",
        status_code: "",
    });
});
exports.grabarEnvioAPI = grabarEnvioAPI;
const grabarRespuestaAPI = (code_send, data, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _m, _o;
    yield api_envio_models_1.ApiEnvio.create({
        send_code: code_send,
        request_type: "",
        url: "",
        params: "",
        key: "",
        headers: "",
        content_type: "",
        body: "",
        response: (_m = JSON.stringify(data)) !== null && _m !== void 0 ? _m : "",
        user_agent: "",
        creation_date: (0, fecha_utils_1.convertirFechaLocal)(),
        fk_usuario: "CB6A980F-4ABE-434E-B3B5-98376948E100",
        status_code: (_o = res.statusCode.toString()) !== null && _o !== void 0 ? _o : "",
    });
});
exports.grabarRespuestaAPI = grabarRespuestaAPI;
//# sourceMappingURL=api_envio_controllers.js.map