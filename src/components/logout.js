import React from 'react';
import { Link } from 'react-router';
import { layoutWrapper } from '../layout-wrapper';
import colors from '../colors';

// TODO: this is identical (except for textAlign to the wrapper found in user profile component. DRY.
const logoutWrapper = {
  padding: "5px",
  background: colors.primary2,
  border: `1px solid ${colors.primary1}`,
  borderRadius: "1px",
  width: "100%",
  textAlign: "center",
};

const Logout = () =>
  <div style={layoutWrapper}>
    <div style={logoutWrapper}>
      <h1>Logged out</h1>
      <p style={{margin: "10px"}}>
        Thanks for stopping by!
      </p>
      <p>
        <Link to="/">Return to main page</Link>
      </p>
    </div>
  </div>;

export default Logout;