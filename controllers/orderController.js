import { StatusCodes } from "http-status-codes";
import { Order } from "../models/orderModel.js";

export const newOrder = async (req, res, next) => {
  const { shippingInfo, orderItems, paymentInfo, itemsPrice } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(StatusCodes.CREATED).json({
    success: true,
    order,
  });
};
export const getSingleOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    throw new NotFoundError(`No Order Found with this id : ${req.params.id}`);
  }

  res.status(StatusCodes.OK).json({
    success: true,
    order,
  });
};
export const myOrders = async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(StatusCodes.OK).json({
    success: true,
    orders,
  });
};
export const getAllOrders = async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
};
export const updateOrder = async (req, res, next) => {};
export const deleteOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    throw new NotFoundError(`No Order Found with this id : ${req.params.id}`);
  }

  await order.remove();

  res.status(200).json({
    success: true,
  });
};
