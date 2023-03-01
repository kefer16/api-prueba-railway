import { Request, Response } from "express";
import { ApiEnvio } from "../models/api_envio.models";
import { convertirFechaLocal } from "../utils/fecha.utils";

export const grabarEnvioAPI = async (code_send: string, req: Request) => {
	await ApiEnvio.create({
		send_code: code_send,
		request_type: req.method.toString() ?? "",
		url:
			"http://" +
			req.headers.host?.toString() +
			"/" +
			req.hostname.toString() +
			req.originalUrl.toString(),
		params: JSON.stringify(req.query) ?? "",
		key: req.headers.authorization?.toString() ?? "",
		headers: JSON.stringify(req.headers) ?? "",
		content_type: req.headers["content-type"]?.toString() ?? "",
		body: JSON.stringify(req.body) ?? "",
		response: "",
		user_agent: req.headers["user-agent"]?.toString() ?? "",
		creation_date: convertirFechaLocal(),
		fk_usuario: "CB6A980F-4ABE-434E-B3B5-98376948E100",
		status_code: "",
	});
};

export const grabarRespuestaAPI = async (
	code_send: string,
	data: object,
	res: Response
) => {
	await ApiEnvio.create({
		send_code: code_send,
		request_type: "",
		url: "",
		params: "",
		key: "",
		headers: "",
		content_type: "",
		body: "",
		response: JSON.stringify(data) ?? "",
		user_agent: "",
		creation_date: convertirFechaLocal(),
		fk_usuario: "CB6A980F-4ABE-434E-B3B5-98376948E100",
		status_code: res.statusCode.toString() ?? "",
	});
};
