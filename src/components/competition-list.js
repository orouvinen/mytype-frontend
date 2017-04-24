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

const CompetitionList = props => (
  <div>
    <div style={competitionControlsWrapper}>
      <CompetitionControls onCreateClicked={props.onCreateClicked} />
    </div>
    <div style={competitionListWrapper}>
        {props.competition.competitions.map((comp, i) => {
          return(<div
            style={competitionListRowStyle}
            className="competitionListRow"
            key={i}>{comp.createdBy}'s competition
          </div>)
        })}
    </div>
  </div>
);

export default CompetitionList;
