const initialState = {
    inProgress: false,
};

function typingTest(state = initialState, action) {
    switch (action.type) {
        case 'TYPING_TEST_DONE':
            return state;
            // break;
        default:
            return state;
    }
}

export default typingTest;
