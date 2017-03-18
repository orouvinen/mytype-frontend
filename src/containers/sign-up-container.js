import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/auth';

import SignUp from '../components/sign-up';
import SignUpForm from '../components/sign-up-form';
import SignUpComplete from '../components/sign-up-complete';


class SignUpContainer extends Component {
  handleSubmit(values) {
    const { name, email, password } = values;
    this.props.requestSignUp(name, email, password);
  }

  render() {
    if (this.props.auth.accountCreated)
      return (
        <SignUp>
          <SignUpComplete />
        </SignUp>
      );
    else
      return (
        <SignUp>
          <SignUpForm auth={this.props.auth} onSubmit={this.handleSubmit.bind(this)} />
        </SignUp>
      );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
