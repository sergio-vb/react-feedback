import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class StripePayments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Smart Surveys"
        description="Purchase 5 survey credits for $5"
        amount={500} //USD cents
        token={token => this.props.handlePaymentToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(StripePayments);