import { Response, Request } from "express";
import { handleHttp } from "../utils/error.handler";
// import { getAllCategories_services } from "../services/categoryService";

const getDepartment = async (req: Request, res: Response) => {
	try {
		console.log(req);
		
		res.send(req.body);
	} catch (error) {
		handleHttp(res, "ERROR_GET_DEPARTAMENT");
	}
};

const getDepartments = async (req: Request, res: Response) => {
	try {
		res.send(req.body);
	} catch (error) {
		handleHttp(res, "ERROR_GET_DEPARTAMENTS");
	}
};
const updateDepartment = async (req: Request, res: Response) => {
	try {
		res.send(req.body);
	} catch (error) {
		handleHttp(res, "ERROR_UPDATE_DEPARTAMENT");
	}
};
const postDepartment = async (req: Request, res: Response) => {
	try {
		res.send(req.body);
	} catch (error) {
		handleHttp(res, "ERROR_POST_DEPARTAMENT");
	}
};
const deleteDepartment = async (req: Request, res: Response) => {
	try {
		res.send(req.body);
	} catch (error) {
		handleHttp(res, "ERROR_DELETE_DEPARTAMENT");
	}
};

export {
	getDepartment,
	getDepartments,
	updateDepartment,
	postDepartment,
	deleteDepartment,
};
