import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TypingTest from '../components/typing-test';
import * as actions from '../actions/typing-test';
import { saveResult } from '../actions/competition';
import { wpm, accuracy } from '../helpers/wpm';

class TypingTestContainer extends Component {
  constructor() {
    super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = { words: [] }; 
    
    this.initText = this.initText.bind(this);
  }

  initText() {
    const text = this.props.content;
    this.props.setText(text, 45);
    this.setState({ words: text.split(" ") });
    this.props.reset();
  }

  componentDidMount() {
    this.initText();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.content !== this.props.content)
      this.initText();
  }

  componentWillReceiveProps(props) {
    const { text, line, word, typedWord } = props.typingTest;
    const words = text[line].split(' ');
    const correctWord = words[word];
    
    // See if the keyhandler has marked the test finished due to
    // the last line being typed (with space / enter pressed on last word)
    if (props.typingTest.running && props.typingTest.finished) {
      this.stop();
      return;
    }
    // Do nothing if the current round has been finished
    if (props.typingTest.finished && !props.typingTest.running)
      return;

    // Check if the last word of the test was typed correctly and
    // stop the round immediately if so
    if (props.typingTest.running &&
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
    // When arriving here, we need to wait just a little bit for the last correctChar increment
    // to be done in the store. I'm not exactly sure why it happens, but it happens.
    // As a results, without the delay, we would store WPM measures that are ~0.5 WPM too slow.
    setTimeout(() => {
      const { typingTest, auth } = this.props;
      const { startTime } = typingTest;
      const endTime = typingTest.endTime || Date.now();

      const wpmMeasure = wpm(typingTest.correctChars, typingTest.wrongChars, endTime - startTime);
      const acc = accuracy(typingTest.correctChars, typingTest.wrongChars);

      this.props.stop(wpmMeasure, endTime);

      if(auth.loggedIn) {
        const competitionId = this.props.competition.selected;
        this.props.saveResult(auth.user.id, competitionId, wpmMeasure, acc, startTime, endTime);
      }
    }, 250);
  }

  handleKeyPress(e) {
    const { typingTest } = this.props;

    if (typingTest.finished)
      return;

    e.preventDefault();

    if (e.key === 'Shift' || e.key === 'Ctrl' || e.key === 'Alt')
      return;

    // Start when typing starts
    if (!typingTest.running && e.key.length === 1) {
      this.start();
      this.props.keyPress(e.key);
    } else if (typingTest.running) 
      this.props.keyPress(e.key);
  }

 render() {
    return(
      <TypingTest
        user={this.props.auth.user}
        typingTest={this.props.typingTest}
        onKeyPress={this.handleKeyPress}
        competition={this.props.competition}
        reset={this.props.reset} />
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    typingTest: state.typingTest,
    //user: state.auth.user,
    competition: state.competition,
  };
}

function mapDispatchToProps(dispatch) {
  return { 
    ...bindActionCreators(actions, dispatch),
    saveResult: (userId, competitionId, wpm, acc, startTime, endTime) =>
      dispatch(saveResult(userId, competitionId, wpm, acc, startTime, endTime)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TypingTestContainer);
