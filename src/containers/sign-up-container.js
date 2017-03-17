import React, { Component } from 'react';
import SignUp from '../components/sign-up';
import { connect } from 'redux';

class SignUpContainer extends Component {
  render() {
    return <SignUp />;
  }
}

// export default connect(state,props)(SignUpContainer);

export default SignUpContainer;
