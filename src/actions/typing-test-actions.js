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

export function stop(stopTime) {
  return {
    type: 'TYPING_TEST_DONE',
    stopTime,
  };
}

export function start(startTime) {
  return {
    type: 'TYPING_TEST_START',
    startTime,
  };
}

export function keyPress(key) {
  return {
    type: 'TYPING_TEST_KEYPRESS',
    key,
  }
}

export function character(char) {
  return {
    type: 'TYPING_TEST_CHARACTER',
    char,
  };
}

export function erase(isCorrect) {
  return {
    type: 'TYPING_TEST_ERASE',
    isCorrect,  // Was the erased character correct?
  };
}

export function reset() {
  return {
    type: 'TYPING_TEST_RESET',
  }
}
