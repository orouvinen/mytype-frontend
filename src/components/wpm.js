import React, { Component } from 'react';

const containerStyle = {
  fontSize: "2.5em",
};

class WPM extends Component {
  constructor() {
    super();
    this.state = { 
      wpm: 0,
    };
    this.netWPM = this.netWPM.bind(this);
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.setState({ wpm: this.netWPM().toFixed() })
      }, 1000),
    });
  }
  componentWillUnMount() {
    clearInterval(this.state.timer);
  }

  netWPM() {
    const { correctChars, wrongChars, typingTest } = this.props;
    const charCount = correctChars + wrongChars; 

    // Figure out elapsed time in milliseconds 
    let timeElapsed;
    if (!typingTest.inProgress) {
      if (typingTest.finished)
        timeElapsed = typingTest.stopTime - typingTest.startTime; 
      else
        return 0; // Nothing has been typed yet
    } else
      timeElapsed = Date.now() - typingTest.startTime;

    // Convert to minutes and get final WPM
    timeElapsed /= 1000;
    timeElapsed /= 60;
    // Return non-negative WPM
    return Math.max(0, ((charCount / 5) - wrongChars) / timeElapsed);
  }

  render() {
    return(<div style={containerStyle}>{this.state.wpm}</div>);
  }
}

export default WPM;
