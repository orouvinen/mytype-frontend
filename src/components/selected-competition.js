import React from 'react';
import { Link } from 'react-router';
import colors from '../colors';

const infoBoxStyle = {
  backgroundColor: colors.primary2,
  marginRight: "5px",
  padding: "5px",
  borderRadius: "1px",
};

const joinButtonWrapper = {
  textAlign: "center",
};

const SelectedCompetition = props => {
  if (!props.competition.selected) {
    return (
      <div style={infoBoxStyle}>
        <span style={{ color: "gray" }}>No competition selected.</span>
      </div>);
  } else {
    const competitionUrl = `/competition/${props.competition.selected}`;
    return (
      <div style={infoBoxStyle}>
        <Link to={competitionUrl}>
          <div style={joinButtonWrapper}>
            <button className="greenButton" style={{ width: "80%" }}>
              Join
          </button>
          </div>
        </Link>
      </div>);
  }
};

export default SelectedCompetition;