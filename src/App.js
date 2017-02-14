import React from 'react';
import './App.css';

const headerStyle = {
  background: "linear-gradient(#e8b13a, #875c00)",
  fontWeight: "bold",
  color: "white",
  padding: "10px",
  margin: "0 auto 10px auto",
  fontSize: "1.2em",
};

const headerAppTitle = "mytype";

const App = (props) => (
  <div>
    <header style={headerStyle}><h2>{headerAppTitle}</h2></header>
    {React.cloneElement(props.children, props)}
  </div>
);

export default App;
