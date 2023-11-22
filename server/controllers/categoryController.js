/**
 * ! Category Controllers
 */

import { StatusCodes } from "http-status-codes";
import { Category } from "../models/categoryModel.js";
import { NotFoundError } from "../errors/customErrors.js";

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

/**
 *  ! createCategory
 */

export const createCategory = async (req, res, next) => {
  const { name, description } = req.body;

  const category = await Category.create({
    name,
    description,
    user: req.user.id,
  });

  res.status(StatusCodes.CREATED).json({
    success: true,
    category,
  });
};

/**
 * ! Below three routes require product ID as a parameter
 * @param {productId} req
 */

export const getCategoryDetails = async (req, res, next) => {
  const category = await Category.findById(req.params.categoryId);

  if (!category) {
    throw new NotFoundError(
      `Category does not exist with Id: ${req.params.categoryId}`
    );
  }
  res.status(StatusCodes.OK).json({ success: "true", category });
};

export const updateCategory = async (req, res, next) => {
  const category = await Category.findById(req.params.categoryId);

  const newCategoryData = {
    name: req.body.name,
    description: req.body.description,
  };
  await Category.findByIdAndUpdate(req.params.categoryId, newCategoryData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(StatusCodes.OK).json({ success: "true", category });
};

export const deleteCategory = async (req, res, next) => {
  const category = await Category.findById(req.params.categoryId);

  if (!category) {
    throw new NotFoundError(
      `Category does not exist with Id: ${req.params.categoryId}`
    );
  }

  await category.deleteOne();

  res.status(StatusCodes.OK).json({
    success: true,
    message: "Deleted Category",
  });
};

/**
 *  ! getAllProducts
 */

export const getAllCategories = async (req, res, next) => {
  const categories = await Category.find();

  if (!categories) {
    throw new NotFoundError(`No Results Found`);
  }

  res.status(StatusCodes.OK).json({
    success: true,
    categories,
  });
};
