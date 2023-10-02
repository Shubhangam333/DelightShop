import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
  getCategoryDetails,
} from "../controllers/categoryController.js";
import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";
import { validateCategoryInput } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post(
  "/createCategory",
  isAuthenticated,
  isAdmin,
  validateCategoryInput,
  createCategory
);
router.get("/category", getAllCategories);
router.get(
  "/category/:categoryId",
  isAuthenticated,
  isAdmin,
  getCategoryDetails
);
router.put("/category/:categoryId", isAuthenticated, isAdmin, updateCategory);
router.delete(
  "/category/:categoryId",
  isAuthenticated,
  isAdmin,
  deleteCategory
);

export default router;
