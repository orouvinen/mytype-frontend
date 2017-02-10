import React from 'react';

const WPM = ({typingTest, correctChars, wrongChars}) => {
  const wpm = netWPM(typingTest, correctChars, wrongChars).toFixed(0);
  return(<div>{wpm}</div>);
};

function netWPM(typingTest, correctChars, wrongChars) {
  const charCount = correctChars + wrongChars; 

  console.log(typingTest, correctChars, wrongChars);
  // Figure out elapsed time in milliseconds 
  let timeElapsed;
  if (!typingTest.inProgress) {
    if (typingTest.finished)
      timeElapsed = typingTest.stopTime - typingTest.startTime; 
    else
      return 0; // Nothing has been typed yet
  } else
    timeElapsed = Date.now() - typingTest.startTime;

  // Convert to minutes and get final WPM
  timeElapsed /= 1000;
  timeElapsed /= 60;
  return ((charCount / 5) - wrongChars) / timeElapsed;
};

export default WPM;
