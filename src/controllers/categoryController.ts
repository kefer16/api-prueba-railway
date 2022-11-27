import { Response, Request } from "express";
import { getAllCategories_services } from "../services/categoryService";

export const getAllCategories = async (_req: Request, res: Response) => {
	let allCategories = await getAllCategories_services();
	res.send({ response: "OK", data: allCategories });
};

// const getOneCategory = async (req, res) => {
// 	console.log(req.params);
// 	//console.log(req.query); recibir datos como query parameters
// 	// console.log(req.body);
// 	// console.log(req.body.user);
// 	// if (req.accepts('text/html')) {
// 	// 	return res.status(406).json({
// 	// 		ok: false,
// 	// 		msg: 'No hay token en la peticion',
// 	// 	});
// 	// }
// 	let oneCategories = await categorieService.getOneCategory(
// 		req.params.categoryId
// 	);
// 	res.send({ status: 'OK', data: oneCategories });
// };

// const postInsertCategories = async (req, res) => {
// 	let categoria = { ...req.body };
// 	let insertCategory = await categorieService.postInsertCategory(categoria);
// 	res.send({
// 		status: insertCategory.codigo_estado,
// 		message: insertCategory.mensaje,
// 		data: insertCategory.datos == null ? [] : JSON.parse(insertCategory.datos),
// 		error: {
// 			message: insertCategory.error_mensaje,
// 			line: insertCategory.error_linea,
// 			proc: insertCategory.error_procedimiento,
// 		},
// 	});
// };

// export default {
// 	getAllCategories,
// 	getOneCategory,
// 	postInsertCategories,
// };
