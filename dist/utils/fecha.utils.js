"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertirFechaLocal = void 0;
const convertirFechaLocal = () => {
    var local = new Date();
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
    return local.toJSON();
};
exports.convertirFechaLocal = convertirFechaLocal;
//# sourceMappingURL=fecha.utils.js.map