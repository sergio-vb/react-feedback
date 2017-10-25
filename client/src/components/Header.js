import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper purple darken-1">
          <a href="#" className="brand-logo left">
            SmartSurveys
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="/auth/google">Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
