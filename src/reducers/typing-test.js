const initialState = {
  text: [""],     // the text as an array of text lines
  line: 0,        // current line num 0...n-1
  word: 0,        // word num in the current line 0...n-1
  inProgress: false,  // typing is taking place?
  finished: false,    // the typing test has finished?
  finishWPM: 0,
  startTime: undefined, // timestamp for typing start time
  stopTime: undefined   // timestamp for finishing time 
};

function typingTest(state = initialState, action) {
  switch (action.type) {
    case 'TYPING_TEST_WORD_TYPED':
      return advanceWord(state);

    case 'TYPING_TEST_SET_TEXT':
      return {
        ...state,
        text: textToLines(action.text, action.lineLength),
      };
    case 'TYPING_TEST_DONE':
      return {
        ...state,
        stopTime: action.stopTime,
        inProgress: false,
        finished: true,
        finishWPM: action.wpm,
      };
      // break;
    case 'TYPING_TEST_START':
      return {
        ...state,
        startTime: action.startTime,
        inProgress: true,
        line: 0,
        word: 0,
        finishWPM: 0,
      };
    default:
      return state;
  }
}

function advanceWord(state) {
  let newState = {}
  newState = Object.assign(newState, state);

  let line = state.line;
  let text = state.text;
  newState.word++;
  if (newState.word === text[line].split(" ").length) {
    newState.word = 0;
    if (state.line + 1 < state.text.length)
      newState.line++;
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
