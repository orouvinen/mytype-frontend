import React from 'react';

const CompetitionControls = props => (
  <div>
    <button className="greenButton" onClick={props.onCreateClicked}>+ Create competition</button>
  </div>
);

export default CompetitionControls;
