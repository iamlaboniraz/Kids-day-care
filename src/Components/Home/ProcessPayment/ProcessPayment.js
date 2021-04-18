import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_NaPCIKiiTcVsrTRjefQa3NMX00YFS4FKYS');
const ProcessPayment = ({ handlePaymentSuccess }) => {
  return (
    <div className="container">
      <Elements stripe={stripePromise}>
        <SplitCardForm handlePaymentSuccess={handlePaymentSuccess}></SplitCardForm>
      </Elements>
    </div>

  );
};

export default ProcessPayment;