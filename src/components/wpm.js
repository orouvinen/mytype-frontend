import React, { Component } from 'react';

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
    this.accuracy = this.accuracy.bind(this);
  }

  componentDidMount() {
    this.setState({
      // Update WPM once per second
      timer: setInterval(() => {
        this.setState({ 
          wpm: this.netWPM().toFixed(),
          accuracy: this.accuracy().toFixed(),
        });
      }, 1000),
    });
  }
  componentWillUnMount() {
    clearInterval(this.state.timer);
  }

  accuracy() {
    return (this.props.correctChars /
      (this.props.correctChars + this.props.wrongChars)) * 100;
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
    return(<div style={containerStyle}>
      <div style={{fontFamily: "Open Sans"}}>
        WPM: <strong>{this.state.wpm}</strong>
      </div>
      <div>Accuracy:
        {this.state.accuracy !== "NaN" ? this.state.accuracy + "%" : ""}
      </div>
    </div>);
  }
}

export default WPM;
