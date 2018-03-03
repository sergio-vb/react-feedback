import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

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
        <RaisedButton label="Add Credits" secondary={true} />
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(StripePayments);