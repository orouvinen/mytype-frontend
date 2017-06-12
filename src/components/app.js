import React from 'react';
import { Link } from 'react-router';

const headerStyle = {
  background: "linear-gradient(#e8b13a, #875c00)",
  fontWeight: "bold",
  color: "white",
  padding: "10px",
  margin: "0 auto 10px auto",
  fontSize: "1.2em",
  height: "40px",
};

const titleWrapper = {
  float: "left",
};

const authWrapper = {
  float: "right",
  fontSize: "0.7em",
};

const headerLinkStyle = {
  color: "white",
  textDecoration: "none",
};

const headerAppTitle = "mytype";

const App = props => (
  <div>
    <header style={headerStyle}>
      <div style={titleWrapper}>
        <h2><Link style={headerLinkStyle} to="/">{headerAppTitle}</Link></h2>
      </div>
      <div style={authWrapper}>
        {props.auth.loggedIn ?
          <div>
            <div>Logged in: <Link to='/profile'>{props.auth.user.name}</Link></div>
            <a href="#" onClick={props.logout}>Logout</a>
          </div> :
          <Link to='/login'>Login</Link>
        }
      </div>
      <div style={{clear: "both"}}></div>
    </header>
    {React.cloneElement(props.children, props)}
  </div>
);

export default App;
