import React from "react";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from "react";



const SplitCardForm = ({ handlePaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error message is ]', error.message);
      setErrorMessage(error.message);
      setSuccessMessage(null)
    } else {
      setSuccessMessage(paymentMethod.id)
      setErrorMessage(null);
      handlePaymentSuccess(paymentMethod.id)
      console.log('[PaymentMethod]', paymentMethod);
    }
  };


  return (
    <div className="container">
      <div className="container">
        <div className="jumbotron">
          <div style={{ margin: "10px" }} className="card">
            <div className="card-body">
              <h2 style={{ color: "rgb(87, 11, 17)" }} className="card-title">Payment!</h2>
              <hr />
              <form onSubmit={handleSubmit} className="product-form" >

                <CardElement />
                <br />
                <input type="submit" className="btn btn-block btn-lg btn-danger" disabled={!stripe} />

              </form>

              {/* after payment message */}
              {
                errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>
              }
              {
                successMessage && <p style={{ color: "green" }}>Your Payment Successfully completed </p>
              }
            </div>
          </div>
        </div>
      </div>  </div>
  );
};

export default SplitCardForm;
