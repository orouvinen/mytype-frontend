import React from 'react';
import { Link } from 'react-router';
import CompetitionResultList from './competition-result-list';
import colors from '../colors';

const infoBoxStyle = {
  backgroundColor: colors.primary2,
  marginRight: "5px",
  padding: "5px",
  borderRadius: "1px",
  lineHeight: "2em",
};

const competitionStatsStyle = {
  width: "calc(90% - 6px)",
  padding: "3px",
  backgroundColor: colors.primary3,
  border: `1px solid ${colors.primary1}`,
  margin: "5px auto",
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
        <h3 style={{textAlign: "center"}}>Selected Competition</h3>
        <Link to={competitionUrl}>
          <div style={joinButtonWrapper}>
            <button className="greenButton" style={{ width: "90%" }}>
              Join
            </button>
          </div>
        </Link>
        <div style={competitionStatsStyle}>
          Avg WPM: {avgWpm(props.competition.competitions[competitiondId]).toFixed(1)}<br />
        </div>
        <CompetitionResultList competition={props.competition} />
      </div>
    );
  }
};

export default SelectedCompetition;