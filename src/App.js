import React from 'react';
import { Link } from 'react-router';

const headerStyle = {
  background: "linear-gradient(#e8b13a, #875c00)",
  fontWeight: "bold",
  color: "white",
  padding: "10px",
  margin: "0 auto 10px auto",
  fontSize: "1.2em",
};

const headerLinkStyle = {
  color: "white",
  textDecoration: "none",
};

const headerAppTitle = "mytype";

const App = (props) => (
  <div>
    <header style={headerStyle}>
      <h2><Link style={headerLinkStyle} to="/">{headerAppTitle}</Link></h2>
    </header>
    {React.cloneElement(props.children, props)}
  </div>
);

export default App;
