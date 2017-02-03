const initialState = {
    text: [""],
    currentLineNum: 0,
    inProgress: false,
};

function typingTest(state = initialState, action) {
    switch (action.type) {
        case 'TYPING_TEST_SET_TEXT':
            return {
                ...state,
                text: textToLines(action.text, 60),
            };
        case 'TYPING_TEST_DONE':
            return {
                ...state,
                inProgress: false,
            };
            // break;
        case 'TYPING_TEST_START':
            return {
                ...state,
                inProgress: true,
                currentLineNum: 0,
            };
        default:
            return state;
    }
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
