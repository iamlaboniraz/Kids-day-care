import React, { useMemo } from "react";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from "react";



const SplitCardForm = ({handlePaymentSuccess}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
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
                            <hr/>
                            <form onSubmit={handleSubmit} className="product-form" >

                                {/* <div className="form-group">
                                    <label>Your Name</label>
                                    <input className="form-control"
                                        id="yourName"
                                       
                                        
                                    />
                                  
                                </div> */}

                                <CardElement />
                                 <br/>
  
                               
                                <input type="submit" className="btn btn-block btn-lg btn-danger"  disabled={!stripe} />

                            </form>
                            {
      errorMessage && <p style={{color:"red"}}>{errorMessage}</p>
    }
    {
      successMessage && <p style={{color:"green"}}>Your Payment Successfully completed </p>
    }
                        </div>
                    </div>
                </div>
            </div>




      {/* <form onSubmit={handleSubmit}>
      <CardElement />
      <br/>
      <button className="btn btn-danger" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {
      errorMessage && <p style={{color:"red"}}>{errorMessage}</p>
    }
    {
      successMessage && <p style={{color:"green"}}>Your Payment Successfully completed </p>
    } */}
    </div>
  );
};

export default SplitCardForm;
