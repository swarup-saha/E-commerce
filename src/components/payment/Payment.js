import axios from "axios";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
const KEY =
  "pk_test_51M5DU4SFMY7Zw8N6riMN3HbbPLwDv8rQTI7dBlromRP9hG4AKIcBqfSoW4NfXrBaIsYyb9KPsgQG77yUJjyFMUgY00UuDS5xN0";
const Payment = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makePayment = async () => {
      console.log(stripeToken);
      const res = await axios.post(
        "http://localhost:5000/api/checkout/payments",
        {
          tokenId: stripeToken.id,
          amount: 200,
        }
      );
      console.log(res);
    };
    makePayment();
  }, [stripeToken]);
  return <button className="btn btn-primary">Pay Now</button>;
};

export default Payment;
