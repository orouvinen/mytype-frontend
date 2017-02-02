import React from 'react';
import './App.css';

const headerStyle = {
    //backgroundColor: "black",
    background: "linear-gradient(#f0f0f0, #a0a040)",
    color: "#4a4a4a",
    padding: "10px",
    margin: "0 auto 10px auto"
};

const App = (props) => (
    <div>
        <header style={headerStyle}><h2>Header block</h2></header>
        {React.cloneElement(props.children, props)}
    </div>
);

export default App;
