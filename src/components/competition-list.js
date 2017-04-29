import React from 'react';
import CompetitionControls from './competition-controls';
import colors from '../colors';


const competitionControlsWrapper = {
  margin: "5px 0 5px 0",
  paddingRight: "1px",
  textAlign: "right",
};

const competitionListWrapper = {
  padding: "5px",
  background: colors.primary4,
  borderRadius: "1px",
};

const competitionListRowStyle = {
  padding: "0.5em",
  margin: "2px 0 2px 0",
  borderRadius: "1px",
};

const selectedCompetitionStyle = {
  ...competitionListRowStyle,
  backgroundColor: colors.complementary1,
};

const headerStyle = {
  padding: "10px",
  background: "linear-gradient(" + colors.primary1 + ", " + colors.primary3 + ")",
  borderRadius: "4px",
};

const timerDigits = value => ((value < 10) ? "0" : "") + Math.floor(value).toFixed(0);

const timeLeft = competition => {
  // Get creation time
  const start = new Date(competition.createdAt);
  // Work out end time
  const end = new Date(start);
  end.setDate(start.getDate() + (competition.duration / 24));

  const msLeft = end.getTime() - Date.now();
  const secsLeft = msLeft / 1000;
  let minsLeft = secsLeft / 60;
  const hoursLeft = minsLeft / 60;

  // Construct the timer string
  return timerDigits(hoursLeft) + ":" + timerDigits(minsLeft % 60);
};


const CompetitionList = props => (
  <div>
    <div style={competitionListWrapper}>
      <h2 style={headerStyle}>Competitions</h2>
      {props.competition.competitions.length === 0 ? <div style={{ fontSize: "0.7em" }}>(No competitions running)</div> :
        props.competition.competitions.map((comp, i) => {
          return (
            <div
              onClick={() => props.selectCompetition(comp.id)}
              style={props.competition.selected === comp.id ? selectedCompetitionStyle : competitionListRowStyle}
              className="competitionListRow" key={i}>
              <span>{comp.createdBy}&rsquo;s competition</span>
              <span>&nbsp;{timeLeft(props.competition.competitions[i])}</span>
            </div>)
        })}
    </div>
    <div style={competitionControlsWrapper}>
      <CompetitionControls onCreateClicked={props.onCreateClicked} />
    </div>
  </div>
);

export default CompetitionList;