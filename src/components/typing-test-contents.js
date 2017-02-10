import React, { Component } from 'react';

const containerStyle = {
  textAlign: "center",
};

const currentLineStyle = {
  lineHeight: "1.5em",
  minHeight: "3em",
  width: "100%",
  margin: "2px auto",
  fontSize: "1.4em",
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
    const { line, text } = this.props;
    // Break the current line into an array of words
    const currentLine = text[line].split(" ");
    //const lines = this.props.text;
    const nextLine = text[line + 1] !== undefined ? text[line + 1] : " ";

    return (
      <div style={containerStyle}>
        <div style={currentLineStyle}>
          {
            currentLine.map((word, i) => {
              const style =
                i === this.props.currentWord ? styleCurrentWord : wordStyle;
              return (<span key={i} style={style}>{word} </span>);
            })
          }
          <div style={{display: "inline-block"}}>{nextLine}</div>
        </div>
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
