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

// wrapper around each input field (and its label)
const inputFieldContainer = {
  margin: "8px auto 8px",
  textAlign: "left",
};

const submitButtonContainer = {
  textAlign: "right",
};


const SignUpForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} method="POST">
        <div style={inputFieldContainer}>
          <div><label htmlFor="name">Username</label></div>
          <div><Field name="name" component="input" type="text" required /></div>
        </div>
        <div style={inputFieldContainer}>
          <div><label htmlFor="email">Email address</label></div>
          <div><Field name="email" component="input" type="email" required /></div>
        </div>
        <div style={inputFieldContainer}>
          <div><label htmlFor="password">Password</label></div>
          <div><Field name="password" component="input" type="password" required /></div>
        </div>
        <div style={submitButtonContainer}>
          <button type="submit">Sign me up!</button>
        </div>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "signup"
})(SignUpForm);
