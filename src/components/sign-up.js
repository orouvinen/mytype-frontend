import React from 'react';
import { Field, reduxForm } from 'redux-form';
import colors from '../colors';

// Wrapper around the whole login form
const containerStyle = {
  backgroundColor: colors.primary0,
  width: "50%",
  maxWidth: "500px",
  margin: "30px auto",
  padding: "20px",
  borderRadius: "2px",
};

const SignUp = (props) => {
  return(
    <div style={containerStyle}>{props.children}</div>
  );
}

export default SignUp;
