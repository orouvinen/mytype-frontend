import React, { Component } from 'react';
import TypingTestContents from './typing-test-contents';
import TypingTestInput from './typing-test-input';
import TypingTestTimer from './typing-test-timer';

class TypingTest extends Component {
  constructor() {
    super();
    this.state = { lines: [""] };
  }

  render() {
    return(
      <div>
        <TypingTestContents text={this.props.text} />
        <TypingTestInput onKeyPress={this.props.onKeyPress} />
        <TypingTestTimer minutes={this.props.minutes} seconds={this.props.seconds} />
      </div>);
  }
}

export default TypingTest;
