import React, { Component } from 'react';
import { wpm, accuracy } from '../helpers/wpm.js';

const containerStyle = {
  float: "left",
  width: "30%",
  marginLeft: "3px",
};

class WPM extends Component {
  constructor() {
    super();
    this.state = { 
      wpm: 0,
      accuracy: "NaN",
      timer: null,
    };
    this.netWPM = this.netWPM.bind(this);
  }
  
  componentWillReceiveProps(props) {
    if (props.typingTest.running && !this.state.timer) {
      this.setState({
        timer: setInterval(this.updateWPM.bind(this), 500),
      });
    }
  }

  updateWPM() {
    const { typingTest } = this.props;
    const { correctChars, wrongChars } = typingTest;
    if (!typingTest.finished) {
      this.setState({ 
        wpm: this.netWPM().toFixed(),
        accuracy: accuracy(correctChars, wrongChars).toFixed(1),
      });
    } else {
      clearInterval(this.state.timer);
      this.setState({ timer: null });
    }
  }

  netWPM() {
    const typingTest = this.props.typingTest;
    const { correctChars, wrongChars } = this.props.typingTest;
    // Figure out elapsed time in milliseconds 
    let timeElapsed;
    if (!typingTest.running) {
      if (typingTest.finished)
        timeElapsed = typingTest.stopTime - typingTest.startTime; 
      else
        return 0; // Nothing has been typed yet
    } else
      timeElapsed = Date.now() - typingTest.startTime;

    return wpm(correctChars, wrongChars, timeElapsed);
  }

  render() {
    return(<div style={containerStyle}>
      <div style={{fontFamily: "Open Sans"}}>
        WPM: <strong>{this.state.wpm}</strong>
      </div>
      <div>Accuracy:&nbsp;
        {this.state.accuracy !== "NaN" ? this.state.accuracy + "%" : ""}
      </div>
    </div>);
  }
}

WPM.propTypes = {
  typingTest: React.PropTypes.object.isRequired,
}

export default WPM;
