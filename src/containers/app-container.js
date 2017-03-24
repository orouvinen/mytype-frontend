import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import App from '../components/app';
import * as authActions from '../actions/auth';
import store from '../store'; 

class AppContainer extends Component {
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
