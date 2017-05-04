import React from 'react';

const CompetitionResultList = props => {
  const { competitions } = props.competition;
  /* refactor CompetitionListRow out of this */
  return (
    <div>
      {competitions.map((c, i) =>
      <div key={i}>
        <span>{c.createdBy}</span>&nbsp;
      <span>{c.language}</span>
      </div>
    )}
    </div>
  );
};

export default CompetitionResultList;