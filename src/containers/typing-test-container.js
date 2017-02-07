import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
      " second line of text begins here so and so testing one two three the" +
      " cat is free",
      minutes: 0,
      seconds: 0,
      typedText: "",
      currentChar: 0,
      correctCharCount: 0,
      wrongCharCount: 0,
    };
  }

  componentDidMount() {
    this.props.setText(this.state.text);
    this.setState({ minutes: 1, seconds: 0 });
  }

  start() {
    this.props.start(Date.now(), this.state.text); 
    /*
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
      */
  }

  stop() {
    window.clearInterval(this.state.interval);
    this.props.stop(Date.now(), this.calculateWPM());
  }

  calculateWPM() {
    return 0;
  }

  handleKeyPress(e) {
    let { typedText } = this.state;

    if (e.key === "Tab")
      e.preventDefault();
    
    if (e.key === 'Shift' || e.key === 'Ctrl' || e.key === 'Alt')
      return;
    
    // Start when typing starts
    if (!this.props.typingTest.inProgress &&
        e.key !== 'Shift' &&
        e.key !== 'Tab')
      this.start();

    let { currentChar, correctCharCount, wrongCharCount } = this.state;
    
    // Handle backspace
    if (e.key === 'Backspace') {
      // Already at the beginning of the current word or (the whole text)?
      if (currentChar === 0 || this.state.text[currentChar - 1] === ' ')
        return;

      // Is this a correct char?
      if (this.state.typedText[currentChar - 1] ===
          this.state.text[currentChar - 1])
        correctCharCount--;
      else
        wrongCharCount--;

      currentChar--;
      typedText = typedText.slice(0, typedText.length - 1);
    } else {
      if (e.key === ' ' || e.key === 'Enter') {
        // If this was the last word, then stop the typing test,
        // otherwise move on to next word
        if (currentChar === this.state.text.length)
          this.stop();
        else
          this.props.wordTyped();
      }

      // Handle other keys than backspace
      if (e.key === this.state.text[currentChar])
        correctCharCount++;
      else
        wrongCharCount++;

      currentChar++;
      typedText += e.key;
      
      // Stop if all the text was typed (the last character being correct)
      if (typedText.length === this.state.text.length &&
          typedText.slice(-1) === this.state.text.slice(-1))
        this.stop();
    }
    this.setState({
      correctCharCount,
      wrongCharCount,
      currentChar,
      typedText,
    });
  }

  render() {
    return(
      <TypingTest
        text={this.props.typingTest.text}
        line={this.props.typingTest.currentLineNum}
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
  let { start, stop, wordTyped, setText } = action;
  return bindActionCreators({ 
    start,
    stop,
    wordTyped,
    setText,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TypingTestContainer);
