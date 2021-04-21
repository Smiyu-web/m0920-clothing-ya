import React from "react";
import StripeCheckout from "react-stripe-checkout";

import brandlogo from "../../assets/shopping-bag.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="pay now"
      name="Clothing Ya"
      billingAddress
      shippingAddress
      image={brandlogo}
      description={`your total price is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
