import React from 'react';

const CompetitionControls = props => (
  <div>
    <button>&lt;</button>
    <button>&gt;</button>
    <button onClick={props.onCreateClicked}>+ Create competition</button>
  </div>
);

export default CompetitionControls;
