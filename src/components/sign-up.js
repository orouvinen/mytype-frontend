import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SignUpForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} method="POST">
      <div>
        <label htmlFor="name">Username: </label>
        <Field name="name" component="input" type="text" required />
      </div>
      <div>
        <label htmlFor="email">Email address: </label>
        <Field name="email" component="input" type="email" required />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <Field name="password" component="input" type="password" required />
      </div>
      <button type="submit">Sign me up!</button>
    </form>
  );
}

export default reduxForm({
  form: "signup"
})(SignUpForm);
