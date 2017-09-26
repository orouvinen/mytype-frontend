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
    userProfileLink = <span><span className="fa fa-user-o"></span>&nbsp;<Link to={`/profile/${props.auth.user.id}`}>My profile</Link></span>;
    authLink = <Link to='/logout'>Logout</Link>;
  } else {
    authLink = <Link to='/login'>Login</Link>
  }
  return (
    <div className="borderedContainer">
      <section>
        <h2 className="headerBar">Links</h2>
        <li style={linkListStyle}>
          <ul><span className="fa fa-trophy"></span>&nbsp;<Link to='/leaderboard'>&nbsp;Leaderboard</Link></ul> 
          <ul>{userProfileLink}</ul>
          <ul><span className={props.auth.loggedIn ? "fa fa-sign-out" : "fa fa-sign-in"}></span>&nbsp;{authLink}</ul>
        </li>
      </section>
    </div>);
};

export default LinksPanel;