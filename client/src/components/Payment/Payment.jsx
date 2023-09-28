import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { cartItems } = useSelector((state) => state.cart);

  const handlePayment = async (event) => {
    event.preventDefault();

    const body = {
      products: cartItems,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(`/api/v1/payment/process`, {
      cartItems,
    });

    const result = stripe.redirectToCheckout({
      sessionId: response.data.id,
    });

    console.log(result);
    localStorage.setItem("result", result);

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handlePayment}
        className="flex flex-col my-24 justify-between gap-12 w-80"
      >
        <h1 className="text-center text-lg p-4 bg-slate-900 text-white">
          Card Details
        </h1>
        <CardNumberElement className="border-slate-600 border-2 p-4" />
        <CardExpiryElement className="border-slate-600 border-2 p-4" />
        <CardCvcElement className="border-slate-600 border-2 p-4" />
        <button className="p-2 my-4 bg-red-700 opacity-90 text-slate-200 rounded-md w-full flex justify-center active:scale-95 hover:opacity-100">
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
