import express from "express";
import { isAuthenticated, isAdmin } from "../middleware/authMiddleware.js";
import {
  processPayment,
  sendstripeapikey,
  getPaymentInfo,
} from "../controllers/paymentController.js";

const router = express.Router();

router.route("/payment/process").post(isAuthenticated, processPayment);
router.route("/sendstripeapikey").get(sendstripeapikey);
router.route("/payment/success").get(getPaymentInfo);

export default router;
