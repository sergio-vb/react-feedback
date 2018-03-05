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
    paddingTop: '0.4em',
    color: '#fff'
  },
  flatButton: {
    color: '#fff',
    padding: '0 1em'
  },
  navItem: {
    margin: '0 0.9em 0 1.5em'
  }
};


class Header extends React.Component {
  
  renderNavContent() {
    const { auth } = this.props;
    if (typeof auth === 'object' && auth !== null) {
      //Content for logged-in user
      return (
        <div style={styles.containerRight}>
          <StripePayments/>
          <span style={styles.navItem}>
            Credits: {this.props.auth.credits}
          </span>
          <FlatButton style={styles.flatButton}>
            <a href="/api/logout">Sign Out</a>
          </FlatButton>
        </div>
      );
    } else if (auth === false) {
      //Content for user not logged-in
      return (
        <div style={styles.containerRight}>
          <FlatButton style={styles.flatButton}>
            <a href="/auth/google">Sign in with Google</a>
          </FlatButton>
        </div>
      );
    }
    return;
  }
  
  render() {
    const appBarTitle = <Link to={this.props.auth ? '/surveys' : '/'} style={styles.title}>Survey Analizer</Link>

    return (
      <AppBar
        title={appBarTitle}
        iconElementLeft={<div/>}
        iconElementRight={this.renderNavContent()}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Header);
