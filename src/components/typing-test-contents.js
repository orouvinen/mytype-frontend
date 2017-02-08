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

const styleCurrentWord = {
  color: "white",
};

const wordStyle = {
  color: "#333",
};

class TypingTestContents extends Component {
  render() {
    // Break the current line into an array of words
    const currentLine = this.props.text[this.props.line].split(" ");
    //const lines = this.props.text;
    return (
      <div style={containerStyle}>
        <div style={styleBefore}>before text saljkd flkdsf lkjdsf </div>
        <div style={style}>
          {
            currentLine.map((word, i) => {
              let style =
                i === this.props.currentWord ? styleCurrentWord : wordStyle;
              return (<span key={i} style={style}>{word} </span>);
            })
          }
        </div>
        <div style={styleAfter}>after lasdl kjasdlkjasd lasdlkasdj lkj</div>
      </div>
    );
  }
}

TypingTestContents.propTypes = {
  text: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  line: React.PropTypes.number.isRequired,
  currentWord: React.PropTypes.number.isRequired,
}

export default TypingTestContents;
