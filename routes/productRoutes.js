import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductDetails,
  updateProduct,
  createProductReview,
} from "../controllers/productController.js";
import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/createProduct", isAuthenticated, isAdmin, createProduct);
router.get("/product/:productId", getProductDetails);
router.put("/product/:productId", isAuthenticated, isAdmin, updateProduct);
router.delete("/product/:productId", isAuthenticated, isAdmin, deleteProduct);
router.get("/getAllProducts", getAllProducts);

router.route("/review").put(isAuthenticated, createProductReview);

export default router;
