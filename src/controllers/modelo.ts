import { Request, Response } from "express";
import { Modelo } from "../models/modelo";

export const getModelos = async (_req: Request, res: Response) => {
	const modelos = await Modelo.findAll();

	res.json({
		modelos,
	});
};

export const getModelo = async (req: Request, res: Response) => {
	const { id } = req.params;
	const modelo = await Modelo.findByPk(id);

	res.json({
		modelo,
	});
};

export const postModelo = async (req: Request, res: Response) => {
	const { body } = req.body;
	try {
		const existeSerie = await Modelo.findOne({
			where: {
				mod_numero_series: body.mod_numero_series,
			},
		});
		if (existeSerie) {
			return res.json({
				msg: `ya existe el numero de serie ${body.mod_numero_series}`,
			});
		}

		const modelo = new Modelo();
		await modelo.save(body);
		return res.json({ modelo });
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			endPoint: "postModelo",
			msg: "Hable con el administrador",
		});
	}
};

export const putModelo = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req.body;
	try {
		const modelo = await Modelo.findByPk(id);

		if (!modelo) {
			return res.status(404).json({
				msg: `No existe un modelo con id: ${id}`,
			});
		}

		await modelo.update(body);

		return res.json({ modelo });
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			endPoint: "postModelo",
			msg: "Hable con el administrador",
		});
	}
};

export const deleteModelo = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const modelo = await Modelo.findByPk(id);

		if (!modelo) {
			return res.status(404).json({
				msg: `No existe un modelo con id: ${id}`,
			});
		}

		await modelo.update({ mod_activo: false });

		return res.json({ modelo });
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			endPoint: "deleteModelo",
			msg: "Hable con el administrador",
		});
	}
};
