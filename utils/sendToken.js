import { StatusCodes } from "http-status-codes";
import { generateToken } from "./tokenutils.js";

export const sendToken = (user, res) => {
  const token = generateToken(user);

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(StatusCodes.OK).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};
