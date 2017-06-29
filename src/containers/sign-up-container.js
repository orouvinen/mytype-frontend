import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/auth';

import FormWrapper from '../components/form-wrapper';
import SignUpForm from '../components/sign-up-form';
import SignUpComplete from '../components/sign-up-complete';


class SignUpContainer extends Component {
  constructor() {
    super();
    this.state = { passwordsMatch: true };
  }

  handleSubmit(values) {
    const { name, email, password, passwordAgain } = values;
    const passwordsMatch = password === passwordAgain;

    this.setState({ passwordsMatch });

    if (passwordsMatch)
      this.props.requestSignUp(name, email, password);
  }

  render() {
    if (this.props.auth.signUpRequested && this.props.auth.accountCreated)
      return (
        <FormWrapper>
          <SignUpComplete />
        </FormWrapper>
      );
    else
      return (
        <FormWrapper>
          <SignUpForm passwordsMatch={this.state.passwordsMatch} auth={this.props.auth} onSubmit={this.handleSubmit.bind(this)} />
        </FormWrapper>
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
