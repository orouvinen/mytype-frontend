import React from 'react';
import colors from '../colors';
import { wpm, accuracy } from '../helpers/wpm';

const summaryStyle = {
  clear: "both",
  display: "block",
  margin: "30px 0 0 0",
  padding: "8px",
  backgroundColor: colors.primary0,
  borderRadius: "2px",
}

const TypingTestSummary = props => {
  if (!props.typingTest.finished)
    return null;

  const { correctChars, wrongChars }  = props.typingTest;
  const { startTime, endTime } = props.typingTest;
  const wpmMeasure = wpm(correctChars, wrongChars, endTime - startTime);

  return (
  <div style={summaryStyle}>
    <h2>Summary</h2>
    <div>WPM: {wpmMeasure.toFixed(1)}</div>
    <div>Accuracy: {accuracy(correctChars, wrongChars).toFixed(1)}%</div>
    <div>
      <button type="button" onClick={() => props.onResetClick()}>Try again!</button>
    </div>
  </div>);
}

export default TypingTestSummary;