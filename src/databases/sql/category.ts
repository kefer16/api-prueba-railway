import { connection } from "../bdconfig";
import { RowDataPacket, OkPacket, ResultSetHeader } from "mysql2";
export const getAllCategories_sql = async () => {
	try {
		const categorias:
			| RowDataPacket[]
			| RowDataPacket[][]
			| OkPacket
			| OkPacket[]
			| ResultSetHeader = await connection
			.promise()
			.query("select * from departamento")
			.then(([rows]) => {
				return rows;
			});

		console.log(categorias);

		return categorias;
	} catch (error) {
		return error;
	}
};

// const getOneCategory = async (cat_id) => {
// 	try {
// 		let pool = await sql.connect(bdconfig);
// 		let categorias = await pool
// 			.request()
// 			.input('input_parameter', sql.Int, cat_id)
// 			.query('SELECT * FROM TMP_CATEGORIA where cat_id = @input_parameter');
// 		return categorias.recordsets;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// const postInsertCategories = async (categoria) => {
// 	console.log(categoria);
// 	console.log(categoria.cat_id);
// 	try {
// 		let pool = await sql.connect(bdconfig);
// 		let Insertcate = await pool
// 			.request()
// 			.input('cat_id', sql.Int, categoria.cat_id)
// 			.input('cat_nom', sql.VarChar, categoria.cat_nom)
// 			.input('cat_obs', sql.VarChar, categoria.cat_nom)
// 			.execute('nps_insert_cat');

// 		return Insertcate.recordsets;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// module.exports = {
// 	getAllCategories,
// 	getOneCategory,
// 	postInsertCategories,
// };
