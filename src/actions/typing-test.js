import { typingActions } from './action-types';

export function setText(text, lineLength) {
  return {
    type: typingActions.TYPINGTEST_SET_TEXT,
    text,
    lineLength,
  };
}

export function stop(userId, competitionId, wpm, acc, startTime, endTime) {
  return {
    type: typingActions.TYPINGTEST_DONE,
    userId,
    competitionId,
    wpm,
    acc,
    startTime,
    endTime,
  };
}

export function start(startTime) {
  return {
    type: typingActions.TYPINGTEST_START,
    startTime,
  };
}

export function reset() {
  return {
    type: typingActions.TYPINGTEST_RESET,
  };
}

export function keyPress(key) {
  return {
    type: typingActions.TYPINGTEST_KEYPRESS,
    key,
  };
}

export function character(char) {
  return {
    type: typingActions.TYPINGTEST_CHARACTER,
    char,
  };
}

export function erase(isCorrect) {
  return {
    type: typingActions.TYPINGTEST_ERASE,
    isCorrect,  // Was the erased character correct?
  };
}

