import React from 'react';
import colors from '../colors';

// Wrapper around the whole login form
const containerStyle = {
  backgroundColor: colors.primary2,
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
