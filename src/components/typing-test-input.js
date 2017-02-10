import React from 'react';

const style = {
  width: "10em",
  textAlign: "center",
  width: "50%",
  margin: "3px auto 3px auto",
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
