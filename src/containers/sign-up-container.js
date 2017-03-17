import React, { Component } from 'react';
import SignUp from '../components/sign-up';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/auth-actions';

class SignUpContainer extends Component {
  handleSubmit(values) {
    const { name, email, password } = values;
    this.props.requestSignUp();
  }

  render() {
    return <SignUp onSubmit={this.handleSubmit.bind(this)} />;
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
