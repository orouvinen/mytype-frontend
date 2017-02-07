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

export function stop(endTime, wpm) {
  return { 
    type: 'TYPING_TEST_DONE',
    wpm, 
    endTime,
  };
}

export function start(startTime, text) {
  return {
    type: 'TYPING_TEST_START',
    startTime,
    text,
  };
}
