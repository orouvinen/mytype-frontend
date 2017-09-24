import React from 'react';
import colors from '../colors';

// Wrapper around the whole form
const containerStyle = {
  backgroundColor: colors.primary1,
  border: `${colors.secondary1} solid 1px`,
  width: "50%",
  maxWidth: "500px",
  margin: "30px auto",
  padding: "20px",
  borderRadius: "1px",
};

const FormWrapper = (props) => {
  return(
    <div style={containerStyle}>{props.children}</div>
  );
}

export default FormWrapper;
