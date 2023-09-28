import React, { useEffect, useState } from "react";
import PaymentPage from "./PaymentPage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentRoute = () => {
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/sendstripeapikey");
    console.log(data.stripeApiKey);

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    getStripeApiKey();
    console.log(stripeApiKey);
  }, []);
  return (
    <>
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          {" "}
          <PaymentPage />
        </Elements>
      )}
    </>
  );
};

export default PaymentRoute;
