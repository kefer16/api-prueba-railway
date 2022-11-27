import express from "express";
import { getAllCategories } from "../../controllers/categoryController";
const router = express.Router();

export const routerApp = router
	.get("/departamentos/", getAllCategories)
	.get("/", () => {
		console.log("hola");
	});

// .get("/category/:categoryId", categoriesController.getOneCategory)
// .post(
//   "/category/category_insert",
//   express.json({ type: "application/json" }),
//   categoriesController.postInsertCategories
// );

// export default router;
