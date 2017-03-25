import React from 'react';
import { Link } from 'react-router';

const SignUpComplete = () => {
  return (
    <div>
      <h2>Signed up!</h2>
      <p>You can now <Link to='/login'>log in</Link> with your email address and passowrd.</p>
    </div>
  );
}

export default SignUpComplete;
