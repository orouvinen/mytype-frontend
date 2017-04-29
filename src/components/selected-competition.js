import React from 'react';
import { Link } from 'react-router';

const SelectedCompetition = props => {
  const competitionUrl = `/competition/${props.competition.selected}`;
  return (
  <div>
    <Link to={competitionUrl}>
      <button className="greenButton" style={{ width: "80%" }}>Join</button>
    </Link>
  </div>);
};

export default SelectedCompetition;