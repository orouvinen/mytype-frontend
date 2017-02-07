import React from 'react';

const TypingTestInput = ({onKeyPress}) =>
  <input type="text" onKeyDown={onKeyPress} />

TypingTestInput.propTypes = {
  onKeyPress: React.PropTypes.func.isRequired
};

export default TypingTestInput;
