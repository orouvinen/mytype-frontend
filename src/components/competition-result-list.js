import React from 'react';
import colors from '../colors';

const resultListStyle = {
  backgroundColor: colors.primary2,
  marginTop: "5px",
  marginRight: "5px",
  padding: "5px",
  borderRadius: "1px",
  lineHeight: "2em",
};

const CompetitionResultList = props => {
  const { competitions, selected } = props.competition;
  const selectedComp = competitions[selected];

  /* refactor CompetitionListRow out of this */

  if (!selectedComp)
    return <div>No competition selected</div>
  if (selectedComp.results.length === 0)
    return <div>No results yet</div>;
  
  return (
    <div style={resultListStyle}>
      <h2>Results</h2>
      {selectedComp.results.map((r, i) => {
        return(
        <div key={i}>
          <span>{i+1}&nbsp;</span>
          <span>{r.user.name}&nbsp;</span> 
          <span>{r.wpm.toFixed(1)}&nbsp;</span>
        </div>);
      })}
    </div>
  );
};

export default CompetitionResultList;