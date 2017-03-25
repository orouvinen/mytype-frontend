import React from 'react';
import { Field, reduxForm } from 'redux-form';
import colors from '../colors';

// wrapper around each input field (and its label)
const inputFieldContainer = {
  margin: "8px auto 8px",
  textAlign: "left",
};

const submitButtonContainer = {
  textAlign: "right",
};

const errorMessageStyle = {
  color: colors.tertiary3,
};

const AccountExistsNotify = props => {
  if (props.auth.signUpRequested && !props.auth.accountCreated)
    return <div style={errorMessageStyle}>{props.auth.errorMessage}</div>;
  else
    return null;
};


const SignUpForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <h2>Create a new account</h2>
      <AccountExistsNotify auth={props.auth} /> 
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
