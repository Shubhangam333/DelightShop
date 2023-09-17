import { body, validationResult } from "express-validator";
import { User } from "../models/userModel.js";
import { BadRequestError, UnauthorizedError } from "../errors/customErrors.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("not authorized")) {
          throw new UnauthorizedError("not authorized to access this resource");
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

/**
 * ! User Validation
 */

export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
]);
export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new BadRequestError("Your account does not exist");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
]);

/**
 * ! Category Validation
 */

export const validateCategoryInput = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("Category Name is required")
    .isLength({ max: 15 })
    .withMessage("Category Name should be less than 15 Characters Long"),
  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ max: 100 })
    .withMessage("Category Description must be less than 40 characters long"),
]);

/**
 * ! Product Validation
 */
