import React from 'react';
import TypingTestContents from './typing-test-contents';
import TypingTestInput from './typing-test-input';
import TypingTestTimer from './typing-test-timer';

const TypingTest = (props) => {
    const textToLines = (lineLength) => {
        let lines = [""]
        let currentLine = 0;

        let words = props.text.split(" ");

        words.forEach(word => {
            // Create new line if inserting the current word would exceed
            // the max line length
            if (lines[currentLine].length + word.length > lineLength) {
                lines.push("");
                currentLine++;
            } else if (lines[currentLine].length > 0)
                lines[currentLine] += " ";
            lines[currentLine] += word;
        });
        return lines;
    }

    return(
        <div>
            <TypingTestContents text={textToLines(props.lineLength)} />
            <TypingTestInput onKeyPress={props.onKeyPress} />
            <TypingTestTimer minutes={props.minutes} seconds={props.seconds} />
        </div>);
};

export default TypingTest;
