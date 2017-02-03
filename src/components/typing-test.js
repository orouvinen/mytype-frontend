import React from 'react';
import TypingTestContents from './typing-test-contents';
import TypingTestInput from './typing-test-input';
import TypingTestTimer from './typing-test-timer';

class TypingTest extends Component {
    constructor() {
        super();
        this.state = { lines: [""] };
    }

    componentDidMount() {
        this.setState({ lines: this.textToLines() });
    }

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
                lines[currentLine] += " ";
            lines[currentLine] += word;
        });
        return lines;
    }

    render() {
        return(
            <div>
                <TypingTestContents text={textToLines(this.props.lineLength)} />
                <TypingTestInput onKeyPress={this.props.onKeyPress} />
                <TypingTestTimer minutes={this.props.minutes} seconds={this.props.seconds} />
            </div>);
    }
}

export default TypingTest;
