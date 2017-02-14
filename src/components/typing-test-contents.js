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
  backgroundColor: "#26818e",
  borderRadius: 2,
};

const styleCurrentWord = {
  color: "#e8b13a",
};

const styleIncorrectWord = {
  color: "red",
  textDecoration: "line-through",
};

const wordStyle = {
  color: "white",
};

class TypingTestContents extends Component {
  render() {
    const { line, text } = this.props;
    // Break the current line into an array of words
    const currentLine = text[line].split(" ");
    const { typedLine } = this.props;
    const nextLine = text[line + 1] !== undefined ? text[line + 1] : " ";

    return (
      <div style={containerStyle}>
        <div style={currentLineStyle}>
          {
            // Choose style for word (distinguish currently typed word
            // and so far incorrectly typed words from the rest)
            currentLine.map((word, i) => {
              let style;
              if (i < this.props.currentWord && word !== typedLine[i])
                style = styleIncorrectWord;  
              else
                style =
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
  typedLine: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  currentWord: React.PropTypes.number.isRequired,
}

export default TypingTestContents;
