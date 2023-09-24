import { isAuthenticated, isAdmin } from "../middleware/authMiddleware";
import {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController";

import express from "express";

const router = express.Router();

router.route("/order/new").post(isAuthenticated, newOrder);

router.route("/order/:id").get(isAuthenticated, getSingleOrder);

router.route("/orders/me").get(isAuthenticated, myOrders);

router.route("/admin/orders").get(isAuthenticated, isAdmin, getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticated, isAdmin, updateOrder)
  .delete(isAuthenticated, isAdmin, deleteOrder);
