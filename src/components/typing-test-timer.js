import React, { Component } from 'react';

class TypingTestTimer extends Component {
    constructor() {
        super();
        this.renderTimeDigits = this.renderTimeDigits.bind(this);
    }

    renderTimeDigits(x) {
        if (x < 10) {
            return("0" + x);
        }
        else
            return x;
    }

    render() {
        return(<div>{this.renderTimeDigits(this.props.minutes)}:{this.renderTimeDigits(this.props.seconds)}</div>);
    }
}

TypingTestTimer.propTypes = {
    minutes: React.PropTypes.number.isRequired,
    seconds: React.PropTypes.number.isRequired
}

export default TypingTestTimer;
