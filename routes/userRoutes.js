import express from "express";
import {
  blockUser,
  deleteUser,
  getAllUsers,
  getSingleUserDetails,
  getUserProfileDetails,
  login,
  register,
  unblockUser,
  logout,
} from "../controllers/userController.js";

import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);
router.route("/profile/me").get(isAuthenticated, getUserProfileDetails);

/**
 * !Admin Routes
 */
router
  .route("/user/:userId")
  .get(isAuthenticated, isAdmin, getSingleUserDetails);
router.get("/getAllUsers", isAuthenticated, isAdmin, getAllUsers);
router.put("/block-user/:userId", isAuthenticated, isAdmin, blockUser);
router.put("/unblock-user/:userId", isAuthenticated, isAdmin, unblockUser);
router.delete("/delete-user/:userId", isAuthenticated, isAdmin, deleteUser);

export default router;
