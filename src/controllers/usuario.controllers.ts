import { Request, Response } from "express";
import { Usuario } from "../models/usuario.models";
import { grabarEnvioAPI, grabarRespuestaAPI } from "./api_envio_controllers";
import { v4 as uuidv4 } from "uuid";
import { grabarError } from "./error.controllers";

export const getUsuarios = async (req: Request, res: Response) => {
	const code_send = uuidv4();
	let datos: object = {};

	try {
		await grabarEnvioAPI(code_send, req);

		const usuarios = await Usuario.findAll();

		datos = {
			msg: "getUsuarios",
			usuarios,
		};
		return res.json(datos);
	} catch (e: any) {
		await grabarError(e);

		datos = {
			endPoint: "getUsuarios",
			error: e.message,
			msg: "Hable con el administrador",
		};
		return res.status(500).json(datos);
	} finally {
		await grabarRespuestaAPI(code_send, datos, res);
	}
};

export const getUsuario = async (req: Request, res: Response) => {
	const code_send = uuidv4();
	let datos: object = {};

	try {
		await grabarEnvioAPI(code_send, req);

		const { id } = req.params;

		const usuario = await Usuario.findByPk(id);

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
	} catch (e: any) {
		console.log(typeof e);

		await grabarError(e);

		datos = {
			endPoint: "getUsuario",
			error: e.message,
			msg: "Hable con el administrador",
		};
		return res.status(500).json(datos);
	} finally {
		await grabarRespuestaAPI(code_send, datos, res);
	}
};

export const postUsuario = async (req: Request, res: Response) => {
	const { body } = req.body;

	try {
		const existeUsuario = await Usuario.findOne({
			where: {
				id: body.id,
			},
		});
		if (existeUsuario) {
			return res.json({
				msg: `ya existe este usuario con codigo:[${body.mod_numero_series}]`,
			});
		}

		const usuario = new Usuario();
		await usuario.save(body);
		return res.json({ usuario });
	} catch (error) {
		return res.status(500).json({
			endPoint: "postUsuario",
			msg: "Hable con el administrador",
		});
	}
};

export const putUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req.body;
	try {
		const usuario = await Usuario.findByPk(id);

		if (!usuario) {
			return res.status(404).json({
				msg: `No existe un usuario con id: ${id}`,
			});
		}

		await usuario.update(body);

		return res.json({ usuario });
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			endPoint: "putUsuario",
			msg: "Hable con el administrador",
		});
	}
};

export const deleteUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const usuario = await Usuario.findByPk(id);

		if (!usuario) {
			return res.status(404).json({
				msg: `No existe un usuario con el id: ${id}`,
			});
		}
		await usuario.update({ usu_activo: false });

		return res.json({
			msg: "deleteUsuario",
			id,
		});
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			endPoint: "deleteUsuario",
			msg: "Hable con el administrador",
		});
	}
};
