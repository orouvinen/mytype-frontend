import React from 'react';
import { Link } from 'react-router';

const linkListStyle = {
  listStyleType: "none",
  padding: "5px",
};

const LinksPanel = props => {
  let userProfileLink = null;
  let authLink = null;

  if (props.auth.user) {
    userProfileLink = <Link to={`/profile/${props.auth.user.id}`}>Profile</Link>
    authLink = <a href='#' onClick={props.logout}>Logout</a>;
  } else {
    authLink = <Link to='/login'>Login</Link>
  }
  return (
    <div className="borderedContainer">
      <section>
        <h2>Links</h2>
        <li style={linkListStyle}>
          <ul>{userProfileLink}</ul>
          <ul>{authLink}</ul>
        </li>
      </section>
    </div>);
};

export default LinksPanel;