export function setText(text) {
    return {
        type: 'TYPING_TEST_SET_TEXT',
        text: text,
    }
}

export function typingTestDone(wpm) {
    return { 
        type: 'TYPING_TEST_DONE',
        wpm: wpm, 
    };
}

export function startTypingTest(text) {
    return {
        type: 'TYPING_TEST_START',
        text: text,
    };
}

export function wordTyped() {
    return {
        type: 'WORD_TYPED',
    };
}
