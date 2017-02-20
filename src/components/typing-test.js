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
        <TypingTestContents typingTest={this.props.typingTest} />
        <TypingTestInput
          typingTest={this.props.typingTest}
          onKeyPress={this.props.onKeyPress} />
        <WPM typingTest={this.props.typingTest} />
      </div>);
  }
}

TypingTest.propTypes = {
  typingTest: React.PropTypes.object.isRequired,
  onKeyPress: React.PropTypes.func.isRequired,
};

export default TypingTest;
