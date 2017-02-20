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
    const { line, text, typedLine } = this.props.typingTest;
    const wordNum = this.props.typingTest.word;
    // Break the current line into an array of words
    const currentLine = text[line].split(" ");
    const nextLine = text[line + 1] !== undefined ? text[line + 1] : " ";

    return (
      <div style={containerStyle}>
        <div style={currentLineStyle}>
          {
            // Choose style for word (distinguish currently typed word
            // and so far incorrectly typed words from the rest)
            currentLine.map((word, i) => {
              let style;
              if (i < wordNum && word !== typedLine[i])
                style = styleIncorrectWord;  
              else
                style = (i === wordNum) ? styleCurrentWord : wordStyle;
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
  typingTest: React.PropTypes.object.isRequired,
}

export default TypingTestContents;
