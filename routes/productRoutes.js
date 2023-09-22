import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductDetails,
  updateProduct,
} from "../controllers/productController.js";
import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/createProduct", isAuthenticated, isAdmin, createProduct);
router.get("/product/:productId", getProductDetails);
router.put("/product/:productId", isAuthenticated, isAdmin, updateProduct);
router.delete("/product/:productId", isAuthenticated, isAdmin, deleteProduct);
router.get("/getAllProducts", isAuthenticated, isAdmin, getAllProducts);

export default router;
