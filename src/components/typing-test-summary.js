import React from 'react';
import { wpm, accuracy } from '../helpers/wpm';

const summaryStyle = {
  clear: "both",
  display: "block",
  margin: "30px 0 0 0",
  padding: "8px",
  textAlign: "center",
};

const TypingTestSummary = props => {
  if (!props.typingTest.finished)
    return null;

  const { correctChars, wrongChars }  = props.typingTest;
  const { startTime, endTime } = props.typingTest;
  const wpmMeasure = wpm(correctChars, wrongChars, endTime - startTime);

  return (
  <div className="borderedContainer" style={summaryStyle}>
    <h1>Summary</h1>
    <div style={{fontSize: "5em"}}>{wpmMeasure.toFixed(1)}</div>
    <div style={{fontSize: "1.3em"}}>WPM</div>
    <div style={{marginTop: "2em"}}>Accuracy: {accuracy(correctChars, wrongChars).toFixed(1)}%</div>
    <div>
      <button style={{fontSize: "1.5em"}} type="button" onClick={() => props.onResetClick()}>Try again!</button>
    </div>
  </div>);
}

export default TypingTestSummary;