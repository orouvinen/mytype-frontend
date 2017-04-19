import React from 'react';
import CompetitionControls from './competition-controls';
import colors from '../colors';


const competitionControlsWrapper = {
  marginBottom: "10px",
};

const competitionListWrapper = {
  background: colors.primary4, 
};

const CompetitionList = props => (
  <div>
    <div style={competitionControlsWrapper}>
      <CompetitionControls onCreateClicked={props.onCreateClicked} />
    </div>
    <div style={competitionListWrapper}>
      <ul>
        {props.competition.competitions.map((comp, i) => {
          return(<li key={i}>{comp.createdBy}'s competition</li>)
        })}
      </ul>
    </div>
  </div>
);

export default CompetitionList;
