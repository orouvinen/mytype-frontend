import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';

import TypingTest from '../components/typing-test';
import * as action from '../actions/action-creators';

class TypingTestContainer extends Component {
    constructor() {
        super();
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.calculateWPM = this.calculateWPM.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.state = {
            text: "this is test text the quick brown fox jumped over the lazy fox" +
            "second line of text begins here so and so testing one two three the cat is free",
            minutes: 0,
            seconds: 0,
            typedText: "",
            currentChar: 0,
            correctCharCount: 0,
            wrongCharCount: 0,
            durationMinutes: 1,
            durationSeconds: 0,
        };
    }

    componentDidMount() {
        this.props.dispatch(action.setText(this.state.text));
    }

    start() {
        this.props.dispatch(action.startTypingTest(this.state.text));
        this.setState({
            // Timer interval handler
            interval: window.setInterval(() => {
                let { minutes, seconds } = this.state;

                seconds = seconds === 0 ? 59 : seconds - 1;
                if (seconds === 59 && minutes !== 0)
                    minutes -= 1;

                this.setState({ seconds, minutes });

                if (seconds === 0 && minutes === 0)
                    this.stop();

            }, 1000)});
    }

    stop() {
        window.clearInterval(this.state.interval);
        //this.setState({ inProgress: false })
        store.dispatch(action.typingTestDone(this.calculateWPM()))
    }

    calculateWPM() {
        return 0;
    }

    handleKeyPress(e) {
        if (e.key === 'Shift' || e.key === 'Ctrl' || e.key === 'Alt')
            return;
        
        if (!this.props.typingTest.inProgress && e.key !== 'Shift' && e.key !== 'Tab')
            this.start();

        let { currentChar, correctCharCount, wrongCharCount } = this.state;

        //
        // Handle backspace
        //
        if (e.key === 'Backspace') {
            // Already at the beginning?
            if (currentChar === 0)
                return;

            if (this.state.typedText[currentChar - 1] === this.state.text[currentChar - 1])
                correctCharCount--;
            else
                wrongCharCount--;

            currentChar--;
            this.setState({ typedText: this.state.typedText.slice(0, this.state.typedText.length - 1) });
        } else {
            //
            // Handle other keys than backspace
            //
            if (e.key === this.state.text[currentChar])
                correctCharCount++;
            else
                wrongCharCount++;

            currentChar++;

            this.setState({ typedText: this.state.typedText + e.key });
        }
        this.setState({
            correctCharCount,
            wrongCharCount,
            currentChar,
        });

        if (e.key === "Tab")
            e.preventDefault();
    }

    render() {
        return(
            <TypingTest
                text={this.props.typingTest.text}
                lineLength={60}
                minutes={this.state.minutes}
                seconds={this.state.seconds}
                onKeyPress={this.handleKeyPress}/>
        );
    }
}

function mapStateToProps(state) {
    return { typingTest: state.typingTest };
}

function mapDispatchToProps(dispatch) {
    return { };
}

export default connect(mapStateToProps)(TypingTestContainer);//TypingTestContainer;
