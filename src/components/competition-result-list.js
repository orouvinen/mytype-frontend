import React from 'react';
import { Link } from 'react-router';

const resultsTableStyle = {
  marginTop: "5px",
  width: "100%",
};

const CompetitionResultList = props => {
  const { competitions, selected } = props.competition;
  const selectedComp = competitions[selected];

  /* refactor CompetitionListRow out of this */
  if (!selectedComp)
    return <div>No competition selected</div>;
    
  return (
    <div className="borderedContainer">
      <h3 className="headerBar">Leaderboard</h3>
      {selectedComp.results.length === 0 ? <div>No results yet, be the first!</div> :
        <table style={resultsTableStyle}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>WPM</th>
            </tr>
          </thead>
          <tbody>
            {selectedComp.results.map((r, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td><Link to={`/profile/${r.user.id}`}>{r.user.name}</Link></td>
                  <td>{r.wpm.toFixed(1)}</td>
                </tr>);
            })}
          </tbody>
        </table>}
    </div>
  );
};

export default CompetitionResultList;