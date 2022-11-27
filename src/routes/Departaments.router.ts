import { Router } from "express";
import { getDepartments } from "../controllers/Departments.controller";
const router = Router();

export const routerApp = router
	.get("/departamentos/", getDepartments);

// .get("/category/:categoryId", categoriesController.getOneCategory)
// .post(
//   "/category/category_insert",
//   express.json({ type: "application/json" }),
//   categoriesController.postInsertCategories
// );

// export default router;
