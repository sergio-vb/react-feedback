import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class StripePayments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Smart Surveys"
        description="Purchase 5 survey credits for $5"
        amount={500} //USD cents
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}
