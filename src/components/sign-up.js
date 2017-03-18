import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Wrapper around the whole login form
const containerStyle = {
  backgroundColor: "#025c68",
  width: "50%",
  margin: "30px auto",
  padding: "20px",
  borderRadius: "2px",
};

const inputContainer = {
  textAlign: "center",
};

// wrapper around each input field (and its label)
const inputFieldContainer = {
  margin: "0 auto 8px",
  //margin: "8px 0 0 0",
  textAlign: "left",
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
        <div style={inputFieldContainer}>
          <button type="submit">Sign me up!</button>
        </div>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "signup"
})(SignUpForm);
