import { typingActions } from '../actions/action-types';

const initialState = {
  text: [""],     // the text as an array of text lines
  line: 0,        // current line num 0...n-1
  word: 0,        // word num in the current line 0...n-1
  char: 0,        // current character
  typedWord: "",  // Progress of currently typed word
  typedLine: [],      // All the typed words on the current line so far
  running: false,  // typing is taking place?
  finished: false,    // the typing test has finished?
  startTime: undefined, // timestamp for typing start time
  stopTime: undefined,  // timestamp for finishing time
  correctChars: 0,
  wrongChars: 0,
  totalWords: 0, // total number of words typed so far
};

const cloneState = state => {
  return {
    ...state,
    typedLine: state.typedLine.slice(0),
  };
};

function typingTest(state = initialState, action) {
  switch (action.type) {
    case typingActions.TYPINGTEST_SET_TEXT:
      return {
        ...cloneState(state),
        text: textToLines(action.text, action.lineLength),
      };

    case typingActions.TYPINGTEST_DONE:
      return {
        ...cloneState(state),
        stopTime: action.stopTime,
        running: false,
        finished: true,
        finishWPM: action.wpm,
      };

    case typingActions.TYPINGTEST_START:
      return {
        ...cloneState(state),
        startTime: action.startTime,
        running: true,
        line: 0,
        word: 0,
        totalWords: 0,
      };

    case typingActions.TYPINGTEST_KEYPRESS:
      return keyHandler(action.key, state);

    case typingActions.TYPINGTEST_RESET:
      return {
        ...cloneState(state),
        text: state.text,
      };
    default:
      return state;
  }
}

function keyHandler(key, currentState) {
  let state = cloneState(currentState);
  const { text, line, word, char, typedWord } = state;
  const words = text[line].split(' ');
  const correctWord = words[word];

  if (key === 'Backspace') {
    // Already at the beginning of the current word?
    if (char === 0)
      return state;

    // Was the to-be-deleted character correct or incorrect?
    if (typedWord[char - 1] === correctWord[char - 1])
      state.correctChars--;
    else
      state.wrongChars--;
    state.char--;
    // Shave off last letter from the typed word
    state.typedWord = state.typedWord.slice(0, state.typedWord.length - 1);
  } else if (key === ' ' || key === 'Enter') {
    state = advanceWord(currentState);
  } else if (key.length === 1) { // Handle alpha-numeric letters
    if (key === correctWord[char])
      state.correctChars++;
    else
      state.wrongChars++;

    state.typedWord += key;
    state.char++;
  }
  return state;
}


// Returns new state when space / enter has been pressed
function advanceWord(currentState) {
  //let state = Object.assign({}, currentState);
  let state = cloneState(currentState);
  const { line, text } = currentState;
  const words = text[line].split(' ');
  let currentWord = words[state.word];

  state.typedLine.push(currentState.typedWord);
  state.word++;
  state.totalWords++;
  state.char = 0;
  state.typedWord = "";

  // Add to incorrect character count any letters that were not typed,
  // or excess letters typed beyond the correct word.
  if (currentState.char > currentWord.length)
    state.wrongChars += currentState.char - currentWord.length;
  else
    state.wrongChars += currentWord.length - currentState.char;

  // End of line reached?
  if (state.word === words.length) {
    // Check if the last line was typed and stop the test if so.
    // Otherwise just advance to new line
    if (state.line === text.length - 1) {
      state.endTime = Date.now();
      state.finished = true;
    } else {
      state.correctChars++; // Space / enter counts as correct char
      state.typedLine = [];
      state.word = 0;
      state.line++;
    }
  }
  return state;
}

// Convert the text passed in to an array of strings, where each
// line is no longer than lineLength characters.
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
