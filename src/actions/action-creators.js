export function wordTyped() {
  return {
    type: 'TYPING_TEST_WORD_TYPED'  
  };
};

export function setText(text) {
  return {
    type: 'TYPING_TEST_SET_TEXT',
    text,
  }
}

export function typingTestDone(endTime, wpm) {
  return { 
    type: 'TYPING_TEST_DONE',
    wpm, 
    endTime,
  };
}

export function startTypingTest(startTime, text) {
  return {
    type: 'TYPING_TEST_START',
    text,
    startTime,
  };
}
