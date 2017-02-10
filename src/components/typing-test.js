import React, { Component } from 'react';
import TypingTestContents from './typing-test-contents';
import TypingTestInput from './typing-test-input';

const containerStyle = {
  width: "35em",
  margin: "0 auto",
};

class TypingTest extends Component {
  render() {
    return(
      <div style={containerStyle}>
        <TypingTestContents
          currentWord={this.props.currentWord}
          text={this.props.text}
          line={this.props.line} />
        <TypingTestInput
          typedWord={this.props.typedWord}
          onKeyPress={this.props.onKeyPress} />
      </div>);
  }
}

export default TypingTest;
