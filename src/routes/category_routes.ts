import { Router } from "express";
import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from "../controllers/category_controller"

const categoryRouter = Router();


categoryRouter.post("/", createCategory);
categoryRouter.get("/", getCategories);
categoryRouter.get("/:categoryId", getCategoryById);
categoryRouter.delete("/", deleteCategory);
categoryRouter.patch("/", updateCategory);

export { categoryRouter };
