import React from 'react';
import { Link } from 'react-router';
import colors from '../colors';

const infoBoxStyle = {
  backgroundColor: colors.primary2,
  marginRight: "5px",
  padding: "5px",
  borderRadius: "1px",
  lineHeight: "2em",
};

const joinButtonWrapper = {
  textAlign: "center",
};

function avgWpm(competition) {
  if (competition.results.length === 0)
    return 0;

  return competition.results
    .map(result => result.wpm)
    .reduce((sum, val) => sum + val, 0) / competition.results.length;
}

const SelectedCompetition = props => {
  if (!props.competition.selected) {
    return (
      <div style={infoBoxStyle}>
        <span style={{ color: "gray" }}>No competition selected.</span>
      </div>);
  } else {
    const competitionUrl = `/competition/${props.competition.selected}`;
    const competitiondId = props.competition.selected;
    return (
      <div style={infoBoxStyle}>
        <h3>Selected Competition</h3>
        <div>
          Avg WPM: {avgWpm(props.competition.competitions[competitiondId]).toFixed(1)}<br/>
        </div>
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