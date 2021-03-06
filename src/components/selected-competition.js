import React from 'react';
import { Link } from 'react-router';
import CompetitionResultList from './competition-result-list';
import CommonData from './common-data';
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
  backgroundColor: colors.primary2,
  border: `1px solid ${colors.primary1}`,
  margin: "5px auto",
};

const joinButtonWrapper = {
  marginTop: "5px",
  marginBottom: "5px",
  textAlign: "center",
};

function avgWpm(competition) {
  if (competition.results.length === 0)
    return 0;

  return competition.results
    .map(result => result.wpm)
    .reduce((sum, val) => sum + val, 0) / competition.results.length;
}

function userRank(user, competition) {
  const position = competition.results.findIndex(c => c.user.id === user.id) + 1;
  if (!position)
    return '-';

  return '#' + position;
}

const SelectedCompetition = props => {
  if (!props.competition.selected) {
    return (
      <div style={infoBoxStyle}>
        <span style={{ color: colors.complementary0 }}>
          <strong>No competition selected.</strong><br /> To get started, select a competition from the competition list, or create a new competition
          if there's no suitable competition running already.
        </span>
      </div>);
  } else if (!props.competition.competitions[props.competition.selected]) {
    // If the selected competition is not yet loaded in the store, then
    // don't attempt to render anything.
    // This happens, when the user has created a competition and it was
    // then automatically selected by the createCompetition saga, but
    // the competition list update isn't yet received from the back-end.
    return null;
  } else {
    const competitionUrl = `/competition/${props.competition.selected}`;
    const competitiondId = props.competition.selected;
    return (
      <div className="borderedContainer">
        <h2 className="headerBar">Selected Competition</h2>
        <Link to={competitionUrl}>
          <div style={joinButtonWrapper}>
            <button style={{ width: "90%" }}>
              Join
            </button>
          </div>
        </Link>
        <div style={competitionStatsStyle}>
          <CommonData heading="Avg. WPM">
            {avgWpm(props.competition.competitions[competitiondId]).toFixed(1)}<br />
          </CommonData>
        </div>
        <div style={competitionStatsStyle}>
          <CommonData heading="Your current position">
            {props.auth.loggedIn ?
              userRank(props.auth.user, props.competition.competitions[props.competition.selected]) :
              "N/A"}
          </CommonData>
        </div>
        <CompetitionResultList competition={props.competition.competitions[props.competition.selected]} />
      </div>
    );
  }
};

export default SelectedCompetition;