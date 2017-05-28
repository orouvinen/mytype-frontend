import React from 'react';
import TypingTestContents from './typing-test-contents';
import TypingTestInput from './typing-test-input';
import WPM from './wpm';
import TypingTestSummary from './typing-test-summary';

const containerStyle = {
  width: "40em",
  margin: "0 auto",
};

const TypingTest = ({ typingTest, competition, onKeyPress }) => {
  return(
    <div style={containerStyle}>
      <TypingTestContents typingTest={typingTest} />
      {!typingTest.finished ?
        <div>
          <TypingTestInput typingTest={typingTest} onKeyPress={onKeyPress} />
          <WPM typingTest={typingTest} />
        </div> :
        <TypingTestSummary typingTest={typingTest} competition={competition} />}
    </div>);
};

TypingTest.propTypes = {
  typingTest: React.PropTypes.object.isRequired,
  competition: React.PropTypes.object.isRequired,
  onKeyPress: React.PropTypes.func.isRequired,
};

export default TypingTest;
