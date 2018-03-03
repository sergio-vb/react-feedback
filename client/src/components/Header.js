import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StripePayments from './StripePayments';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    textDecoration: 'none',
    color: "#fff"
  },
  containerRight: {
    paddingTop: '0.4em'
  },
  navItem: {
    color: '#fff',
    padding: '0 0.3em'
  }
};


class Header extends React.Component {
  renderNavContent() {
    const { auth } = this.props;
    if (typeof auth === 'object' && auth !== null) {
      //Content for logged-in user
      return (
        <div style={styles.containerRight}>
          <StripePayments />
          <FlatButton style={styles.navItem}><a href="/api/logout">Log Out</a></FlatButton>
        </div>
      );
    } else if (auth === false) {
      //Content for user not logged-in
      return (
        <div style={styles.containerRight}>
          <FlatButton style={styles.navItem}><a href="/auth/google">Login With Google</a></FlatButton>
        </div>
      );
    }
    return;
  }
  render() {
    console.log('Header props: ', this.props);

    const appBarTitle = <Link to={this.props.auth ? '/surveys' : '/'} style={styles.title}>Survey Analizer</Link>

    return (
      <AppBar
        title={appBarTitle}
        iconElementLeft={<div></div>}
        iconElementRight={this.renderNavContent()}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Header);
