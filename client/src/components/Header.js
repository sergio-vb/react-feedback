import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  renderNavContent() {
    const { auth } = this.props;
    if (typeof auth === 'object' && auth !== null) {
      //Content for logged-in user
      return (
        <li>
          <a href="/api/logout">Sign Out</a>
        </li>
      );
    } else if (auth === false) {
      //Content for user not logged-in
      return (
        <li>
          <a href="/auth/google">Login With Google</a>
        </li>
      );
    }
    return;
  }
  render() {
    console.log('Header props: ', this.props);
    return (
      <nav>
        <div className="nav-wrapper purple darken-1">
          <a href="#" className="brand-logo left">
            SmartSurveys
          </a>
          <ul id="nav-mobile" className="right">
            {this.renderNavContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Header);
