import React, { Component } from 'react';
import TypingTestContents from './typing-test-contents';
import TypingTestInput from './typing-test-input';

class TypingTest extends Component {
  constructor() {
    super();
    this.state = { lines: [""] };
  }

  render() {
    return(
      <div>
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
