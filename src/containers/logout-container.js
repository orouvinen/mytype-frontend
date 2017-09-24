import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';

import Logout from '../components/logout';

class LogoutContainer extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <Logout />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(actions.logout()),
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);