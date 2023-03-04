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
exports.grabarError = void 0;
const error_models_1 = require("../models/error.models");
const fecha_utils_1 = require("../utils/fecha.utils");
const grabarError = (p_error) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const error_create = yield error_models_1.Error.create({
            codigo: p_error.parent.number,
            linea: p_error.parent.lineNumber,
            objeto: p_error.parent.procName,
            mensaje: p_error.message,
            servidor: p_error.parent.serverName,
            fecha_registro: (0, fecha_utils_1.convertirFechaLocal)(),
            fk_usuario: "1449D5D0",
        });
        console.log(error_create);
        // await error_create.save();
    }
    catch (error) { }
});
exports.grabarError = grabarError;
//# sourceMappingURL=error.controllers.js.map