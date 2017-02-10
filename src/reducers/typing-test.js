const initialState = {
  text: [""],
  currentLineNum: 0,
  currentWordNum: 0,
  inProgress: false,
  finished: false,
  startTime: undefined,
  stopTime: undefined
};

function typingTest(state = initialState, action) {
  switch (action.type) {
    case 'TYPING_TEST_WORD_TYPED':
      return advanceWord(state);

    case 'TYPING_TEST_SET_TEXT':
      return {
        ...state,
        text: textToLines(action.text, 50),
      };
    case 'TYPING_TEST_DONE':
      return {
        ...state,
        stopTime: action.stopTime,
        inProgress: false,
        finished: true, 
      };
      // break;
    case 'TYPING_TEST_START':
      return {
        ...state,
        startTime: action.startTime,
        inProgress: true,
        currentLineNum: 0,
        currentWordNum: 0,
      };
    default:
      return state;
  }
}

function advanceWord(state) {
  let newState = {}
  newState = Object.assign(newState, state);

  let line = state.currentLineNum; 
  let text = state.text;
  newState.currentWordNum++;
  if (newState.currentWordNum === text[line].split(" ").length) {
    newState.currentWordNum = 0;
    if (state.currentLineNum + 1 < state.text.length)
      newState.currentLineNum++;
  }
  return newState;
}

// Convert the text passed in to an array of string, where each
// line is no longer than props.lineLength characters.
function textToLines(text, lineLength) {
  let lines = [""]
  let currentLine = 0;

  let words = text.split(" ");

  words.forEach(word => {
    // Create new line if inserting the current word would exceed
    // the max line length
    if (lines[currentLine].length + word.length > lineLength) {
      lines.push("");
      currentLine++;
    } else if (lines[currentLine].length > 0)
      // Insert space if this is not the first word on the line
      lines[currentLine] += " ";

    lines[currentLine] += word;
  });
  return lines;
}

export default typingTest;
