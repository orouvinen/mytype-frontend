import React from 'react';
import TypingTestContents from './typing-test-contents';
import TypingTestInput from './typing-test-input';
import WPM from './wpm';
import TypingTestSummary from './typing-test-summary';
import colors from '../colors';

const containerStyle = {
  width: "40em",
  margin: "0 auto",
};

const TypingTest = ({ user, reset, typingTest, competition, onKeyPress }) => {
  return(
    <div style={containerStyle}>
      {!user ? <div style={{ color: colors.complementary0 }}>You are not logged in, so your score will not be saved!</div> : "" }
      <TypingTestContents typingTest={typingTest} />
      {!typingTest.finished ?
        <div>
          <TypingTestInput typingTest={typingTest} onKeyPress={onKeyPress} />
          <WPM typingTest={typingTest} />
        </div> :
        <TypingTestSummary onResetClick={() => reset()} typingTest={typingTest} competition={competition} />}
    </div>);
};

TypingTest.propTypes = {
  typingTest: React.PropTypes.object.isRequired,
  competition: React.PropTypes.object.isRequired,
  onKeyPress: React.PropTypes.func.isRequired,
};

export default TypingTest;
