export function wordTyped() {
  return {
    type: 'TYPING_TEST_WORD_TYPED'
  };
};

export function setText(text, lineLength) {
  return {
    type: 'TYPING_TEST_SET_TEXT',
    text,
    lineLength,
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
