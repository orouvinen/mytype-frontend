import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { wpm } from '../helpers/wpm';
import TypingTest from '../components/typing-test';
import * as actions from '../actions/action-creators';

const corpus = 
  "the be to of and a in that have I it for not on with" +
  " he as you do at this but his by from they we say her she or an will my one" +
  " all would there their what so up out if about who get which go me when" +
  " make can like time no just him know take people into year your good some" +
  " could them see other than then now look only come its over think also" +
  " back after use two how our work first well way even new want because any" +
  " these give day most us";

const wordList = corpus.split(" ");

class TypingTestContainer extends Component {
  constructor() {
    super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.getRandomText = this.getRandomText.bind(this);
    this.state = { words: [] }; 
  }

  componentDidMount() {
    // Generate random words
    const text = this.getRandomText(20);
    this.props.setText(text, 45);
    
    // Transform the text into on array of words for local state
    this.setState({ words: text.split(" ") }); 
  }

  // Generates a string with n randomly selected words separated by spaces 
  getRandomText(n) {
    const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    let text = [];
    for (let i = 0; i < n; i++)
      text.push(wordList[rand(0, wordList.length)]);

    return text.join(" ");
  }

  componentWillReceiveProps(props) {
    const { text, line, word, typedWord } = props.typingTest;
    const words = text[line].split(' ');
    const correctWord = words[word];
    // See if the keyhandler has marked the test finished due to
    // the last line being typed (with last space / enter pressed
    // on last word)
    if (props.typingTest.inProgress && props.typingTest.finished) {
      this.stop();
      return;
    }
    // Do nothing if the current round has been finished
    if (props.typingTest.finished && !props.typingTest.inProgress)
      return;

    // Check if the last word of the test was typed correctly and
    // stop the round immediately if so
    if (props.typingTest.inProgress &&
        line === text.length - 1 &&
        word === words.length - 1 &&
        typedWord === correctWord)
      this.stop();
  }

  start() {
    this.props.reset();
    this.props.start(Date.now());
  }

  stop() {
    const { typingTest } = this.props;
    this.props.stop(typingTest.endTime,
                    wpm(typingTest.correctChars, typingTest.wrongChars,
                    typingTest.endTime - typingTest.startTime));
  }

  handleKeyPress(e) {
    const { typingTest } = this.props;

    if (typingTest.finished)
      return;

    e.preventDefault();

    if (e.key === 'Shift' || e.key === 'Ctrl' || e.key === 'Alt')
      return;

    // Start when typing starts
    if (!typingTest.inProgress &&
      e.key !== 'Shift' &&
      e.key !== 'Tab')
      this.start();
     
    this.props.keyPress(e.key);
  }

  render() {
    return(
      <TypingTest
        typingTest={this.props.typingTest}
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
