import React, { Component } from 'react';
/*
 http://jsfiddle.net/b9vtW/4/
 .row{
    width: 300px;
    margin-bottom: 5px;
    padding-bottom: 5px;
    border-bottom: 3px solid #777;
    max-height:200px;
    overflow:hidden;
    text-overflow: ellipsis;
    content: "";
    position:relative;
}
.row:before {
    content:'';
    width:100%;
    height:100%;    
    position:absolute;
    left:0;
    top:0;
    background:linear-gradient(transparent 150px, white);
}*/

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

const styleAfter = {
  height: "3em",
  padding: 4,
  fontSize: "1.2em",
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
    const { line, text } = this.props;
    // Break the current line into an array of words
    const currentLine = text[line].split(" ");
    //const lines = this.props.text;
    const nextLines = text.slice(line + 1, line + 3);
    
    return (
      <div style={containerStyle}>
        <div style={style}>
          {
            currentLine.map((word, i) => {
              const style =
                i === this.props.currentWord ? styleCurrentWord : wordStyle;
              return (<span key={i} style={style}>{word} </span>);
            })
          }
        </div>
        <div style={styleAfter}>
          {nextLines.map((line, i) => <div key={i}>{line}</div>)}
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
