import React from 'react';

const CommonData = props =>
<div>
  <span style={{ fontWeight: "bold" }}>{props.heading}:&nbsp;</span>
  <span className="data-display">{props.children}</span>
</div>;

export default CommonData;