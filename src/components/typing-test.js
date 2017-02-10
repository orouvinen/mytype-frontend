import React, { Component } from 'react';
import TypingTestContents from './typing-test-contents';
import TypingTestInput from './typing-test-input';
import WPM from './wpm';

const containerStyle = {
  width: "35em",
  margin: "0 auto",
  //textAlign: "center",
};

class TypingTest extends Component {
  render() {
    const { text, line, word } = this.props.typingTest;
    return(
      <div style={containerStyle}>
        <TypingTestContents currentWord={word} text={text} line={line} />
        <TypingTestInput
          typedWord={this.props.typedWord}
          onKeyPress={this.props.onKeyPress} />
        <WPM 
          typingTest={this.props.typingTest}
          correctChars={this.props.correctChars}
          wrongChars={this.props.wrongChars}>
        </WPM>
      </div>);
  }
}

export default TypingTest;
