import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/auth';

import LoginForm from '../components/login-form';
import FormWrapper from '../components/form-wrapper';


class LoginContainer extends Component {
  handleSubmit(values) {
    const { email, password } = values;
    this.props.requestLogin(email, password);
  }

  render() {
    return (
      <FormWrapper>
        <LoginForm auth={this.props.auth} onSubmit={this.handleSubmit.bind(this)} />
      </FormWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
