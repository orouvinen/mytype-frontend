import React, { Component } from 'react';
import TypingTestContents from './typing-test-contents';
import TypingTestInput from './typing-test-input';
import TypingTestTimer from './typing-test-timer';

class TypingTest extends Component {
    constructor() {
        super();
        this.state = { lines: [""] };
        this.textToLines = this.textToLines.bind(this);
    }

    componentDidMount() {
        this.setState({ lines: this.textToLines() });
    }

    // Convert the text passed in as props to an array of string, where each
    // line is no longer than props.lineLength characters.
    textToLines() {
        let lines = [""]
        let currentLine = 0;

        let words = this.props.text.split(" ");

        words.forEach(word => {
            // Create new line if inserting the current word would exceed
            // the max line length
            if (lines[currentLine].length + word.length > this.props.lineLength) {
                lines.push("");
                currentLine++;
            } else if (lines[currentLine].length > 0)
                // Insert space if this is not the first word on the line
                lines[currentLine] += " ";

            lines[currentLine] += word;
        });
        return lines;
    }

    render() {
        return(
            <div>
                <TypingTestContents text={this.textToLines(this.props.lineLength)} />
                <TypingTestInput onKeyPress={this.props.onKeyPress} />
                <TypingTestTimer minutes={this.props.minutes} seconds={this.props.seconds} />
            </div>);
    }
}

export default TypingTest;
