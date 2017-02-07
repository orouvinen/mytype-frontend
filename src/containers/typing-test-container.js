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
      typedWord: "",
      totalWords: 0,
      currentChar: 0,
      correctCharCount: 0,
      wrongCharCount: 0,
    };
  }

  componentDidMount() {
    this.props.setText(this.state.text);
    // Transform the text into on array of words
    this.setState({text: this.state.text.split(" ")});
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
    let {
      typedWord,
      totalWords,
      currentChar,
      correctCharCount,
      wrongCharCount } = this.state;

    if (e.key === "Tab")
      e.preventDefault();

    if (e.key === 'Shift' || e.key === 'Ctrl' || e.key === 'Alt')
      return;

    // Start when typing starts
    if (!this.props.typingTest.inProgress &&
      e.key !== 'Shift' &&
      e.key !== 'Tab')
      this.start();

    // Handle backspace
    if (e.key === 'Backspace') {
      // Already at the beginning of the current word?
      if (currentChar === 0)
        return;

      // Is this a correct char?
      const word = this.state.text[this.props.typingTest.currentWordNum];
      if (this.state.typedWord[currentChar - 1] === word[currentChar - 1])
        correctCharCount--;
      else
        wrongCharCount--;

      currentChar--;
      typedWord = typedWord.slice(0, typedWord.length - 1);
    } else if (e.key === ' ' || e.key === 'Enter') {
      // If this was the last word, then stop the typing test,
      // otherwise move on to next word
      typedWord = "";
      totalWords++;
      currentChar = 0;
      if (totalWords === this.state.text.length)
        this.stop();
      else
        this.props.wordTyped();
    } else {
      const word = this.state.text[totalWords];
      // Handle other keys than backspace, space or enter
      if (e.key === word[currentChar])
        correctCharCount++;
      else
        wrongCharCount++;

      currentChar++;
      typedWord += e.key;

      // Stop if all the text was typed (the last character being correct)
      if (this.state.totalWords === this.state.text.length - 1 &&
        typedWord.length === word.length &&
        typedWord.slice(-1) === word.slice(-1)) {
          
        this.stop();
        console.log("end");    
      }
    }
    this.setState({
      correctCharCount,
      wrongCharCount,
      currentChar,
      typedWord,
      totalWords,
    });
  }

  render() {
    return(
      <TypingTest
        text={this.props.typingTest.text}
        typedWord={this.state.typedWord}
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
