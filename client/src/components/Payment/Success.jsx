import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cartSlice";
import { createOrderAsync } from "../../features/orderSlice";

export const Success = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const session_id = searchParams.get("session_id");

  const [paymentId, setPaymentId] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState("");
  const dispatch = useDispatch();

  const getPaymentInformation = async () => {
    const response = await axios.get(
      `/api/v1/payment/success?session_id=${session_id}`
    );

    setPaymentId(response.data.id);
    setPaymentStatus(response.data.status);
  };

  const { shippingInfo } = useSelector((state) => state.cart);
  const { orderItems } = useSelector((state) => state.order);

  useEffect(() => {
    getPaymentInformation();

    if (paymentStatus == "paid") {
      const orderdata = {
        shippingInfo: {
          address: shippingInfo.address,
          city: shippingInfo.city,
          state: shippingInfo.region,
          country: shippingInfo.country,
          pinCode: shippingInfo.pincode,
          phoneNo: "123456789",
        },
        orderItems,
        paymentInfo: {
          id: paymentId,
          status: paymentStatus,
        },
        itemsPrice: 9000,
      };
      dispatch(createOrderAsync(orderdata)).then(() => {
        dispatch(clearCart());
      });
    }
  }, [dispatch, getPaymentInformation]);
  return (
    <>
      <h2>Thanks for your order!</h2>
      <h4>Your payment is successful.</h4>
      <p>
        We appreciate your business! If you have any questions, please email us
        at
        <a href="mailto:orders@example.com">orders@example.com</a>.
      </p>
      <div></div>
    </>
  );
};
