import { StatusCodes } from "http-status-codes";
import {
  NotFoundError,
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import { v2 as cloudinary } from "cloudinary";
import { User } from "../models/userModel.js";
import { sendToken } from "../utils/sendToken.js";

/**
 * ! User controllers
 */

// * Register Controller

// !POST request

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!req.body.avatar) {
    const data = {
      avatar: process.env.DEFAULT_AVATAR,
    };
  }
  const data = {
    avatar: req.body.avatar,
  };

  const myCloud = await cloudinary.uploader.upload(data.avatar, {
    folder: "avatars",
    width: 150,
    crop: "scale",
  });

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

  res
    .status(StatusCodes.CREATED)
    .json({ message: "User Registration Successful" });
};

// * Login Controller

// !POST request

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  const passwordMatched = user.comparePassword(password);

  if (!passwordMatched) {
    throw new UnauthenticatedError("Invalid Email or Password");
  }
  if (!user.isActive) {
    throw new UnauthorizedError("Your account has been blocked by admin");
  }

  sendToken(user, res);
};

export const logout = async (req, res, next) => {
  const options = {
    expires: new Date(Date.now()),
    httpOnly: true,
  };
  res.status(StatusCodes.OK).cookie("token", null, options).json({
    success: true,
    message: "Logout Successful",
  });
};

// * Profile Controller

/**
 * ! Get request
 * @param {userId} req
 */

export const getUserProfileDetails = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(StatusCodes.OK).json({ success: "true", user });
};

// Update User Profile

export const updateProfile = async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  if (req.body.avatar !== "") {
    const user = await User.findById(req.user.id);

    const imageId = user.avatar.public_id;

    await cloudinary.uploader.destroy(imageId);

    const myCloud = await cloudinary.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150,
      crop: "scale",
    });

    newUserData.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(StatusCodes.OK).json({
    success: true,
    user,
  });
};

export const updatePassword = async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    throw new UnauthorizedError("Old password is incorrect");
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    throw new UnauthorizedError("password does not match");
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, res);
};

/**
 * ! Admin Controllers
 */

// * Get information of an user

// !GET request

export const getSingleUserDetails = async (req, res, next) => {
  console.log(req.params.userId);
  const user = await User.findById(req.params.userId);

  if (!user) {
    throw new NotFoundError(
      `User does not exist with Id: ${req.params.userId}`
    );
  }
  res.status(StatusCodes.OK).json({ success: "true", user });
};

// * Fetch List of Users

// !GET request

export const getAllUsers = async (req, res, next) => {
  const users = await User.find();

  if (!users) {
    throw new NotFoundError(`No User found`);
  }

  res.status(StatusCodes.OK).json({
    success: true,
    users,
  });
};

// * Block a User

// !PUT request

export const blockUser = async (req, res, next) => {
  const user = await User.findById(req.params.userId);

  if (!user) {
    throw new NotFoundError(
      `User does not exist with Id: ${req.params.userId}`
    );
  }

  user.isActive = false;

  await user.save();

  res.status(StatusCodes.OK).json({
    success: true,
    message: "User Account has been blocked",
  });
};

// * UnBlock a User

// !PUT request

export const unblockUser = async (req, res, next) => {
  const user = await User.findById(req.params.userId);

  if (!user) {
    throw new NotFoundError(
      `User does not exist with Id: ${req.params.userId}`
    );
  }

  user.isActive = true;

  await user.save();

  res.status(StatusCodes.OK).json({
    success: true,
    message: "User Account has been Unblocked",
  });
};

// * Delete a User

// !DELETE request

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.userId);

  if (!user) {
    throw new NotFoundError(
      `User does not exist with Id: ${req.params.userId}`
    );
  }

  await cloudinary.uploader.destroy(user.avatar.public_id);

  await user.deleteOne();

  res.status(StatusCodes.OK).json({
    success: true,
    message: "User Account has been Removed from the system",
  });
};
