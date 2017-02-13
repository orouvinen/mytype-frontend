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

export function stop(stopTime, wpm) {
  return {
    type: 'TYPING_TEST_DONE',
    wpm,
    stopTime,
  };
}

export function start(startTime) {
  return {
    type: 'TYPING_TEST_START',
    startTime,
  };
}
