import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import App from '../components/app';
import * as authActions from '../actions/auth';
import store from '../store'; 

class AppContainer extends Component {
  // A separate onClick handler for link to login page is needed because we want
  // to clear the authFail flag before rendering <LoginForm> so that error
  // message that was possibly previously shown in the form are not displayed
  // when navigating to the Login page.
  loginClicked() {
    store.dispatch(authActions.resetFailState());
    browserHistory.push('/login');
  }
  render() {
    return (
      <div>
        <App {...this.props} loginClicked={this.loginClicked.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return({
    auth: state.auth,
  });
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(authActions.logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
