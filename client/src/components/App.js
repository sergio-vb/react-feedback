import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default connect(null, actions)(App);

// Alternative use of connect and action creators:
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchForecasts }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(SearchBar);
