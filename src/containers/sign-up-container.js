import React, { Component } from 'react';
import SignUp from '../components/sign-up';
import { connect } from 'redux';

class SignUpContainer extends Component {
  handleSubmit(values) {
   
  }
  
  render() {
    return <SignUp onSubmit={this.handleSubmit.bind(this)}/>;
  }
}

// export default connect(state,props)(SignUpContainer);

export default SignUpContainer;
