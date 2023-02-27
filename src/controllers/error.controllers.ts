import { Error } from "../models/error.models";
import { convertirFechaLocal } from "../utils/fecha.utils";

const date = new Date();
export const grabarError = async (p_error: any) => {
	try {
		const error_create = await Error.create({
			codigo: p_error.parent.number,
			linea: p_error.parent.lineNumber,
			objeto: p_error.parent.procName,
			mensaje: p_error.message,
			servidor: p_error.parent.serverName,
			fecha_registro: convertirFechaLocal(date),
			fk_usuario: "1449D5D0",
		});
		console.log(error_create);

		// await error_create.save();
	} catch (error) {}
};
