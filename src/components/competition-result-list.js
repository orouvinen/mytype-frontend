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

const resultsTableStyle = {
  width: "100%",
};

const CompetitionResultList = props => {
  const { competitions, selected } = props.competition;
  const selectedComp = competitions[selected];

  /* refactor CompetitionListRow out of this */
  if (!selectedComp)
    return <div>No competition selected</div>
  /*
  if (selectedComp.results.length === 0)
    return <div>No results yet</div>;
 */
  return (
    <div style={resultListStyle}>
      <h2>Results</h2>
      {selectedComp.results.length === 0 ? <div>No results yet, go type!</div> :
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
                  <td>{r.user.name}</td>
                  <td>{r.wpm.toFixed(1)}</td>
                </tr>);
            })}
          </tbody>
        </table>}
    </div>
  );
};

export default CompetitionResultList;