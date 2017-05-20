import React from 'react';

const CompetitionResultList = props => {
  const { competitions, selected } = props.competition;
  const selectedComp = competitions[selected];
  /* refactor CompetitionListRow out of this */
  // if (!selectedComp || !selectedComp.results)
  //  return null;

  if (!selectedComp)
    return <div>No competition selected</div>
  else return (
    <div>
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