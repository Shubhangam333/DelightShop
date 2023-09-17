/**
 * ! Authentication Middleware
 */
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { UnauthorizedError } from "../errors/customErrors.js";
import { User } from "../models/userModel.js";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthorizedError("You are not allowed to access this resource");
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
};

/**
 * ! Admin check Middleware
 */

export const isAdmin = async (req, res, next) => {
  if (req.user.role !== "admin") {
    throw new UnauthorizedError("You are not allowed to access this resource");
  }
  next();
};
