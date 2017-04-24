import React from 'react';
import CompetitionControls from './competition-controls';
import colors from '../colors';


const competitionControlsWrapper = {
  marginBottom: "10px",
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

const timerDigits = value => ((value < 10) ? "0" : "") + Math.floor(value).toFixed(0);

const timeLeft = competition => {
  // Get creation time
  const start = new Date(competition.createdAt);
  // Work out end time
  const end = new Date(start);
  end.setDate(start.getDate() + (competition.duration / 24));

  const msLeft = end.getTime() - Date.now();
  const secsLeft = msLeft / 1000;
  let   minsLeft = secsLeft / 60;
  const hoursLeft = minsLeft / 60;
  minsLeft = minsLeft % 60;

  // Construct the timer string
  return timerDigits(hoursLeft) + ":" + timerDigits(minsLeft);
};


const CompetitionList = props => (
  <div>
    <div style={competitionControlsWrapper}>
      <CompetitionControls onCreateClicked={props.onCreateClicked} />
    </div>
    <div style={competitionListWrapper}>
      {props.competition.competitions.map((comp, i) => {
        return (
          <div style={competitionListRowStyle} className="competitionListRow" key={i}>
            <span>{comp.createdBy}'s competition</span>
            <span>&nbsp;{timeLeft(props.competition.competitions[i])}</span>
          </div>)
        })}
    </div>
  </div>
);

export default CompetitionList;
