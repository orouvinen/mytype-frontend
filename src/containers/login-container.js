import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/auth';

import LoginForm from '../components/login-form';
import FormWrapper from '../components/form-wrapper';


class LoginContainer extends Component {
  constructor() {
    super();
    this.state = { loginTries: 0 };
  }
  handleSubmit(values) {
    const { email, password } = values;
    this.props.requestLogin(email, password);
    this.setState({ loginTries: this.state.loginTries + 1});
  }

  render() {
    return (
      <FormWrapper>
        <LoginForm
          auth={this.props.auth}
          loginTries={this.state.loginTries}
          onSubmit={this.handleSubmit.bind(this)} />
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
