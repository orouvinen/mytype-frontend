import React from 'react';

const TypingTestInput = ({typedWord, onKeyPress}) =>
  <input type="text" value={typedWord} onKeyDown={onKeyPress} />

TypingTestInput.propTypes = {
  onKeyPress: React.PropTypes.func.isRequired
};

export default TypingTestInput;
