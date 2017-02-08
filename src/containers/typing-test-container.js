// TODO:
// move typedWord from state to redux store, and possibly other
// state variables as well

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TypingTest from '../components/typing-test';
import * as actions from '../actions/action-creators';

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
      words: [],
      typedWord: "", // The current word as typed by the user
      totalWords: 0,
      currentChar: 0,
      correctCharCount: 0,
      wrongCharCount: 0,
    };
  }

  componentDidMount() {
    this.props.setText(this.state.text);
    // Transform the text into on array of words
    this.setState({words: this.state.text.split(" ")});
    this.setState({ minutes: 1, seconds: 0 });
  }

  start() {
    this.props.start(Date.now(), this.state.text); 
  }

  stop() {
    this.props.stop(Date.now(), this.calculateWPM());
  }

  calculateWPM() {
    return 0;
  }

  handleKeyPress(e) {
    if (this.props.typingTest.finished)
      return;

    let {
      typedWord,
      totalWords,
      currentChar,
      correctCharCount,
      wrongCharCount } = this.state;

    // Get the word that's currently being typed
    const word = this.state.words[totalWords];

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
      if (totalWords === this.state.words.length)
        this.stop();
      else
        this.props.wordTyped();
    } else {
      // Handle other keys than backspace, space or enter
      if (e.key.length > 1)
        return; // Discard non-alphanumeric

      if (e.key === word[currentChar])
        correctCharCount++;
      else
        wrongCharCount++;

      currentChar++;
      typedWord += e.key;

      // Stop if all the text was typed (the last character being correct)
      if (this.state.totalWords === this.state.words.length - 1 &&
        typedWord.length === word.length &&
        typedWord.slice(-1) === word.slice(-1)) {

          this.stop();
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
        currentWord={this.props.typingTest.currentWordNum}
        typedWord={this.state.typedWord}
        line={this.props.typingTest.currentLineNum}
        lineLength={60}
        onKeyPress={this.handleKeyPress}/>
    );
  }
}

function mapStateToProps(state) {
  return { typingTest: state.typingTest };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TypingTestContainer);
