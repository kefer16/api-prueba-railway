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

export const postUsuario = async (req: Request, res: Response) => {
	const { body } = req.body;

	try {
		const existeUsuario = await Usuario.findOne({
			where: {
				mod_numero_series: body.mod_numero_series,
			},
		});
		if (existeUsuario) {
			return res.json({
				msg: `ya existe el numero de serie ${body.mod_numero_series}`,
			});
		}

		const usuario = new Usuario();
		await usuario.save(body);
		return res.json({ usuario });
	} catch (error) {
		console.log(error);

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
