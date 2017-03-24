import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/app';
import * as authActions from '../actions/auth';

class AppContainer extends Component {
  render() {
    return (
      <div>
        <App {...this.props} />
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
