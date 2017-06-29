import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
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
  color: colors.tertiary4,
  backgroundColor: colors.secondary2,
  padding: "3px",
  margin: "3px",
  borderRadius: "1px",
};

const AccountExistsNotify = props => {
  if (props.auth.signUpRequested && props.auth.requestCompleted &&
      !props.auth.accountCreated)
    return <div style={errorMessageStyle}>{props.auth.errorMessage}</div>;
  else
    return null;
};

const PasswordMismatchNotify = ({ passwordsMatch }) => {
  if (passwordsMatch)
    return null;

  return <div style={errorMessageStyle}>Passwords do not match!</div>;
};


const SignUpForm = props => {
  const { handleSubmit } = props;
  if (props.auth.loggedIn) {
    return (
      <div>
        <h2>Krhm..</h2>
        <p>
          You are already logged in. So you don't really need to create an account. If you really, really do, then please
          log out before creating a new account. Thanks.
        </p>
        <p>
          Click <Link to="/">here</Link> and we'll get you back to the front page.
          <br />Take care!
        </p>
      </div>);

  }
  return (
    <div>
      <h2>Create a new account</h2>
      <AccountExistsNotify auth={props.auth} />
      <PasswordMismatchNotify passwordsMatch={props.passwordsMatch} />
      <form onSubmit={handleSubmit} method="POST">
        <div style={inputFieldContainer}>
          <div><label htmlFor="name">Username</label></div>
          <div><Field name="name" component="input" type="text" maxLength={30} required /></div>
        </div>
        <div style={inputFieldContainer}>
          <div><label htmlFor="email">Email address</label></div>
          <div><Field name="email" component="input" type="email" maxLength={256} required /></div>
        </div>
        <div style={inputFieldContainer}>
          <div><label htmlFor="password">Password</label></div>
          <div><Field name="password" component="input" type="password" required /></div>
        </div>
        <div style={inputFieldContainer}>
          <div><label htmlFor="passwordAgain">Password again</label></div>
          <div><Field name="passwordAgain" component="input" type="password" required /></div>
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
