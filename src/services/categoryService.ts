import { getAllCategories_sql } from "../databases/sql/category";

export const getAllCategories_services = async () => {
	const allCategories: any = await getAllCategories_sql();
	return allCategories;
};

// const getOneCategory = async (cat_id) => {
// 	let oneCategories = await Categories.getOneCategory(cat_id);
// 	return oneCategories[0];
// };

// const postInsertCategory = async (categoria) => {
// 	let insertCategory = await Categories.postInsertCategories(categoria);
// 	return insertCategory[0][0];
// };
// export default {
// 	getAllCategories,
// 	getOneCategory,
// 	postInsertCategory,
// };
