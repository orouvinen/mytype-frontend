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
    return(
      <div style={containerStyle}>
        <TypingTestContents
          typedLine={this.props.typedLine}
          currentWord={this.props.word}
          text={this.props.text}
          line={this.props.line} />
        <TypingTestInput
          typedWord={this.props.typedWord}
          onKeyPress={this.props.onKeyPress} />
        <WPM {...this.props} />
      </div>);
  }
}

export default TypingTest;
