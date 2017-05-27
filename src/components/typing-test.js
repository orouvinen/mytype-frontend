import React from 'react';
import TypingTestContents from './typing-test-contents';
import TypingTestInput from './typing-test-input';
import WPM from './wpm';

const containerStyle = {
  width: "40em",
  margin: "0 auto",
};

const TypingTest = ({ typingTest, onKeyPress }) => {
  return(
    <div style={containerStyle}>
      <TypingTestContents typingTest={typingTest} />
      <TypingTestInput typingTest={typingTest} onKeyPress={onKeyPress} />
      <WPM typingTest={typingTest} />
    </div>);
};

TypingTest.propTypes = {
  typingTest: React.PropTypes.object.isRequired,
  onKeyPress: React.PropTypes.func.isRequired,
};

export default TypingTest;
