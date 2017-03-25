import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import colors from '../colors';

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

const registerLinkStyle = {
  fontSize: "0.7em",
  marginBottom: "20px",
};

const AuthFailNotify = props => {
  if (props.auth.authFailed && props.loginTries > 0) {
    return(<div style={errorMessageStyle}>{props.auth.errorMessage}</div>);
  } else
    return null;
};

const LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <div style={registerLinkStyle}>
        Not registered yet? <Link to="/signup">Create an account!</Link>
      </div>
      <h2>Login</h2>
      <AuthFailNotify auth={props.auth} loginTries={props.loginTries} />
      <form onSubmit={handleSubmit} method="POST">
        <div style={inputFieldContainer}>
          <div><label htmlFor="email">Email address</label></div>
          <div><Field name="email" component="input" type="text" required /></div>
        </div>
        <div style={inputFieldContainer}>
          <div><label htmlFor="password">Password</label></div>
          <div><Field name="password" component="input" type="password" required /></div>
        </div>
        <div style={submitButtonContainer}>
          <button type="submit">Login!</button>
        </div>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "login"
})(LoginForm);
