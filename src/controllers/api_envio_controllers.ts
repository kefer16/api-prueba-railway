import { Request, Response } from "express";
import { ApiEnvio } from "../models/api_envio.models";
import { v4 as uuidv4 } from "uuid";

export const grabarEnvioAPI = async (req: Request) => {
	const envio_create = await ApiEnvio.create({
		// id: "",
		send_code: uuidv4(),
		request_type: "",
		url: "",
		params: "",
		autorization_type: "",
		key: "",
		headers: "",
		content_type: "",
		body: req.body.toString(),
		response: "",
		user_agent: "",
		creation_date: "",
		fk_usuario: uuidv4(),
	});
	console.log(envio_create);
};

export const grabarRespuestaAPI = async (_res: Response) => {};
