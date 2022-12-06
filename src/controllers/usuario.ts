import { Request, Response } from "express";
import { Usuario } from "../models/usuario";

export const getUsuarios = async (_req: Request, res: Response) => {
	const usuarios = await Usuario.findAll();
	res.json({
		msg: "getUsuarios",
		usuarios,
	});
};

export const getUsuario: any = async (req: Request, res: Response) => {
	const { id } = req.params;
	const usuario = await Usuario.findByPk(id);

	if (!usuario) {
		return res.status(404).json({
			msg: `No existe un usuario con el id: ${id}`,
		});
	}

	return res.json({
		msg: "getUsuario",
		id,
		usuario,
	});
};

export const postUsuario = (req: Request, res: Response) => {
	const { body } = req;

	res.json({
		msg: "postUsuario",
		body,
	});
};

export const putUsuario = (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;

	res.json({
		msg: "putUsuario",
		id,
		body,
	});
};

export const deleteUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;

	const usuario = await Usuario.findByPk(id);

	if (!usuario) {
		return res.status(404).json({
			msg: `No existe un usuario con el id: ${id}`,
		});
	}
	await usuario.update({usu_activo: false});

	return res.json({
		msg: "deleteUsuario",
		id,
	});
};
