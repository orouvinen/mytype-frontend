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
    };
    this.netWPM = this.netWPM.bind(this);
  }

  componentDidMount() {
    this.setState({
      // Update WPM once per second
      timer: setInterval(() => {
        if (this.props.typingTest.inProgress) {
          this.setState({ 
            wpm: this.netWPM().toFixed(),
            accuracy: accuracy(this.props.correctChars, this.props.wrongChars)
                      .toFixed(1),
          });
        }
        if (this.props.typingTest.finished)
          clearInterval(this.state.timer);
      }, 500)
    });
  }

  netWPM() {
    const { correctChars, wrongChars, typingTest } = this.props;

    // Figure out elapsed time in milliseconds 
    let timeElapsed;
    if (!typingTest.inProgress) {
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

export default WPM;
