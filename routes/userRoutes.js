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
} from "../controllers/userController.js";

import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router
  .route("/user/:userId")
  .get(isAuthenticated, getUserProfileDetails)
  .get(isAuthenticated, isAdmin, getSingleUserDetails);

/**
 * !Admin Routes
 */
router.get("/getAllUsers", getAllUsers);
router.put("/block-user", isAuthenticated, isAdmin, blockUser);
router.put("/unblock-user", isAuthenticated, isAdmin, unblockUser);
router.delete("/delete-user", isAuthenticated, isAdmin, deleteUser);
