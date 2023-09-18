import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductDetails,
  updateProduct,
} from "../controllers/productController.js";
import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";
import { validateProductInput } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post(
  "/createProduct",
  isAuthenticated,
  isAdmin,
  validateProductInput,
  createProduct
);
router.get("/product/:productId", isAuthenticated, isAdmin, getProductDetails);
router.put("/product/:productId", isAuthenticated, isAdmin, updateProduct);
router.delete("/product/:productId", isAuthenticated, isAdmin, deleteProduct);
router.get("/getAllProducts", isAuthenticated, isAdmin, getAllProducts);

export default router;
