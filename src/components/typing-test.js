import React, { Component } from 'react';
import TypingTestContents from './typing-test-contents';
import TypingTestInput from './typing-test-input';
import TypingTestTimer from './typing-test-timer';
/*
 * notetoself: this code was much cleaner as a functional component and
 * a simple toLines(text,lineLength) function aside.
 */
class TypingTest extends Component {
    constructor() {
        super();
        this.textToLines = this.textToLines.bind(this);
        this.state = { lines: [""] };
    }

    componentDidMount() {
        this.setState({ lines: this.textToLines(this.props.lineLength)});
    }

    textToLines(lineLength) {
        let lines = [""]
        let currentLine = 0;

        let words = this.props.text.split(" ");

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

    render() {
        return(
            <div>
                <TypingTestContents text={this.state.lines} />
                <TypingTestInput onKeyPress={this.props.onKeyPress} />
                <TypingTestTimer minutes={this.props.minutes} seconds={this.props.seconds} />
            </div>
        );
    }
}

export default TypingTest;
