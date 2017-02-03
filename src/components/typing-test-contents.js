import React, { Component } from 'react';

const containerStyle = {
    width: "35em",
    margin: "0 auto",
};

const style = {
    width: "100%",
    height: "1.3em",
    margin: "5px auto",
    fontSize: "1.2em",
    textAlign: "center",
    backgroundColor: "#ddd",
    borderRadius: 2,
};

const styleBefore = {
    height: "3em",
    padding: 4,
    fontSize: "1.2em",
    textAlign: "center",
    backgroundColor: "#ddd",
    borderRadius: 2,
};

const styleAfter = {
    height: "3em",
    padding: 4,
    fontSize: "1.3em",
    textAlign: "center",
    backgroundColor: "#ddd",
    borderRadius: 2,
};

class TypingTestContents extends Component {
    render() {
        const lines = this.props.text.map(line => line);
        return (
            <div style={containerStyle}>
            <div style={styleBefore}>before text saljkd flkdsf lkjdsf </div>
            <div style={style}>
                {lines[0]}
            </div>
            <div style={styleAfter}>after lasdl kjasdlkjasd lasdlkasdj lkj</div>
        </div>
        );
    }
}

TypingTestContents.propTypes = {
    text: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
}

export default TypingTestContents;
