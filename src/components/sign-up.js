import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SignUpForm = (props) => {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
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
    </form>
  );
}


export default reduxForm({
  form: "signup"
})(SignUpForm);
