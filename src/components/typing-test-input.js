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
};

const TypingTestInput = ({typedWord, onKeyPress}) =>
  <input type="text" style={style} value={typedWord} onKeyDown={onKeyPress} />

TypingTestInput.propTypes = {
  onKeyPress: React.PropTypes.func.isRequired
};

export default TypingTestInput;
