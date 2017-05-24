import React from 'react';

const style = {
  float: "left",
  textAlign: "center",
  width: "60%",
  margin: "3px 0 3px",
  borderRadius: "2px",
  border: "none",
  height: "1.8em",
  fontSize: "1.3em",
  background: "white",
  color: "black",
};

const TypingTestInput = ({typingTest, onKeyPress}) =>
  <input
    type="text"
    style={style}
    value={typingTest.typedWord}
    onChange={() => null}
    onKeyDown={onKeyPress} />

TypingTestInput.propTypes = {
  typingTest: React.PropTypes.object.isRequired,
  onKeyPress: React.PropTypes.func.isRequired,
};

export default TypingTestInput;
